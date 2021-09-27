import { Box, chakra, Heading, HStack, List, ListItem } from "@chakra-ui/react"
import { sections } from "@configs/site-config/sections"
import { Link } from "react-scroll"

function capitalizedTitle(title: string) {
  return title.charAt(0).toUpperCase() + title.slice(1)
}

const ChakraLink = chakra(Link)

export default function HeaderContent() {
  return (
    <HStack
      aria-label="Primary Navigation"
      as="nav"
      px="2em"
      h="full"
      w="full"
      justifyContent="space-between"
    >
      <Heading
        _hover={{ cursor: "pointer" }}
        activeClass="active"
        spy
        smooth
        duration={500}
        to="home"
        as={ChakraLink}
        fontSize="md"
        fontFamily="Dancing Script"
      >
        Corey Burns
      </Heading>
      <HStack w="md" justify="space-evenly" as={List}>
        {sections.map(sec => (
          <Box
            key={`nav-item-${sec.id}`}
            as={ListItem}
            fontFamily="Rubik"
            fontSize="10px"
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
  )
}
