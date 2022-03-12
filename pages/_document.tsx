import NextDocument, { Head, Html, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  // fix this later
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&
          family=Raleway:wght@400;500;600;700;800;900&family=Dancing+Script:wght@700&family=Lato:wght@400;500;800;900&family=Montserrat:wght@800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
