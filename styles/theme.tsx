import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = {
  sans:
    '"Inter UI",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  serif: 'Georgia,Cambria,"Times New Roman",Times,serif',
  mono:
    '"SF Mono","Roboto Mono",Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  body:
    '"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  heading: "inherit",
  monospace: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
}

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em"
})

const theme = extendTheme({
  colors: {
    black: "#16161D",
    oliveBlack: "#36382E",
    transparent: "transparent",
    white: "#fff",
    accent: "rgba(243,147, 55,1)",
    accent2: "rgba(255,193,135,1)",
    accent3: "rgba(255,172, 93,1)",
    accent4: "rgba(215,113, 16,1)",
    accent5: "rgba(169, 84,  3,1)",
    grayDark: "#2d3748",
    hotgradient:
      "background-image: linear-gradient(to right, rgb(250, 112, 154) 0%, rgb(254, 225, 64) 100%)",
    hotpink: "rgb(250, 112, 154)",
    hero1: "#292a2d",
    hero2: "#3b3d42",
    primary: "#292a2d",
    secondary: "#3b3d42",
    muted: "#e2e8f0",
    success: "#9ae6b4",
    info: "#63b3ed",
    warning: "#faf089",
    danger: "#feb2b2",
    light: "#f7fafc",
    dark: "#2d3748",
    textMuted: "#718096",
    eerieblack: "#252323",
    contact: "#003459",
    text: "rgba(80, 81, 79, 1)",
    background: "#FFFFFF",
    bone: "#DAD2BC",
    platinum: "#EDE6E3",
    gainsboro: "#DADAD9",
    blackolive: "#36382E",
    highlight: "#F9FBFB",
    footer: "#F5F1ED",
    slategray: "#70798C",
    grullo: "#A99985",
    skyblue: "#5BC3EB",
    blueDark: "rgba(25, 130, 196, 1)",
    carolinablue: "#00A5E0",
    lightblue: "#39A9DB",
    bluegreen: "#40BCD8",
    bluegreenlight: "#60cde5",
    orangesoda: "#F06449",
    saffron: "#F39237",
    persianred: "#D63230",
    coolred: "#f55555"
  },
  fonts,
  breakpoints
})

export default theme
