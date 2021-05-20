import { Box } from "@chakra-ui/react"
import { HeroSocialIcons } from "@common/index"

const RightSideBar = () => (
  <Box
    pos="fixed"
    width="3em"
    id="rightBar"
    zIndex="1"
    bg="white"
    top="3em"
    right="0"
    bottom="0"
  >
    <HeroSocialIcons />
  </Box>
)

export default RightSideBar
