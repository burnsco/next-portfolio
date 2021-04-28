import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import colors from "./colors"

const styles = {
  global: (props: any) => ({
    "html, body": {
      color: mode("gray.800", "gray.700")(props),
      bg: mode("gray.100", "gray.100")(props),
      height: "100%",
      width: "100%",
      position: "relative",
      fontSize: "md",
      lineHeight: "tall"
    },
    p: {
      fontSize: "sm",
      lineHeight: "1.4"
    }
  })
}

const fonts = {
  heading: "Poppins",
  body: "Poppins"
}

const textStyles = {
  "nav-link": {
    fontSize: ["xs", "sm"]
  },
  "section-heading": {
    textAlign: "center",
    color: "#343436",
    fontWeight: 900,
    lineHeight: "2",
    fontSize: { base: "2.1rem", sm: "2.2rem", md: "2.4rem" }
  },
  "list-heading": {
    fontFamily: "Rubik",
    fontWeight: 700,
    color: "gray.600",
    my: 4,
    mb: 1
  },
  caps: {
    textTransform: "uppercase",
    fontSize: "sm",
    letterSpacing: "widest",
    fontWeight: "bold"
  }
}

const config = {
  initialColorMode: "light",
  useSystemColorMode: false
}

const theme = extendTheme({
  ...config,
  styles,
  textStyles,
  colors,
  fonts
})

export default theme
