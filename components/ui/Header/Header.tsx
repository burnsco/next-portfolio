import { Flex } from "@chakra-ui/react"
import { NextChakraLink } from "@components/common/index"
import Headroom from "react-headroom"
import { ScrollingProvider, useScrollSections } from "react-scroll-section"

const HeaderContainer = () => {
  const sections = useScrollSections()

  return (
    <ScrollingProvider>
      <Headroom
        style={{
          zIndex: "9999"
        }}
        sx={{
          zIndex: "9999",
          bg: "primary",
          "*": {
            transition: "background-color 0.1s ease"
          },

          ".headroom--pinned": {
            bg: "primary",
            zIndex: "9999"
          },
          width: "100%"
        }}
      >
        <Flex
          as="nav"
          role="navigation"
          sx={{
            justifyContent: "space-evenly",
            alignItems: "center",
            p: [1, 2, 3]
          }}
        >
          {sections.map(({ id, onClick, selected }) => (
            <NextChakraLink
              href={`${id}`}
              passHref
              sx={{
                fontSize: [0, 1, 2],
                color: selected ? `accent3` : `white`,
                fontWeight: 500,
                ":hover": {
                  cursor: "pointer"
                }
              }}
              aria-label={`nav-${id}`}
              onClick={onClick}
              scroll={selected}
            >
              {id}
            </NextChakraLink>
          ))}
        </Flex>
      </Headroom>
    </ScrollingProvider>
  )
}
export default HeaderContainer
