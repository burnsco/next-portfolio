import { extendTheme } from "@chakra-ui/react"
import colors from "./colors"
import { fonts } from "./fonts"
import { styles } from "./styles"
import { textStyles } from "./text-styles"

const theme = extendTheme({
  styles,
  textStyles,
  colors,
  fonts
})

export default theme
