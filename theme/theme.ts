import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import colors from "./colors"

const styles = {
  global: (props: any) => ({
    "html, body": {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "gray.100")(props),
      height: "100%",
      width: "100%",
      position: "relative",
      fontSize: "md",
      lineHeight: "tall"
    }
  })
}

const fonts = {
  sans:
    '"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  serif: '"Roboto Slab",Helveltica,Cambria,"Times New Roman",Times,serif',
  monospace:
    '"SF Mono","Roboto Mono",Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  body:
    '"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  heading: "inherit"
}

const textStyles = {
  "section-heading": {
    textAlign: "center",
    color: "blackolive",
    fontFamily: "Roboto Slab",
    fontWeight: 900,
    letterSpacing: "tight",
    lineHeight: "1.24",
    fontSize: { base: "2.5rem", sm: "2.7rem", md: "2.9rem" }
  },
  "list-heading": {
    fontSize: "20px",
    fontWeight: 800,
    letterSpacing: "tight",
    my: 4,
    mb: 1
  },
  "heading-2": {
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "-0.015em",
    lineHeight: "1.24",
    fontSize: { base: "1.75rem", md: "2.75rem" }
  },
  caps: {
    textTransform: "uppercase",
    fontSize: "sm",
    letterSpacing: "widest",
    fontWeight: "bold"
  }
}

const shadows = {
  avatar:
    "0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)"
}

const layerStyles = {
  base: {
    bg: "gray.50",
    border: "2px solid",
    borderColor: "gray.500"
  },
  selected: {
    bg: "teal.500",
    color: "teal.700",
    borderColor: "orange.500"
  }
}

const config = {
  initialColorMode: "light",
  useSystemColorMode: false
}

const theme = extendTheme({
  ...config,
  styles,
  layerStyles,
  textStyles,
  shadows,
  colors,
  fonts
})

export default theme
