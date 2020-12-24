import { createContext } from "react"

const DEFAULT_CONTEXT = {
  selected: "",
  refs: {},
  meta: {},
  scrollTo: () => {},
  registerRef: () => null
}

const ScrollContext = createContext<ScrollContextType>(DEFAULT_CONTEXT)

export const { Consumer, Provider } = ScrollContext

export default ScrollContext
