import { chakra } from "@chakra-ui/react"
import Headroom from "react-headroom"
import HeaderContent from "./Content"

const Navbar = () => (
  <Headroom>
    <chakra.header
      id="navbar"
      zIndex="1"
      bg="#292a2d"
      left="0"
      right="0"
      width="full"
    >
      <HeaderContent />
    </chakra.header>
  </Headroom>
)

export default Navbar
