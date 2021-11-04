import { Box, chakra, Heading, HStack, List, ListItem } from "@chakra-ui/react"
import { Link } from "react-scroll"

function capitalizedTitle(title: string) {
  return title.charAt(0).toUpperCase() + title.slice(1)
}

const ChakraLink = chakra(Link)

export default function Navbar({ sections }: any) {
  return (
    <HStack
      as="header"
      pos="fixed"
      id="navbar"
      zIndex="1"
      h="3em"
      bg="white"
      left="0"
      right="0"
      width="full"
    >
      <HStack
        aria-label="Primary Navigation"
        as="nav"
        px="2em"
        h="full"
        w="full"
        justifyContent="space-between"
      >
        <ChakraLink
          _hover={{ cursor: "pointer" }}
          activeClass="active"
          spy
          smooth
          duration={500}
          to="home"
          as={Heading}
          fontSize={["sm", "md"]}
          fontFamily="Dancing Script"
        >
          Corey Burns
        </ChakraLink>
        <HStack w="md" justify="space-evenly" as={List}>
          {sections.map((sec: { id: string }) => (
            <Box
              key={`nav-item-${sec.id}`}
              as={ListItem}
              fontFamily="Nunito"
              fontSize={{ sm: "10px", md: "12px" }}
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="widest"
              aria-label={`Page ${sec.id}`}
            >
              <ChakraLink
                _hover={{ cursor: "pointer", color: "p2" }}
                activeClass="active"
                to={`${sec.id}`}
                spy
                smooth
                duration={500}
              >
                {capitalizedTitle(sec.id)}
              </ChakraLink>
            </Box>
          ))}
        </HStack>
      </HStack>
    </HStack>
  )
}
