// Import React and styled-components (assuming they are already imported)
// import styled from "styled-components";
// import React from "react";
// import Title from "./Title";
// import Center from "./Center";

// const CardContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   margin-top: 40px;
//   flex-wrap: wrap;
// `;

// const Card = styled.div`
//   flex: 0 1 calc(25% - 20px);
//   margin: 10px;
//   border: 1px solid #ddd;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   transition: transform 0.2s;
//   max-width: 250px;
//   cursor: pointer;
//   position: relative;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const CardImage = styled.img`
//   width: 100%;
//   height: auto;
//   object-fit: contain;
// `;

// const CardTitle = styled.h3`
//   text-align: center;
//   margin: 20px 0;
//   margin-bottom: 50px;
// `;

// const CardPrice = styled.p`
//   text-align: center;
//   margin: 0;
//   font-weight: bold;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: #fff;
//   transition: background-color 0.2s;

//   ${Card}:hover & {
//     background-color: red;
//   }
// `;

// function Accessories() {
//   const products = [
//     {
//       id: 1,
//       title: "Portronics Adapto Type C 20w Charger for Android",
//       price: "₹399",
//       imageSrc: "./images/41AHEO-ofUL._SX679_-removebg-preview.png",
//     },
//     {
//       id: 2,
//       title: "OnePlus Type-C Auxiliary Adapter",
//       price: "₹390",
//       imageSrc: "./images/dongle oneplus.png",
//     },
//     {
//       id: 3,
//       title: "Portronics Clamp M2 Adjustable Car Mobile Phone Holder Stand",
//       price: "₹252",
//       imageSrc: "./images/41H7NUu_b4L._SX679_-removebg-preview.png",
//     },
//     {
//       id: 4,
//       title: "New Apple AirTag",
//       price: "₹3,490",
//       imageSrc: "./images/71L5lSfJIPS._SX679_-removebg-preview.png",
//     },
//   ];

//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Accessories</h1>
//       <CardContainer>
//         {products.map((product) => (
//           <Card key={product.id}>
//             <CardImage src={product.imageSrc} alt={product.title} />
//             <div>
//               <CardTitle>{product.title}</CardTitle>
//             </div>
//             <CardPrice>{product.price}</CardPrice>
//           </Card>
//         ))}
//       </CardContainer>
//     </>
//   );
// }

// export default Accessories;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CustomDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;

  &.slick-active {
    background-color: cyan;
  }
`;

const ProductPrice = styled.p`
  font-size: 20px;
  color: cyan;
  font-weight: normal;
  background-color: rgba(0, 240, 255, 0.1);
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  backdrop-filter: blur(5px);
  cursor: pointer;
  &:hover {
    transition: all 0.4s;
    background-color: #ba0413;
    color: #fff;
  }
`;

const ProductTitle = styled.h3`
  font-weight: normal;
  margin: 10px 0;
  color: cyan;
  padding: 8px;
  border-radius: 5px;
  background-color: rgba(0, 240, 255, 0.1);
`;

const ProductImage = styled.img`
  max-width: 300px;
  height: auto;
`;

const Accessories = () => {
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

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Accessories</h1>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id} className="carousel-item">
              <div className="carousel-item-inner">
                <ImageContainer>
                  <ProductImage src={product.imageSrc} alt={product.title} />
                </ImageContainer>
                <div className="carousel-item-content">
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{product.price}</ProductPrice>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Accessories;
