import { Box } from "@chakra-ui/react"
import { HeroSocialIcons } from "@common/index"

const RightSideBar = () => (
  <Box
    pos="fixed"
    width="40px"
    id="Sidebar"
    zIndex="1"
    bg="white"
    top="0"
    right="0"
    bottom="0"
  >
    <HeroSocialIcons />
  </Box>
)

export default RightSideBar
