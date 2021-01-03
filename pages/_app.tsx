import { ChakraProvider } from "@chakra-ui/react"
import siteConfig from "@configs/site/site-config"
import theme from "@theme/index"
import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...siteConfig.seo} />
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
