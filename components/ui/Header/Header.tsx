import { Box, Flex } from "@chakra-ui/react"
import { NextChakraLink } from "@components/common/index"
import Headroom from "react-headroom"
import { ScrollingProvider, useScrollSections } from "../ScrollSections"

const Header = () => {
  const sections = useScrollSections()

  return (
    <ScrollingProvider>
      <Box
        as={Headroom}
        style={{
          zIndex: 9
        }}
        sx={{
          zIndex: 9,
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
              key={`nextlink-${id}`}
              href={`${id}`}
              passHref
              aria-label={`nav-${id}`}
              onClick={onClick}
              scroll={selected}
            >
              {id}
            </NextChakraLink>
          ))}
        </Flex>
      </Box>
    </ScrollingProvider>
  )
}
export default Header
