import styled from "styled-components";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DarkDiv = styled.div`
  background-color: black; /* Dark background color */
  color: #fff;
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
      <DarkDiv>
        <img
          style={{ width: "200px" }}
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
        <img src="./images/applewatch.png" alt="series 19" class="image" />
      </DarkDiv>
    </>
  );
}
