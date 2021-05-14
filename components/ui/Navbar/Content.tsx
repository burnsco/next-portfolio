import { Box, Heading, HStack, List, ListItem } from "@chakra-ui/react"
import sections from "@configs/site-config/sections"
import { Link } from "react-scroll"

function capitalizedTitle(title: string) {
  return title.charAt(0).toUpperCase() + title.slice(1)
}

export default function HeaderContent() {
  return (
    <HStack
      aria-label="Primary Navigation"
      as="nav"
      w="full"
      px={1}
      p={2}
      ml="10"
      justifyContent="space-between"
    >
      <Heading fontSize="md">CB</Heading>
      <HStack w="md" justify="space-evenly" as={List}>
        {sections.map(sec => (
          <Box
            key={`nav-item-${sec.id}`}
            as={ListItem}
            fontFamily="Nunito"
            fontSize="10px"
            fontWeight="600"
            textTransform="uppercase"
            letterSpacing="widest"
            aria-label={`Page ${sec.id}`}
          >
            <Link
              activeClass="active"
              to={`${sec.id}`}
              spy
              smooth
              duration={500}
            >
              {capitalizedTitle(sec.id)}
            </Link>
          </Box>
        ))}
      </HStack>
    </HStack>
  )
}
