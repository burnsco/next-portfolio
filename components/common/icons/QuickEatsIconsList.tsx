import { HStack, Icon } from "@chakra-ui/react"
import {
  SiFirebase,
  SiReact,
  SiRedux,
  SiSass,
  SiStyledComponents
} from "react-icons/si"

const QuickEatsIconsList = () => (
  <HStack spacing={2}>
    <Icon as={SiReact} />
    <Icon as={SiStyledComponents} />
    <Icon as={SiRedux} />
    <Icon as={SiSass} />
    <Icon as={SiFirebase} />
  </HStack>
)

export default QuickEatsIconsList
