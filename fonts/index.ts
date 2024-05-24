import {
  Dancing_Script,
  Lato,
  Montserrat,
  Nunito,
  Raleway
} from "next/font/google"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap"
})
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap"
})
const dancing = Dancing_Script({
  subsets: ["latin"],
  display: "swap"
})
const lato = Lato({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700", "900"],
  display: "swap"
})
const monte = Montserrat({
  subsets: ["latin"],
  display: "swap"
})

export { dancing, lato, monte, nunito, raleway }
