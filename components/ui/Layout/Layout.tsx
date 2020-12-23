import { Flex } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { ScrollingProvider } from "react-scroll-section"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex
      display="flex"
      flexDirection="column"
      justifyContent="center"
      webkitFontSmoothing="antialiased"
      mozOsxFontSmoothing="grayscale"
      MsTextSizeAdjust="100%"
      WebkitTextSizeAdjust="100%"
      WebkitTapHighlightColor="rgba(0,0,0,0)"
      textRendering="optimizeLegibility"
      overflowX="hidden"
      wordWrap="break-word"
      fontKerning="normal"
      mozFontFeatureSettings={["case", 1, "rlig", 1, "calt", 0]}
      msFontFeatureSettings={["case", 1, "rlig", 1, "calt", 0]}
      webkitFontFeatureSettings={["case", 1, "rlig", 1, "calt", 0]}
      fontFeatureSettings={["case", 1, "rlig", 1, "calt", 0]}
      minWidth="100%"
      minHeight="100vh"
    >
      <ScrollingProvider>{children}</ScrollingProvider>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
