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
  doc.text("Order Receipt", 105, 20, { align: "center" });

  // Reset text color
  doc.setTextColor(0); // Reset to black

  // Set font and size for content
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  // Order Date
  doc.text("Order Date:", 20, 40);
  doc.text(data.createdAt, 70, 40);

  // Customer Name
  doc.text("Customer Name:", 20, 55);
  doc.text(data.name, 70, 55);

  // Phone Number
  doc.text("Phone Number:", 20, 70);
  doc.text(data.phoneNumber, 70, 70);

  // Email
  doc.text("Email:", 20, 85);
  doc.text(data.email, 70, 85);

  // Address
  doc.text("Address:", 20, 100);
  doc.text(data.streetAddress, 70, 100);

  // Postal Code, City, Country
  doc.text(data.postalCode, 70, 115);
  doc.text(data.city, 100, 115);
  doc.text(data.country, 130, 115);

  // Line items
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Order Items:", 20, 140);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  let yOffset = 155;
  data.line_items.forEach((item) => {
    doc.text(
      `${item.quantity} x ${item.price_data.product_data.name}`,
      20,
      yOffset
    );
    yOffset += 15;
  });

  // Save or download the PDF
  doc.save("your receipt");
}

export default function SingleOrder({ line_items, createdAt, ...rest }) {
  return (
    <>
      <StyledOrder
        onClick={() => {
          generatePDF({ line_items, createdAt, ...rest });
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
            </ProductRow>
          ))}
        </Products>
        {/* <GenPdf onClick={() => generatePDF({ line_items, createdAt, ...rest })}>
          Generate Invoice
        </GenPdf> */}
      </StyledOrder>
    </>
  );
}
