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
      h={{ base: "2.5em", sm: "3em" }}
      bg="white"
      left="0"
      right="0"
      width="full"
    >
      <HStack
        aria-label="Primary Navigation"
        as="nav"
        px={{ base: "1em", md: "3em" }}
        h="full"
        w="full"
        justifyContent="space-between"
      >
        <ChakraLink
          _hover={{ cursor: "pointer" }}
          activeclass="active"
          duration={500}
          to="home"
          as={Heading}
          fontSize={["xs", "md"]}
          fontFamily="Dancing Script"
        >
          Corey Burns
        </ChakraLink>
        <HStack w="lg" justify="space-evenly" as={List}>
          {sections.map((sec: { id: string }) => (
            <Box
              key={`nav-item-${sec.id}`}
              as={ListItem}
              color="#444444"
              fontFamily="Nunito"
              fontWeight={{ base: 800, md: 700 }}
              textTransform="uppercase"
              letterSpacing="widest"
              aria-label={`Page ${sec.id}`}
            >
              <ChakraLink
                _hover={{ cursor: "pointer", color: "orange" }}
                activeclass="active"
                to={`${sec.id}`}
                fontSize={{ base: "8.5px", md: "10.5px" }}
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
