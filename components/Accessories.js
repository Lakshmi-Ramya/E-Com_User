// Import React and styled-components (assuming they are already imported)
import styled from "styled-components";
import React from "react";
import Title from "./Title";
import Center from "./Center";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 0 1 calc(25% - 20px); /* Adjust the width as needed */
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  max-width: 250px; /* Max width for each card */
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const CardTitle = styled.h3`
  text-align: center;
  margin: 20px 0;
  margin-bottom: 50px;
`;

const CardPrice = styled.p`
  text-align: center;
  margin: 0;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff; /* Initial background color */
  transition: background-color 0.2s; /* Add a smooth transition effect */

  ${Card}:hover & {
    background-color: red; /* Background color when hovered */
  }
`;

function Accessories() {
  const products = [
    {
      id: 1,
      title: "Portronics Adapto Type C 20w Charger for Android",
      price: "₹399",
      imageSrc: "./images/41AHEO-ofUL._SX679_-removebg-preview.png",
    },
    {
      id: 2,
      title: "OnePlus Type-C Auxiliary Adapter",
      price: "₹390",
      imageSrc: "./images/dongle oneplus.png",
    },
    {
      id: 3,
      title: "Portronics Clamp M2 Adjustable Car Mobile Phone Holder Stand",
      price: "₹252",
      imageSrc: "./images/41H7NUu_b4L._SX679_-removebg-preview.png",
    },
    {
      id: 4,
      title: "New Apple AirTag",
      price: "₹3,490",
      imageSrc: "./images/71L5lSfJIPS._SX679_-removebg-preview.png",
    },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Accessories</h1>
      <CardContainer>
        {products.map((product) => (
          <Card key={product.id}>
            <CardImage src={product.imageSrc} alt={product.title} />
            <div>
              <CardTitle>{product.title}</CardTitle>
            </div>
            <CardPrice>{product.price}</CardPrice>
          </Card>
        ))}
      </CardContainer>
    </>
  );
}

export default Accessories;
