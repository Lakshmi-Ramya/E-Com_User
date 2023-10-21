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
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//   &:not(:last-child) {
//     margin-bottom: 20px;
//   }
// `;
// const ProductRow = styled.div`
//   span {
//     color: #aaa;
//   }
// `;
// const Address = styled.div`
//   font-size: 0.8rem;
//   line-height: 1rem;
//   margin-top: 5px;
//   color: #888;
// `;

// export default function SingleOrder({ line_items, createdAt, ...rest }) {
//   return (
//     <StyledOrder>
//       <div>
//         <time>{new Date(createdAt).toLocaleString("sv-SE")}</time>
//         <Address>
//           {rest.name}
//           <br />
//           {rest.email}
//           <br />
//           {rest.streetAddress}
//           <br />
//           {rest.postalCode}, {rest.city}, {rest.country}
//         </Address>
//       </div>
//       <div>
//         {line_items.map((item) => (
//           <ProductRow>
//             <span>{item.quantity} x </span>
//             {item.price_data.product_data.name}
//           </ProductRow>
//         ))}
//       </div>
//     </StyledOrder>
//   );
// }

// the ORDERS of the cutomer are stored here

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
    animation: tilt 1s alternate;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #d5d5d5, white 100%, grey);
  }

  @keyframes tilt {
    0% {
      transform: perspective(900px) rotateX(0deg);
    }
    100% {
      transform: perspective(500px) rotateX(5deg);
    }
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

export default function SingleOrder({ line_items, createdAt, ...rest }) {
  return (
    <StyledOrder>
      <OrderInfo>
        <OrderDate>{new Date(createdAt).toLocaleString("sv-SE")}</OrderDate>
        <Address>
          {rest.name}
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
            <span>{item.quantity} x </span>
            {item.price_data.product_data.name}
          </ProductRow>
        ))}
      </Products>
    </StyledOrder>
  );
}
