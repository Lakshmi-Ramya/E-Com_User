// image magnification

import styled from "styled-components";
import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import LoupeIcon from "@mui/icons-material/Loupe";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const BigImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`;
const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`;
const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active
      ? `
      border-color: #ccc;
    `
      : `
      border-color: transparent;
    `}
  height: 40px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
`;
const BigImageWrapper = styled.div`
  text-align: center;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <BigImageWrapper>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Product Image",
              isFluidWidth: true,
              src: activeImage,
            },
            largeImage: {
              src: activeImage,
              width: 800,
              height: 800,
            },
            lensStyle: {
              backgroundColor: "rgba(0,0,0,0.1)",
            },
            isHintEnabled: true,
            enlargedImageContainerDimensions: {
              width: "100%", // Customize the width of the enlarged image container
              height: "100%", // Customize the height of the enlarged image container
            },
            enlargedImageContainerStyle: {
              border: "2px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              padding: "90px",
              backgroundColor: "#fff",
              zIndex: "1000", // Ensure the container is above other elements
            },
          }}
        />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            key={image}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} alt="" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
