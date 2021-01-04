import { ChakraProvider } from "@chakra-ui/react"
import siteConfig from "@configs/site/site-config"
import theme from "@theme/index"
import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import Head from "next/head"

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Roboto+Slab:wght@900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <DefaultSeo {...siteConfig.seo} />
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
)

export default App
