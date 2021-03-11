import { ChakraProvider, Flex } from "@chakra-ui/react"
import theme from "@theme/theme"
import PropTypes from "prop-types"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Flex
      flexDirection="column"
      justifyContent="center"
      minWidth="100%"
      minHeight="100vh"
      wordBreak="break-word"
    >
      {children}
    </Flex>
  </ChakraProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
