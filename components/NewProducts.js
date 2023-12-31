// the top header page
import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import ScrollToTopButton from "./ScrollToTopButton";
import HeaderTwo from "./HeaderTwo";
import { RevealWrapper } from "next-reveal";

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
`;

export default function NewProducts({ products, wishedProducts }) {
  return (
    <>
      <Center>
        <Title>New Arrivals</Title>
        <RevealWrapper origin="left">
          <hr />
        </RevealWrapper>
        <ProductsGrid products={products} wishedProducts={wishedProducts} />
      </Center>
      <div className="my-4">
        <HeaderTwo />
      </div>
      <ScrollToTopButton />
    </>
  );
}
