import { Box, Heading, HStack, List, ListItem } from "@chakra-ui/react"
import { sections } from "@configs/site-config/sections"
import { ChakraScrollLink } from "@lib/chakraScrollLink"
import { dancing, nunito } from "fonts"

function capitalizedTitle(title: string) {
  return title.charAt(0).toUpperCase() + title.slice(1)
}


export default function Navbar() {
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
        px={{ base: "1em", sm: "2em", xl: "4em" }}
        h="full"
        w="full"
        justifyContent="space-between"
      >
        <ChakraScrollLink
          className={dancing.className}
          display={{ base: "none", sm: "block" }}
          _hover={{ cursor: "pointer" }}
          activeclass="active"
          duration={500}
          to={`home`}
          spy={true}
          smooth={true}
          as={Heading}
          fontSize={["xs", "md"]}
          fontFamily="Dancing Script"
        >
          Corey Burns
        </ChakraScrollLink>
        <HStack w="lg" justify="space-evenly" as={List}>
          {sections.map((sec: { id: string }) => (
            <Box
              className={nunito.className}
              key={`nav-item-${sec.id}`}
              as={ListItem}
              color="#444444"
              fontFamily="Nunito"
              fontWeight={{ base: 800, md: 700 }}
              textTransform="uppercase"
              letterSpacing="widest"
              aria-label={`Page ${sec.id}`}
            >
              <ChakraScrollLink
                activeStyle={{
                  color: "#d77f74"
                }}
                _hover={{ cursor: "pointer", color: "#d77f74" }}
                activeClass="active"
                to={`${sec.id}`}
                spy={true}
                smooth={true}
                fontSize={{ base: "8.5px", md: "10.5px" }}
                duration={500}
              >
                <span>{capitalizedTitle(sec.id)}</span>
              </ChakraScrollLink>
            </Box>
          ))}
        </HStack>
      </HStack>
    </HStack>
  )
}
