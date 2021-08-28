import NextDocument, { Head, Html, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  // fix this later
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
