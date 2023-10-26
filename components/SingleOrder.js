// // the orders of the users ( related to account page )
// import styled from "styled-components";

// const StyledOrder = styled.div`
//   margin: 10px 0;
//   padding: 20px;
//   border: 1px solid #ddd;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #f5f5f5;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   transition: box-shadow 0.3s;
//   cursor: pointer;
//   transform-origin: center;
//   transform: perspective(500px) rotateX(0);
//   backface-visibility: hidden;

//   // newmorphism (optional)
//   // box-shadow: -5px 5px 6px #5a5a5a, -5px -5px 6px #ffffff;
//   // background-color: #fff;

//   &:not(:last-child) {
//     margin-bottom: 20px;
//   }

//   &:hover {
//     transition: all 0.3s;
//     transform: translateY(-10px);
//   }

//   @keyframes tilt {
//     0% {
//       transform: perspective(900px) rotateX(0deg);
//     }
//     100% {
//       transform: perspective(500px) rotateX(5deg);
//     }
//   }
// `;

// const OrderInfo = styled.div`
//   flex: 1;
// `;

// const OrderDate = styled.time`
//   font-size: 1rem;
//   color: #555;
// `;

// const Address = styled.div`
//   font-size: 0.9rem;
//   color: #777;
//   margin-top: 8px;
// `;

// const Products = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
// `;

// const ProductRow = styled.div`
//   margin-top: 10px;
//   font-size: 1rem;

//   span {
//     color: #aaa;
//   }
// `;

// export default function SingleOrder({ line_items, createdAt, ...rest }) {
//   return (
//     <StyledOrder>
//       <OrderInfo>
//         <OrderDate>{new Date(createdAt).toLocaleString("sv-SE")}</OrderDate>
//         <Address>
//           {rest.name}
//           <br />
//           {rest.phoneNumber}
//           <br />
//           {rest.email}
//           <br />
//           {rest.streetAddress}
//           <br />
//           {rest.postalCode}, {rest.city}, {rest.country}
//         </Address>
//       </OrderInfo>
//       <Products>
//         {line_items.map((item, index) => (
//           <ProductRow key={index}>
//             <span>{item.quantity} x </span>
//             {item.price_data.product_data.name}
//           </ProductRow>
//         ))}
//       </Products>
//     </StyledOrder>
//   );
// }

import React from "react";
import jsPDF from "jspdf";
import styled from "styled-components";

const StyledOrder = styled.div`
  margin: 10px 0;
  padding: 20px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  cursor: pointer;
  transform-origin: center;
  transform: perspective(500px) rotateX(0);
  backface-visibility: hidden;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover {
    transition: all 0.3s;
    transform: translateY(-10px);
  }
`;

const OrderInfo = styled.div`
  flex: 1;
`;

const OrderDate = styled.time`
  font-size: 1rem;
  color: #555;
`;

const Address = styled.div`
  font-size: 0.9rem;
  color: #777;
  margin-top: 8px;
`;

const Products = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ProductRow = styled.div`
  margin-top: 10px;
  font-size: 1rem;

  span {
    color: #aaa;
  }
`;

const GenPdf = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: blue;
  color: white;
  padding: 5px;
