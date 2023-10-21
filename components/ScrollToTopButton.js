import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "styled-components";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: ${({ visible }) => (visible ? "block" : "none")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.3s, display 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton
      onClick={scrollToTop}
      visible={isVisible}
    >
      <KeyboardArrowUpIcon />
    </ScrollButton>
  );
}

export default ScrollToTopButton;
