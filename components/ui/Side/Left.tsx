import { Box } from "@chakra-ui/react"

const LeftSideBar = () => (
  <Box
    pos="fixed"
    width={{ sm: "0em", md: "3em" }}
    className="leftBar"
    zIndex="1"
    bg="white"
    top="3em"
    left="0"
    bottom="0"
  ></Box>
)

export default LeftSideBar
