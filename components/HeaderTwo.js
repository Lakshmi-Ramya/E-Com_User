import styled from "styled-components";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { RevealWrapper } from "next-reveal";
import Zoom from "react-reveal/Zoom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Accessories from "./Accessories";
import Support from "./Support";
import FooterComponent from "./FooterComponent";
import keyframes from "styled-components";

// const DarkDiv = styled.div`
//   background-color: black;
//   color: #fff;
//   padding: 10px;
//   text-align: center;
//   max-width: 100% !important;
//   margin-top: 0px;
// `;
const DarkDiv = styled.div`
  background: linear-gradient(-180deg, #333, #111, #050921);
  color: #fff;
  padding: 10px;
  text-align: center;
  max-width: 100% !important;
  margin-top: 0px;
  // background-size: 200% 200%;
  // animation: gradientAnimation 8s alternate infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const LightDiv = styled.div`
  background-color: #fff;
  color: black;
  padding: 20px;
  text-align: center;
  max-width: 100% !important;
  margin-top: 40px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0px;
`;

const TextButtons = styled.div`
  color: #2997ff; /* Button text color */
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
`;

const CarouselImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
const DiscountBanner = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 0px;
`;
export default function HeaderTwo({ product }) {
  return (
    <>
      {/* Iphone 15 section */}
      <LightDiv>
        <h1 style={{ fontSize: "60px" }}>iphone 15</h1>
        <p style={{ fontSize: "24px" }}>New Camera. New Design. Newphoria</p>
        <ButtonContainer>
          <TextButtons>
            Learn More <ChevronRightIcon />
          </TextButtons>
          <TextButtons>
            Buy <ChevronRightIcon />
          </TextButtons>
        </ButtonContainer>
        <Zoom duration={2500}>
          <img
            src="./images/Iphone 15 red no bg.png"
            alt="series 19"
            className="image"
          />
        </Zoom>
      </LightDiv>

      {/* Applewatch series 19 section */}
      <DarkDiv>
        <img
          style={{ width: "220px" }}
          src="../images/apple watch cropped bg.png"
          alt="Apple Watch"
        />
        <p style={{ color: "red", fontSize: "24px" }}>Series 9</p>
        <p style={{ fontSize: "20px" }}>Smarter. Brighter. Mightier</p>
        <ButtonContainer>
          <TextButtons>
            Learn More <ChevronRightIcon />
          </TextButtons>
          <TextButtons>
            Buy <ChevronRightIcon />
          </TextButtons>
        </ButtonContainer>

        <Zoom duration={2500} delay={200}>
          <img src="./images/applewatch.png" alt="Series 9" className="image" />
        </Zoom>
      </DarkDiv>

      {/* Carousel section */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0px",
          marginBottom: "0px",
        }}
      >
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          swipeable={true}
          useKeyboardArrows={true}
          showStatus={false}
          showThumbs={false}
          interval={6000}
        >
          <div>
            <CarouselImage
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696866343/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/October/iPhone/iPhone%2015/HP_iPhone15_10oct2023_su7rhp.jpg?tr=w-2048"
              alt="Carousel Image 1"
            />
          </div>
          <div>
            <CarouselImage
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696918123/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/October/iPhone/iPhone%2013/HP_iPhone13_10oct2023_atu1cf.jpg?tr=w-2048"
              alt="Carousel Image 2"
            />
          </div>
          <div>
            <CarouselImage
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696857170/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/October/Oct%2010th/HP_BTSpkrs_10oct2023_z92dyq.jpg?tr=w-2048"
              alt="Carousel Image 3"
            />
          </div>
          <div>
            <CarouselImage
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696857173/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/October/Oct%2010th/HP_Tablets_10oct2023_agfl6e.jpg?tr=w-2048"
              alt="Carousel Image 4"
            />
          </div>
        </Carousel>
      </div>

      {/* Display DiscountBanner as an image */}
      <DarkDiv>
        <DiscountBanner
          src="./images/Group_1.png"
          alt="Discount Banner"
          style={{ width: "100%" }}
        />

        {/* ACCESORIES */}

        <Accessories />
      </DarkDiv>

      {/* SUPPORT */}
      <Support />

      {/* FOOTER */}
      <FooterComponent />
    </>
  );
}
