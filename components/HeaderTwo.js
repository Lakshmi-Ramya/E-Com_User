import styled from "styled-components";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DarkDiv = styled.div`
  background-color: #222; /* Dark background color */
  color: #fff;
  padding: 20px;
  text-align: center;
  max-width: 100% !important;
  margin-top: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
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
        <ButtonContainer>
          <TextButtons>
            Learn More <ChevronRightIcon />
          </TextButtons>
          <TextButtons>
            Buy <ChevronRightIcon />
          </TextButtons>
        </ButtonContainer>
        <img
          src="https://aks-next-ecom.s3.amazonaws.com/1696740684287.png"
          alt="series 19"
          class="image"
        />
      </DarkDiv>
    </>
  );
}
