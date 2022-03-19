import { Flex } from "@chakra-ui/react"
import PropTypes from "prop-types"

export default function Layout(props: { children:React.ReactNode}){

return (
  <Flex
    flexDirection="column"
    justifyContent="center"
    minWidth="100%"
    minHeight="100vh"
    wordBreak="break-word"
  >
    {props.children}
  </Flex>
)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

