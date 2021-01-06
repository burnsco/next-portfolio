import { chakra, useColorModeValue } from "@chakra-ui/react"
import dynamic from "next/dynamic"

const HeaderContent = dynamic(() => import("./Content"))

function Navbar() {
  const bg = useColorModeValue("gainsboro", "#202020")
  return (
    <chakra.header
      pos="fixed"
      top="0"
      zIndex="1"
      bg={bg}
      left="0"
      right="0"
      boxShadow="base"
      width="full"
    >
      <HeaderContent />
    </chakra.header>
  )
}
export default Navbar
