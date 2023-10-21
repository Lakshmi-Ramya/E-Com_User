// import styled from "styled-components";
// // import Center from "./Center";
// import ProductBox from "./ProductBox";
// import Center from "../components/Center";
// import { RevealWrapper } from "next-reveal";
// import ProductsGrid from "./ProductsGrid";

// const Title = styled.h2`
//   font-size: 2rem;
//   font-weight: 400;
// `;

// export default function NewProducts({ products, wishedProducts }) {
//   return (
//     <Center>
//       <Title>New Arrivals</Title>
//       <RevealWrapper origin="left">
//         <ProductsGrid
//           products={products}
//           wishedProducts={wishedProducts}
//         ></ProductsGrid>
//       </RevealWrapper>
//     </Center>
//   );
// }

import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import ScrollToTopButton from "./ScrollToTopButton";
import HeaderTwo from "./HeaderTwo";

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
        <ProductsGrid products={products} wishedProducts={wishedProducts} />
      </Center>
      <div className="my-4">
        <HeaderTwo />
      </div>
      <ScrollToTopButton />
    </>
  );
}
