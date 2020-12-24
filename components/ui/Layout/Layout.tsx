import { Flex } from "@chakra-ui/react"
import PropTypes from "prop-types"
import ScrollingProvider from "./../ScrollSections/ScrollingProvider"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex
      as="main"
      display="flex"
      flexDirection="column"
      justifyContent="center"
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
