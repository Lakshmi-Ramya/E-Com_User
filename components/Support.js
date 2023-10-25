import styled from "styled-components";
import React from "react";
import Center from "./Center";
import { RevealWrapper } from "next-reveal";
import ChatIcon from "@mui/icons-material/Chat";

const Support = styled.div`
  font-size: 2rem;
  margin: 30px 0 20px;
  padding: 10px 20px;
  font-weight: normal;
`;
const Support1 = styled.div`
  display: flex;
  margin: 30px;
  width: calc(50% - 10px);
  justify-content: space-between;
  margin-bottom: 50px;
  // background-color: #f8f8f8;
`;
const SupportBox = styled.div`
  display: flex;
`;
const Support1In = styled.div`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  flex: unset;
  width: calc(50% - 10px);
  border-radius: 5px;
  // background-color: rgba(0, 220, 255, 0.1);
  border-bottom: 2px inset grey;
  border-top: 2px inset grey;
`;
const Support1InImage = styled.div`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  flex: unset;
  width: calc(50% - 10px);
`;
const SupportImage = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
`;

const BoxOne = styled.div`
  border: 1px solid red;
`;

const Heading = styled.h1`
  // background-color: rgba(0, 220, 255, 0.1);
  padding: 10px;
  font-weight: 500;
  border-radius: 5px;
`;

const CommonComponent = styled.div`
  width: "100%",
  fontWeight: 400,
  boxSizing: "border-box",
  display: "block",
`;

const Para = styled.p`
  width: "100%",
  fontWeight: 400,
  color: "rgba(0, 0, 0, 0.96)",
  fontSize: "14px",
  padding: "10px",
`;

export default function SupportComponent() {
  return (
    <>
      <Support>
        <Center>
          <Title>Support</Title>
          <RevealWrapper origin="left">
            <hr />
          </RevealWrapper>
        </Center>
      </Support>
      <SupportBox>
        <Support1>
          <Support1In>
            {/* BOX ONE */}
            <CommonComponent>
              <Heading>Your personal helpdesk.</Heading>
            </CommonComponent>
            <CommonComponent>
              <p
                style={{
                  width: "100%",
                  fontWeight: 400,
                  color: "rgba(0, 0, 0, 0.96)",
                  fontSize: "14px",
                  padding: "10px",
                }}
              >
                From finding the perfect phone to quickly resolving queries,
                we're always ready to help.
              </p>
              <a
                href=""
                style={{
                  width: "100%",
                  fontWeight: 400,
                  color: "rgba(0, 0, 0, 0.96)",
                  fontSize: "16px",
                  padding: "10px",
                }}
              >
                Let’s chat
              </a>
              <h1></h1>
            </CommonComponent>
          </Support1In>
          <Support1InImage>
            {/* <SupportImage src="https://www.oneplus.in/content/dam/oasis/page/2022/new-homepage/na/homepage/support/Helpdesk-PC.jpg.thumb.webp" /> */}
            <SupportImage src="./images/schat1 no bg.png" />
          </Support1InImage>
        </Support1>
        <Support1>
          {/* BOX TWO */}
          <Support1In>
            <CommonComponent>
              <Heading>Our technical team is here to help</Heading>
            </CommonComponent>
            <div
              style={{
                width: "100%",
                fontWeight: 400,
                boxSizing: "border-box",
                display: "block",
              }}
            >
              <p
                style={{
                  width: "100%",
                  fontWeight: 400,
                  color: "rgba(0, 0, 0, 0.96)",
                  fontSize: "14px",
                  padding: "10px",
                }}
              >
                Our Pan-India support network can help connect you to any
                required service centers.
              </p>
              <a
                href=""
                style={{
                  width: "100%",
                  fontWeight: 400,
                  color: "rgba(0, 0, 0, 0.96)",
                  fontSize: "16px",
                  padding: "10px",
                }}
              >
                Find nearest service center
              </a>
              <h1></h1>
            </div>
          </Support1In>
          <Support1InImage>
            {/* <SupportImage src="https://www.oneplus.in/content/dam/oasis/page/2022/operation/sep/0906/homepage/Service-Center-desktop.jpg.thumb.webp" /> */}
            <SupportImage src="./images/tech team two no bg.png" />
          </Support1InImage>
        </Support1>
      </SupportBox>
    </>
  );
}
