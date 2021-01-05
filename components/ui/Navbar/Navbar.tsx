import { chakra } from "@chakra-ui/react"
import dynamic from "next/dynamic"

const HeaderContent = dynamic(() => import("./HeaderContext"))

function Navbar() {
  return (
    <chakra.header bg="hero1" width="full">
      <HeaderContent />
    </chakra.header>
  )
}
export default Navbar
