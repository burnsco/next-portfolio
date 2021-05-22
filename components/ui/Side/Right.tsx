import { VStack } from "@chakra-ui/react"
import { HeroSocialIcons } from "@common/index"

const RightSideBar = () => (
  <VStack
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
  </VStack>
)

export default RightSideBar
