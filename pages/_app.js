import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "@/components/CartContext";
import { SessionProvider } from "next-auth/react";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  body{
    // background-color: #eee;
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;

    background-size: cover;
    background-repeat: no-repeat
  } 
  .carousel.carousel-slider .control-arrow {
    top: 0;
    background-color: #222 !important;
    font-size: 26px;
    bottom: 0;
    margin-top: 0;
    padding: 5px;
    margin-bottom: none;
    
  }
  .carousel .control-dots .dot{
    background-color: cyan!important;
  }
  hr{
    display: block;
    border:0;
    border-top:1px solid #ccc;
  }
`;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <GlobalStyles />
      <SessionProvider session={session}>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </SessionProvider>
    </>
  );
}
