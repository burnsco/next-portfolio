import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = {
  sans:
    '"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  serif: '"Roboto Slab",Georgia,Cambria,"Times New Roman",Times,serif',
  monospace:
    '"SF Mono","Roboto Mono",Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  body:
    '"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  heading: "inherit"
}

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em"
})

const shadows = {
  avatar:
    "0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)"
}

const textStyles = {
  "section-heading": {
    textAlign: "center",
    color: "blackolive",
    fontFamily: "Roboto Slab",
    fontWeight: 900,
    letterSpacing: "-0.015em",
    lineHeight: "1.24",
    fontSize: { base: "2rem", sm: "2.5rem", md: "2.75rem" }
  },
  "list-heading": {
    fontWeight: 800,
    opacity: 0.8,
    color: "oliveblack",
    fontSize: { base: "md", md: "lg" },
    mb: 2
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

const colors = {
  black: "#16161D",
  oliveBlack: "#36382E",
  oranget1: "rgba(243,147, 55,1)",
  oranget2: "rgba(255,193,135,1)",
  oranget3: "rgba(255,172, 93,1)",
  oranget4: "rgba(215,113, 16,1)",
  grayDark: "#2d3748",
  hero1: "#252323",
  hero2: "#292a2d",
  hero3: "#3b3d42",
  primary: "#292a2d",
  secondary: "#3b3d42",
  blackolive: "#36382E",
  highlight: "#F9FBFB",
  footer: "#F5F1ED",
  slategray: "#70798C",
  grullo: "#A99985",
  text: "rgba(80, 81, 79, 1)",
  muted: "#e2e8f0",
  light: "#f7fafc",
  background: "#FFFFFF",
  textMuted: "#718096",
  bone: "#DAD2BC",
  platinum: "#EDE6E3",
  gainsboro: "#DADAD9",
  success: "#9ae6b4",
  orangesoda: "#F06449",
  saffron: "#F39237",
  persianred: "#D63230",
  coolred: "#f55555",
  p1: "#ED6B66",
  p2: "#f65855",
  p3: "#C45D89",
  p4: "#855C92",
  p5: "#4A567D",
  p6: "#2F4858",
  info: "#63b3ed",
  warning: "#faf089",
  danger: "#feb2b2",
  purple1: "#772ce8",
  purple2: "#451093",
  purple3: "#a970ff",
  skyblue: "#5BC3EB",
  blueDark: "rgba(25, 130, 196, 1)",
  carolinablue: "#00A5E0",
  lightblue: "#39A9DB",
  bluegreen: "#40BCD8",
  bluegreenlight: "#60cde5"
}

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Inter, sans-serif"
      },
      p: {
        color: "primary",
        fontSize: { base: "xs", md: "sm", lg: "md", xl: "lg" }
      },
      li: {
        color: "primary",
        fontSize: { base: "xs", md: "sm", lg: "md", xl: "lg" }
      },
      ".headroom--pinned": {
        boxShadow: "lg",
        bg: "hero1",
        zIndex: 9
      }
    }
  },
  textStyles,
  shadows,
  colors,
  fonts,
  breakpoints
})

export default theme
