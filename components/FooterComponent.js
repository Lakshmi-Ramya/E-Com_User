import styled from "styled-components";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PlaceIcon from "@mui/icons-material/Place";
import InfoIcon from "@mui/icons-material/Info";

const Footer = styled.footer`
  background-color: #222;
  padding: 20px;
  border-top: 1px solid #ddd;
  text-decoration: none;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 20px;
  h4 {
    font-size: 20px;
    color: #fff;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: #aaa;
    font-size: 16px;
    &:hover {
      color: #2997ff;
    }
  }
`;

const AdditionalSection = styled.div`
  border-top: 1px solid #454d5e;
  padding: 25px 0;
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    margin-right: 8px;
  }
  a {
    text-decoration: none;
    color: #aaa;
    font-size: 16px;
    &:hover {
      color: #2997ff;
    }
  }
`;

export default function FooterComponent() {
  return (
    <Footer>
      <FooterContainer>
        <FooterSection>
          <h4>About Us</h4>
          <ul>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press Releases</a>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>Customer Service</h4>
          <ul>
            <li>
              <a href="#">Help & Contact</a>
            </li>
            <li>
              <a href="#">Returns & Refunds</a>
            </li>
            <li>
              <a href="#">Online Orders</a>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#">Deals & Promotions</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Best Sellers</a>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>Connect with Us</h4>
          <ul>
            <li>
              <a href="#">
                <FacebookIcon /> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon /> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon /> Instagram
              </a>
            </li>
          </ul>
        </FooterSection>
      </FooterContainer>
      <AdditionalSection>
        <StorefrontIcon style={{ color: "gold", fontSize: "16px" }} />
        <a href="#">
          <span>Shop with Confidence</span>
        </a>
        <SearchIcon style={{ color: "gold", fontSize: "16px" }} />
        <a href="#">
          <span>Discover More</span>
        </a>
        <PlaceIcon style={{ color: "gold", fontSize: "16px" }} />
        <a href="#">
          <span>Find Us Nearby</span>
        </a>
        <InfoIcon style={{ color: "gold", fontSize: "16px" }} />
        <a href="#">
          <span>Help Center</span>
        </a>
        <span className="licence" style={{ color: "white" }}>
          © 2023-2025 <span>E-Commerce</span>
        </span>
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
          alt="Payment methods"
        />
      </AdditionalSection>
    </Footer>
  );
}
