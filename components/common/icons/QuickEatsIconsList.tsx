import { HStack, Icon } from "@chakra-ui/react"
import {
  SiFirebase,
  SiReact,
  SiRedux,
  SiSass,
  SiStyledComponents
} from "react-icons/si"

const QuickEatsIconsList = () => (
  <HStack spacing={4}>
    <Icon as={SiReact} />
    <Icon as={SiStyledComponents} boxSize={6} />
    <Icon as={SiRedux} />
    <Icon as={SiSass} />
    <Icon as={SiFirebase} />
  </HStack>
)

export default QuickEatsIconsList
