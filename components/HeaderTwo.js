import styled from "styled-components";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { RevealWrapper } from "next-reveal";
import Zoom from "react-reveal/Zoom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Accessories from "./Accessories";

const DarkDiv = styled.div`
  background-color: black;
  color: #fff;
  padding: 20px;
  text-align: center;
  max-width: 100% !important;
  margin-top: 40px;
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
            class="image"
          />
        </Zoom>
      </LightDiv>

      {/* Applewatch series 19 secton */}
      <DarkDiv>
        <img
          style={{ width: "220px" }}
          src="../images/apple watch cropped bg.png"
        ></img>

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
          <img src="./images/applewatch.png" alt="series 19" class="image" />
        </Zoom>
      </DarkDiv>

      {/* carousel section */}

      <div
        style={{
          opacity: "90%",
          background: "white",
          marginTop: "40px",
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ maxWidth: "600px" }}
              src="https://aks-next-ecom.s3.amazonaws.com/1696583021178.png"
              alt="Carousel Image 1"
              className="image"
            />
          </div>
          <div>
            <img
              style={{ maxWidth: "600px" }}
              src="https://aks-next-ecom.s3.amazonaws.com/1696583447733.png"
              alt="Carousel Image 2"
              className="image"
            />
          </div>
          <div>
            <img
              style={{ maxWidth: "600px" }}
              src="https://aks-next-ecom.s3.amazonaws.com/1696674642943.png"
              alt="Carousel Image 2"
              className="image"
            />
          </div>
          <div>
            <img
              style={{ maxWidth: "700px" }}
              src="https://aks-next-ecom.s3.amazonaws.com/1696743456170.png"
              alt="Carousel Image 2"
              className="image"
            />
          </div>
        </Carousel>
      </div>

      {/* Accesories */}
      <DarkDiv>
        <Accessories />
      </DarkDiv>
    </>
  );
}
