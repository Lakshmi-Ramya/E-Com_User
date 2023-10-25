import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Input from "@/components/Input";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import { RevealWrapper } from "next-reveal";
import { useSession } from "next-auth/react";
import countryData from "country-data";
import { Select } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  table thead tr th:nth-child(3),
  table tbody tr td:nth-child(3),
  table tbody tr.subtotal td:nth-child(2) {
    text-align: right;
  }
  table tr.subtotal td {
    padding: 15px 0;
  }
  table tbody tr.subtotal td:nth-child(2) {
    font-size: 1.4rem;
  }
  tr.total td {
    font-weight: bold;
  }
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
  text-align: left;
  button {
    padding: 0 !important;
  }
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 6px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const Notification = styled.div`
  position: fixed;
  top: 50px;
  right: 50px;
  background-color: rgba(51, 51, 51, 0.8); /* Darkish and semi-transparent */
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const NotificationButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
const Form = styled.form`
  display: grid;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;

const IncDecButton = styled.button`
  border-radius: 8px;
  border: none;
  cursor: pointer;
  padding-left: 15px;
  padding-right: 15px;
  // box-shadow: inset 5px 5px 10px #bababa, inset -5px -5px 10px #ffffff;
  box-shadow: 5px 5px 10px #bababa, -5px -5px 10px #ffffff;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [shippingFee, setShippingFee] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
    name: "",
    postalCode: "",
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d{10}$/;
    return re.test(phoneNumber);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    setName(name);
    if (!name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    }
  };

  const handlePhoneNumberChange = (event) => {
    const phoneNumber = event.target.value;
    setPhoneNumber(phoneNumber);
    if (!validatePhoneNumber(phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Invalid phone number (10 digits)",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "",
      }));
    }
  };

  const validatePostalCode = (postalCode) => {
    const postalCodePattern = /^[0-9]{6}$/;

    return postalCodePattern.test(postalCode);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    if (!session && !phoneNumber) {
      // Show the notification
      setShowNotification(true);
    }
  }, [session, phoneNumber]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
    }
    axios.get("/api/settings?name=shippingFee").then((res) => {
      setShippingFee(res.data.value);
    });
  }, []);

  useEffect(() => {
    if (!session) {
      return;
    }
    axios.get("/api/address").then((response) => {
      try {
        setName(response.data.name);
        setPhoneNumber(response.data.phoneNumber);
        setEmail(response.data.email);
        setCity(response.data.city);
        setPostalCode(response.data.postalCode);
        setStreetAddress(response.data.streetAddress);
        setCountry(response.data.country);
      } catch (e) {
        console.error(e);
      }
    });
  }, [session]);

  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  async function goToPayment() {
    let hasError = false;

    if (!name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
      hasError = true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Invalid phone number (10 digits)",
      }));
      hasError = true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "",
      }));
    }

    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      hasError = true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }

    if (hasError) {
      return;
    }

    const response = await axios.post("/api/checkout", {
      name,
      phoneNumber,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }
  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  useEffect(() => {
    if (isSuccess) {
      // Clear the cart when the order is successful
      clearCart();
    }
  }, [isSuccess]);

  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <RevealWrapper delay={0}>
            <Box>
              <h2>Cart</h2>

              {!cartProducts?.length && <div>Your cart is empty</div>}
              {products?.length > 0 && (
                <Table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr>
                        <ProductInfoCell>
                          <ProductImageBox>
                            <img src={product.images[0]}></img>
                          </ProductImageBox>
                          <div
                            style={{
                              marginTop: "5px",
                              fontWeight: "500",
                            }}
                          >
                            {product.title}
                          </div>
                        </ProductInfoCell>
                        <td>
                          <IncDecButton
                            onClick={() => lessOfThisProduct(product._id)}
                          >
                            -
                          </IncDecButton>

                          <QuantityLabel>
                            {
                              cartProducts.filter((id) => id === product._id)
                                .length
                            }
                          </QuantityLabel>
                          <IncDecButton
                            onClick={() => moreOfThisProduct(product._id)}
                          >
                            +
                          </IncDecButton>
                        </td>
                        <td>
                          ₹
                          {cartProducts.filter((id) => id === product._id)
                            .length * product.price}
                        </td>
                      </tr>
                    ))}
                    <tr className="subtotal">
                      <td colSpan={2}>Products</td>
                      <td>₹{total}</td>
                    </tr>
                    <tr className="subtotal">
                      <td colSpan={2}>Shipping</td>
                      <td>₹{shippingFee}</td>
                    </tr>
                    <tr className="subtotal total">
                      <td colSpan={2}>Total</td>
                      <td>₹{total + parseInt(shippingFee || 0)}</td>
                    </tr>
                  </tbody>
                </Table>
              )}
            </Box>
          </RevealWrapper>

          {!!cartProducts?.length && (
            <RevealWrapper delay={100}>
              {/* <Form> */}
              <Box>
                <h2>Order Information</h2>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={handleNameChange}
                  //onChange={(ev) => setName(ev.target.value)}
                />
                {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                <Input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  name="phoneNumber"
                  onChange={handlePhoneNumberChange}
                />
                {errors.phoneNumber && (
                  <ErrorMessage>{errors.phoneNumber}</ErrorMessage>
                )}
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={handleEmailChange}
                  //onChange={(ev) => setEmail(ev.target.value)}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                <CityHolder>
                  <Input
                    type="text"
                    placeholder="City"
                    value={city}
                    name="city"
                    onChange={(ev) => setCity(ev.target.value)}
                  />
                  {/* <Input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    name="postalCode"
                    onChange={(ev) => setPostalCode(ev.target.value)}
                    
                  /> */}
                  <Input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    name="postalCode"
                    onChange={(ev) => {
                      const inputPostalCode = ev.target.value;
                      setPostalCode(inputPostalCode);

                      if (!validatePostalCode(inputPostalCode)) {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          postalCode: "Invalid postal code",
                        }));
                      } else {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          postalCode: "",
                        }));
                      }
                    }}
                  />
                  {errors.postalCode && (
                    <ErrorMessage>{errors.postalCode}</ErrorMessage>
                  )}
                </CityHolder>
                <Input
                  type="text"
                  placeholder="Street Address"
                  value={streetAddress}
                  name="streetAddress"
                  onChange={(ev) => setStreetAddress(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Country"
                  value={country}
                  name="country"
                  onChange={(ev) => setCountry(ev.target.value)}
                />
                <Button
                  size="small"
                  variant="contained"
                  color="success"
                  onClick={goToPayment}
                  disabled={
                    !!errors.email ||
                    !!errors.phoneNumber ||
                    !!errors.name ||
                    !!errors.postalCode
                  }
                >
                  Continue to payment
                </Button>
              </Box>
              {/* </Form> */}
            </RevealWrapper>
          )}
        </ColumnsWrapper>
        <ScrollToTopButton />
      </Center>
      {showNotification && (
        <Notification>
          <div className="notification-content">
            <br />
            <p>
              Please provide your phone number so that we can reach you. This
              information is required since you are not currently logged in.
            </p>
            <NotificationButton onClick={closeNotification}>
              <CancelIcon />
            </NotificationButton>
          </div>
        </Notification>
      )}
    </>
  );
}
