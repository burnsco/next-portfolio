import { ChakraProvider } from "@chakra-ui/react"
import theme from "@styles/theme"
import { AppProps } from "next/app"
import Head from "next/head"
import FontFace from "../components/ui/FontFace/fontFace"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#16161D" />
      </Head>

      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
      <FontFace />
    </>
  )
}

export default MyApp
