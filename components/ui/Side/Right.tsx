import { VStack } from "@chakra-ui/react"
import { HeroSocialIcons } from "@common/index"

const RightSideBar = () => (
  <VStack
    pos="fixed"
    display={{ base: "none", md: "block" }}
    width={{ base: "2.5em", md: "3em" }}
    id="rightBar"
    zIndex="1"
    bg="white"
    top={{ base: "2.5em", md: "3em" }}
    right="0"
    bottom="0"
  >
    <HeroSocialIcons />
  </VStack>
)

export default RightSideBar
