import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import Button from "@mui/material/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { RevealWrapper } from "next-reveal";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";
import ProductBox from "@/components/ProductBox";
import Tabs from "@/components/Tabs";
import SingleOrder from "@/components/SingleOrder";

const ColsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin: 40px 0;
  p {
    margin: 5px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const WishedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media screen and (min-width: 768px) {
    display: grid;
  }
`;
const CenterButton = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;
export default function AccountPage() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [addressLoaded, setAddressLoaded] = useState(true);
  const [wishedProducts, setWishedProducts] = useState([]);
  const [wishlistLoaded, setWishlistLoaded] = useState(true);
  const [activeTab, setActiveTab] = useState("Orders");
  const [orders, setOrders] = useState([]);
  const [orderLoaded, setOrderLoaded] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  async function logout() {
    await signOut({
      callbackUrl: process.env.NEXT_PUBLIC_URL,
    });
  }
  async function login() {
    await signIn("google");
  }
  function saveAddress() {
    const data = { name, email, city, streetAddress, postalCode, country };
    axios.put("/api/address", data);
    alert("Account details saved and updated successfully!");
  }
  useEffect(() => {
    if (!session) {
      return;
    }
    setAddressLoaded(false);
    setWishlistLoaded(false);
    setOrderLoaded(false);

    axios.get("/api/address").then((response) => {
      try {
        setName(response.data?.name);
        setEmail(response.data?.email);
        setCity(response.data?.city);
        setPostalCode(response.data?.postalCode);
        setStreetAddress(response.data?.streetAddress);
        setCountry(response.data?.country);
        setAddressLoaded(true);
      } catch (err) {
        console.error(err);
      }
    });
    axios.get("/api/wishlist").then((response) => {
      setWishedProducts(response.data.map((wp) => wp.product));
      setWishlistLoaded(true);
    });
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
      setOrderLoaded(true);
    });
  }, [session]);
  function productRemovedFromWishlist(idToRemove) {
    setWishedProducts((products) => {
      return [...products.filter((p) => p._id.toString() !== idToRemove)];
    });
  }

  return (
    <>
      <Header />
      <Center>
        <ColsWrapper>
          <div>
            <RevealWrapper delay={0}>
              <WhiteBox>
                <Tabs
                  tabs={["Orders", "Wishlist"]}
                  active={activeTab}
                  onChange={setActiveTab}
                />
                {activeTab === "Orders" && (
                  <>
                    {!orderLoaded && <Spinner fullWidth={true} />}
                    {orderLoaded && (
                      <div>
                        {orders.length === 0 && <p>Login to see your orders</p>}
                        {orders.length > 0 &&
                          orders.map((o) => <SingleOrder {...o} />)}
                      </div>
                    )}
                  </>
                )}

                {activeTab === "Wishlist" && (
                  <>
                    {!wishlistLoaded && <Spinner fullWidth={true} />}
                    {wishlistLoaded && (
                      <>
                        <WishedProductsGrid>
                          {wishedProducts.length > 0 &&
                            wishedProducts.map((wp) => (
                              <ProductBox
                                key={wp._id}
                                {...wp}
                                wished={true}
                                onRemoveFromWishlist={
                                  productRemovedFromWishlist
                                }
                              />
                            ))}
                        </WishedProductsGrid>

                        {wishedProducts.length === 0 && (
                          <>
                            {session && <p>Your wishlist is empty</p>}
                            {!session && (
                              <p>Login to add products to your wishlist :D</p>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </WhiteBox>
            </RevealWrapper>
          </div>
          <div>
            <RevealWrapper delay={100}>
              <WhiteBox>
                <h2>{session ? "Account Details" : "login"}</h2>
                {!addressLoaded && <Spinner fullWidth={true} />}
                {addressLoaded && session && (
                  <>
                    <Input
                      type="text"
                      placeholder="Name"
                      value={name}
                      name="name"
                      onChange={(ev) => setName(ev.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Email"
                      value={email}
                      name="email"
                      onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <CityHolder>
                      <Input
                        type="text"
                        placeholder="City"
                        value={city}
                        name="city"
                        onChange={(ev) => setCity(ev.target.value)}
                      />
                      <Input
                        type="text"
                        placeholder="Postal Code"
                        value={postalCode}
                        name="postalCode"
                        onChange={(ev) => setPostalCode(ev.target.value)}
                      />
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
                    <CenterButton>
                      <Button
                        size="small"
                        variant="contained"
                        color="success"
                        onClick={saveAddress}
                      >
                        Save
                      </Button>
                    </CenterButton>
                    <hr />
                  </>
                )}
                {session && (
                  <Button
                    size="small"
                    variant="contained"
                    color="error"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                )}
                {!session && (
                  <Button size="small" variant="contained" onClick={login}>
                    Login with Google
                  </Button>
                )}
              </WhiteBox>
            </RevealWrapper>
          </div>
        </ColsWrapper>
      </Center>
    </>
  );
}
