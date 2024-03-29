import { extendTheme } from "@chakra-ui/react"

const styles = {
  styles: {
    global: {
      "html, body": {
        color: "gray.800",
        bg: "gray.50",
        minW: "100%",
        minH: "100%",
        lineHeight: "tall"
      },
      ":root": {
        MotionEase: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
        MotionDuration: "0.3s"
      }
    }
  }
}

const fonts = {
  heading: "Raleway",
  body: "Lato"
}

const colors = {
  mainGrey: "#bfced9",
  mainYellow: "#fce38c",
  mainBlack: "#4a494b",
  mainBlackish: "#3b373a",
  mainSubBlack: "#5f6565",
  mainRed: "#fc5271",
  black: "#010100",
  oliveBlack: "#36382E",
  b1: "#2d3748",
  hero1: "#252323",
  hero2: "#292a2d",
  hero3: "#3b3d42",
  shadow: "#373737",
  graphite: "#594D58",
  cloud: "#C5C6D0",
  iron: "#322D31",
  primary: "#292a2d",
  secondary: "#3b3d42",
  blackolive: "#36382E",
  highlight: "#F9FBFB",
  footer: "#F5F1ED",
  slategray: "#70798C",
  amber: "#FDB750",
  orange1: "#FD7F20",
  t1: "#de5f5f",
  t2: "#555",
  t3: "#db3a34",
  t4: "#ffc857",
  t5: "#343436",
  t6: "#323031",
  t7: "#177e89",
  t8: "#959595",
  t9: "#FDEF52",
  t10: "#3A99D8",
  grullo: "#A99985",
  text: "rgba(80, 81, 79, 1)",
  maintest: "#F25F5C",
  asidetest: "#FFE066",
  sectiontest: "#009cde",
  blackcoral: "#495867ff",
  blueyonder: "#577399ff",
  beaublue: "#bdd5eaff",
  ghostwhite: "#f7f7ffff",
  redorange: "#FC2E20",
  orangeredcrayola: "#fe5f55ff",
  testtest: "#bfff00",
  m1: "#ED254E",
  m2: "#F9DC5C",
  m3: "#F4FFFD",
  m4: "#011936",
  m5: "#465362",
  muted: "#e2e8f0",
  f1: "rgba(255, 252, 242, 1)",
  f2: "rgba(204, 197, 185, 1)",
  f3: "rgba(64, 61, 57, 1)",
  f4: "rgba(37, 36, 34, 1)",
  f5: "rgba(235, 94, 40, 1)",
  light: "#f7fafc",
  background: "#FFFFFF",
  textMuted: "#718096",
  bone: "#DAD2BC",
  platinum: "#EDE6E3",
  gainsboro: "#DADAD9",
  orangesoda: "#F06449",
  saffron: "#F39237",
  oranget1: "rgba(243,147, 55,1)",
  oranget2: "rgba(255,193,135,1)",
  oranget3: "rgba(255,172, 93,1)",
  oranget4: "rgba(215,113, 16,1)",
  persianred: "#D63230",
  coolred: "#f55555",
  white1: "#FFFFFF",
  white2: "#F8F8F8",
  white3: "#F0F0F0",
  white4: "#E8E8E8",
  white5: "#E0E0E0",
  p1: "#ED6B66",
  p2: "#f65855",
  p3: "#C45D89",
  p4: "#855C92",
  p5: "#4A567D",
  p6: "#2F4858",
  lime: "#bfff00",
  success: "#9ae6b4",
  blue1: "#009cde",
  blue2: "rgba(25, 130, 196, 1)",
  blue3: "#63b3ed",
  skyblue: "#5BC3EB",
  carolinablue: "#00A5E0",
  lightblue: "#39A9DB",
  bluegreen: "#40BCD8",
  warning: "#faf089",
  danger: "#feb2b2",
  purple1: "#772ce8",
  purple2: "#451093",
  purple3: "#a970ff",
  l1: "#5aa9e6ff",
  l2: "#7fc8f8ff",
  l3: "#f9f9f9ff",
  l4: "#ffe45eff",
  l5: "#ff6392ff"
}

const theme = extendTheme({
  styles,
  colors,
  fonts
})

export default theme
