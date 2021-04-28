import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body
          style={{
            backgroundColor: "#EDEDED",
            fontFamily: "'Noto Sans', sans-serif",
            color: "#000000",
          }}
        >
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