`;

function generatePDF(data) {
  const doc = new jsPDF();

  doc.setFont("times", "bold");
  doc.setFontSize(18);

  // Title background color
  doc.setFillColor(0, 51, 102); // R, G, B (Blue color)
  doc.rect(0, 0, 210, 30, "F"); // Fill a rectangle as the header background

  // Title text color
  doc.setTextColor(255); // White color
  doc.text("Order Invoice", 105, 20, { align: "center" });

  // Reset text color
  doc.setTextColor(0); // Reset to black

  // Set font and size for content
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  // Order Date
  doc.setTextColor(230, 5, 5);
  doc.text("Order Date:", 20, 40);
  doc.text(data.createdAt, 70, 40);
  doc.line(20, 44, 190, 44);

  // Customer Name
  doc.setTextColor(4, 52, 130);
  doc.text("Customer Name:", 20, 55);
  doc.text(data.name, 70, 55);
  doc.line(20, 59, 190, 59);

  // Phone Number
  doc.setTextColor(4, 52, 130);
  doc.text("Phone Number:", 20, 70);
  doc.text(data.phoneNumber, 70, 70);
  doc.line(20, 74, 190, 74);

  // Email
  doc.text("Email:", 20, 85);
  doc.text(data.email, 70, 85);
  doc.line(20, 89, 190, 89);

  // // Address
  // doc.text("Shipping Address:", 20, 100);
  // doc.text(data.streetAddress, 70, 100);

  // // Address
  // doc.text("Billing Address:", 20, 130);
  // doc.text(data.streetAddress, 70, 130);

  // // Postal Code, City, Country
  // doc.text(data.postalCode, 70, 110);
  // doc.text(data.city, 90, 110);
  // doc.text(data.country, 120, 110);
 

  // // Postal Code, City, Country
  // doc.text(data.postalCode, 70, 140);
  // doc.text(data.city, 90, 140);
  // doc.text(data.country, 120, 140);


// Combined Address
const combinedAddress = `${data.streetAddress}, ${data.postalCode}, ${data.city}, ${data.country}`;
doc.text(`Shipping Address: ${combinedAddress}`, 20, 100);

// Combined Address
const newAddress = `${data.streetAddress}, ${data.postalCode}, ${data.city}, ${data.country}`;
doc.text(`Billing Address: ${newAddress}`, 20, 108);


  //Seller Address
  doc.text("Seller Address: 123 ABC Street, Hyderabad, Telangana, India, 500001", 20, 116);

  doc.line(20, 155, 190, 155);

  // Line items
  doc.setTextColor(230, 5, 5);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Order Items:", 20, 160);
  doc.line(20, 163, 190, 163);

  doc.setFont("INRFont"); // Set the custom font for the INR symbol
  doc.setFontSize(12);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  let yOffset = 173;
  data.line_items.forEach((item) => {
  doc.text(`Item name: ${item.price_data.product_data.name}`, 20, yOffset);
  doc.text(`Unit Price: ${item.price_data.unit_amount / 100}`, 20, yOffset + 7);
  doc.text(`Quantity: ${item.quantity}`, 20, yOffset + 14);
  doc.text(
    `Net Amount: ${(item.quantity * item.price_data.unit_amount) / 100}`,
    20,
    yOffset + 21
  );
  yOffset += 35; // Adjusted yOffset for the next item
});


  yOffset += 5;
  doc.setTextColor(8, 7, 7);
  doc.setFont("helvetica", "bold");
  doc.line(20, yOffset-13, 190, yOffset-13);
  doc.text(`Total Price: Rs.${data.totalPrice}`, 20, yOffset-3);

  doc.text("GST Number:  29AALCA0171E1ZV", 20, yOffset+7);



  // Save or download the PDF
  doc.save("your receipt");
}

export default function SingleOrder({ line_items, createdAt, ...rest }) {
  const totalPrice = line_items.reduce((total, item) => {
    return total + (item.quantity * item.price_data.unit_amount) / 100;
  }, 0);

  return (
    <>
      <StyledOrder
        onClick={() => {
          generatePDF({ line_items, createdAt, ...rest, totalPrice });
          alert("PDF generated successfully!");
        }}
      >
        <OrderInfo>
          <OrderDate>{new Date(createdAt).toLocaleString("sv-SE")}</OrderDate>
          <Address>
            {rest.name}
            <br />
            {rest.phoneNumber}
            <br />
            {rest.email}
            <br />
            {rest.streetAddress}
            <br />
            {rest.postalCode}, {rest.city}, {rest.country}
          </Address>
        </OrderInfo>
        <Products>
          {line_items.map((item, index) => (
            <ProductRow key={index}>
              <span>{item.quantity}x </span>
              {item.price_data.product_data.name}
              <br /> <br />
              {/* <p>Price:</p> <span>₹{item.price_data.unit_amount / 100}</span> */}
            </ProductRow>
          ))}
        </Products>
        {/* <div>
          <strong>Total Price: ₹{totalPrice}</strong>
        </div> */}
      </StyledOrder>
    </>
  );
}
