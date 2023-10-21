// import { useState } from "react";
// import Button from "@mui/material/Button";
// import styled from "styled-components";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import Link from "next/link";
// import { useContext } from "react";
// import { CartContext } from "./CartContext";
// import FlyingButton from "./FlyingButton";
// import HeartOutlineIcon from "./icons/HeartOutlineIcon";
// import HeartSolidIcon from "./icons/HeartSolidIcon";
// import axios from "axios";

// const ProductWrapper = styled.div`
//   button {
//     width: 100%;
//     text-align: center;
//     justify-content: center;
//   }
//   transition: transform 0.2s;

//   &:hover {
//     transform: translateY(-10px);
//   }
// `;

// const WhiteBox = styled(Link)`
//   background-color: #fff;
//   padding: 20px;
//   height: 120px;
//   border-radius: 5px;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   img {
//     max-width: 100%;
//     max-height: 120px;
//   }
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
// `;

// const Title = styled(Link)`
//   font-weight: normal;
//   font-size: 0.9rem;
//   margin: 0;
//   color: inherit;
//   text-decoration: none;
// `;

// const ProductInfoBox = styled.div`
//   margin-top: 10px;
// `;

// const PriceRow = styled.div`
//   display: block;
//   @media screen and (min-width: 768px) {
//     display: flex;
//     gap: 5px;
//   }
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 2px;
// `;

// const Price = styled.div`
//   font-size: 1rem;
//   font-weight: 400;
//   text-align: right;
//   @media screen and (min-width: 768px) {
//     font-size: 1rem;
//     font-weight: 600;
//     text-align: left;
//   }
// `;
// const WishlistButton = styled.button`
//   border: 0;
//   width: 40px !important;
//   height: 40px;
//   padding: 10px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   background: transparent;
//   cursor: pointer;
//   ${(props) =>
//     props.wished
//       ? `
//     color:red;
//   `
//       : `
//     color:black;
//   `}
//   svg {
//     width: 16px;
//   }
// `;

// export default function ProductBox({
//   _id,
//   title,
//   description,
//   price,
//   images,
//   wished = false,
//   onRemoveFromWishlist = () => {},
// }) {
//   const url = "/product/" + _id;
//   const [isWished, setIsWished] = useState(wished);
//   function addToWishlist(ev) {
//     ev.preventDefault();
//     ev.stopPropagation();
//     const nextValue = !isWished;
//     if (nextValue === false && onRemoveFromWishlist) {
//       onRemoveFromWishlist(_id);
//     }
//     axios
//       .post("/api/wishlist", {
//         product: _id,
//       })
//       .then(() => {});
//     setIsWished(nextValue);
//   }

//   return (
//     <ProductWrapper>
//       <WhiteBox href={url}>
//         <div>
//           <WishlistButton wished={isWished} onClick={addToWishlist}>
//             {isWished ? <HeartSolidIcon /> : <HeartOutlineIcon />}
//           </WishlistButton>
//           <img src={images[0]} alt="" />
//         </div>
//       </WhiteBox>
//       <ProductInfoBox>
//         <Title href={url}>{title}</Title>
//         <PriceRow>
//           <Price>
//             <div>₹{price}</div>
//           </Price>
//           <FlyingButton _id={_id} src={images?.[0]}>
//             <ShoppingCartIcon />
//           </FlyingButton>
//         </PriceRow>
//       </ProductInfoBox>
//     </ProductWrapper>
//   );
// }

import styled from "styled-components";
import Button, { ButtonStyle } from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { primary } from "@/lib/colors";
import FlyingButton from "@/components/FlyingButton";
import HeartOutlineIcon from "@/components/icons/HeartOutlineIcon";
import HeartSolidIcon from "@/components/icons/HeartSolidIcon";
import axios from "axios";

const ProductWrapper = styled.div`
  button {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
  // transition: transform 0.2s;

  // &:hover {
  //   transform: translateY(-10px);
  // }
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  img {
    max-width: 100%;
    max-height: 120px;
    transition: transform 0.2s;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      60deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.4)
    );
    backdrop-filter: blur(5px);
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover img {
    transform: scale(1.15);
  }
  &:hover:before {
    opacity: 1; /* Make the glass effect visible on hover */
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;

const WishlistButton = styled.button`
  border: 0;
  width: 40px !important;
  height: 40px;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  cursor: pointer;
  ${(props) =>
    props.wished
      ? `
    color:red;
  `
      : `
    color:black;
  `}
  svg {
    width: 16px;
  }
`;

export default function ProductBox({
  _id,
  title,
  description,
  price,
  images,
  wished = false,
  onRemoveFromWishlist = () => {},
}) {
  const url = "/product/" + _id;
  const [isWished, setIsWished] = useState(wished);
  function addToWishlist(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const nextValue = !isWished;
    if (nextValue === false && onRemoveFromWishlist) {
      onRemoveFromWishlist(_id);
    }
    axios
      .post("/api/wishlist", {
        product: _id,
      })
      .then(() => {});
    setIsWished(nextValue);
  }
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <WishlistButton wished={isWished} onClick={addToWishlist}>
            {isWished ? <HeartSolidIcon /> : <HeartOutlineIcon />}
          </WishlistButton>
          <img src={images?.[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>₹{price}</Price>
          <FlyingButton _id={_id} src={images?.[0]}>
            Add to cart
          </FlyingButton>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
