import { Flex } from "@chakra-ui/react"
import { ScrollingProvider } from "@common/scroll-sections/index"
import PropTypes from "prop-types"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Flex
      flexDirection="column"
      justifyContent="center"
      minWidth="100%"
      minHeight="100vh"
      wordBreak="break-word"
    >
      <ScrollingProvider debounceDelay={50} scrollBehavior="smooth" offset={0}>
        {children}
      </ScrollingProvider>
    </Flex>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
