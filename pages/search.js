import Header from "@/components/Header";
import Center from "@/components/Center";
import Input from "@/components/Input";
import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import ProductsGrid from "@/components/ProductsGrid";
import { debounce } from "lodash";
import Spinner from "@/components/Spinner";
import { RevealWrapper } from "next-reveal";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const SearchInput = styled(Input)`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  font-size: 1.1rem;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 123, 255, 0.2);

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
      0px 4px 8px rgba(0, 123, 255, 0.2);
  }
  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
      0px 4px 8px rgba(0, 123, 255, 0.4);
    border: none !important;
    outline: none;
  }
`;
const InputWrapper = styled.div`
  position: sticky;
  top: 68px;
  margin: 25px 0;
  padding: 5px 0;
`;

export default function SearchPage() {
  const [phrase, setPhrase] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearch = useCallback(debounce(searchProducts, 500), []);
  useEffect(() => {
    if (phrase.length > 0) {
      setIsLoading(true);
      debouncedSearch(phrase);
    } else {
      setProducts([]);
    }
  }, [phrase]);

  function searchProducts(phrase) {
    axios
      .get("/api/products?phrase=" + encodeURIComponent(phrase))
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      });
  }
  return (
    <>
      <Header />
      <Center>
        <InputWrapper>
          <RevealWrapper delay={150} origin="left">
            <SearchInput
              autoFocus
              value={phrase}
              onChange={(ev) => setPhrase(ev.target.value)}
              placeholder="Search for products..."
            />
          </RevealWrapper>
        </InputWrapper>
        {!isLoading && phrase !== "" && products.length === 0 && (
          <h2>No products found for query "{phrase}"</h2>
        )}
        {isLoading && <Spinner fullWidth={true} />}
        {!isLoading && products.length > 0 && (
          <ProductsGrid products={products} />
        )}
        <ScrollToTopButton />
      </Center>
    </>
  );
}
