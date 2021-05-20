import { HStack } from "@chakra-ui/react"
import HeaderContent from "./Content"

export default function Navbar() {
  return (
    <HStack
      as="header"
      pos="fixed"
      id="navbar"
      zIndex="1"
      h="3em"
      bg="white"
      left="0"
      right="0"
      width="full"
    >
      <HeaderContent />
    </HStack>
  )
}
