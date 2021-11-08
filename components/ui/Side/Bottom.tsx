import { Box } from "@chakra-ui/react"
import HeroSocialIconHor from "@common/icons/hero-social-icons-hor"

const BottomSideBar = () => (
  <Box
    pos="fixed"
    height={{ base: "2.0em", sm: "3em" }}
    width="full"
    id="Sidebar"
    zIndex="1"
    bg="white"
    left={{ base: "0", sm: "0em" }}
    right={{ base: "2.5em", sm: "3em" }}
    bottom="0"
  >
    <HeroSocialIconHor />
  </Box>
)

export default BottomSideBar
