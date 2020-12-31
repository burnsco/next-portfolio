import { Flex } from "@chakra-ui/react"
import { ScrollingProvider } from "@common/scroll-sections/index"
import PropTypes from "prop-types"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Flex
    as="main"
    flexDirection="column"
    justifyContent="center"
    minWidth="100%"
    minHeight="100vh"
    wordBreak="break-word"
  >
    <ScrollingProvider>{children}</ScrollingProvider>
  </Flex>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
