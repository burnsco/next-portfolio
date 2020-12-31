import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react"
import smoothscroll from "smoothscroll-polyfill"
import { Provider } from "./context"
import debounce from "./debounce"

type Props = {
  debounceDelay: number
  scrollBehavior: "auto" | "smooth"
  offset: number
  children: ReactNode
}

const REFS: RefsRegister = {}
const META: Meta = {}

if (typeof window !== "undefined") {
  smoothscroll.polyfill()
}

const ScrollingProvider = ({
  debounceDelay,
  scrollBehavior,
  offset,
  children
}: Props) => {
  const [selected, setSelected] = useState("")

  const handleScroll = useCallback(() => {
    const selectedSection = Object.keys(REFS).reduce(
      (acc, id) => {
        if (!REFS[id].current)
          return {
            id,
            differenceFromTop: 0
          }
        const { top } = REFS[id].current.getBoundingClientRect()
        const differenceFromTop = Math.abs(top)

        if (differenceFromTop >= acc.differenceFromTop) return acc

        return {
          differenceFromTop,
          id
        }
      },
      {
        differenceFromTop: 9999,
        id: ""
      }
    )
    if (selected !== selectedSection.id) setSelected(selectedSection.id)
  }, [selected])

  const debounceScroll = debounce(handleScroll, debounceDelay)

  useEffect(() => {
    document.addEventListener("scroll", debounceScroll, true)
    handleScroll()
    return () => {
      document.removeEventListener("scroll", debounceScroll, true)
    }
  }, [debounceScroll, handleScroll])

  const registerRef = ({ id, meta }: { id: string; meta: unknown }) => {
    const ref = React.createRef<HTMLElement>()
    REFS[id] = ref
    META[id] = meta
    return ref
  }

  const scrollTo = useCallback(
    () => (section: string) => {
      const sectionRef = REFS[section]

      if (!sectionRef) return console.warn("Section ID not recognized!") // eslint-disable-line

      const top = sectionRef.current.offsetTop + offset
      setSelected(section)
      window.scrollTo({
        top,
        behavior: scrollBehavior
      })
      return sectionRef
    },
    [offset, scrollBehavior]
  )

  const value = useMemo(
    () => ({
      registerRef,
      scrollTo,
      refs: REFS,
      meta: META,
      selected
    }),
    [selected, scrollTo]
  )

  return <Provider value={value}>{children}</Provider>
}

export default ScrollingProvider
