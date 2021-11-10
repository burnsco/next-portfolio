import { HStack, Icon } from "@chakra-ui/react"
import FirebaseIcon from "./firebase-icon"
import SiReactIcon from "./reactIcon"
import ReduxIcon from "./redux-icon"
import SassIcon from "./sass-icon"
import StyledIcon from "./styled-icon"

const QuickEatsIconsList = () => (
  <HStack spacing={4}>
    <Icon as={SiReactIcon} />
    <Icon as={StyledIcon} />
    <Icon as={ReduxIcon} />
    <Icon as={SassIcon} />
    <Icon as={FirebaseIcon} />
  </HStack>
)

export default QuickEatsIconsList
