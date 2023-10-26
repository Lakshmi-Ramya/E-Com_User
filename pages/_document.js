// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head></Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="./images/logo.png" />
          {/* Include the script within the Head component */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w, d) {
                  w.CollectId = "6538b99bdf70161214caba62";
                  var h = d.head || d.getElementsByTagName("head")[0];
                  var s = d.createElement("script");
                  s.setAttribute("type", "text/javascript");
                  s.async=true;
                  s.setAttribute("src", "https://collectcdn.com/launcher.js");
                  h.appendChild(s);
                })(window, document);
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
