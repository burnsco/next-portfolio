import { Box, Button, chakra, Flex } from "@chakra-ui/react"
import { useScrollSections } from "@common/scroll-sections/useScrollSection"
import Headroom from "react-headroom"

function capitalizedTitle(title: string) {
  return title.charAt(0).toUpperCase() + title.slice(1)
}

function HeaderContent() {
  const sections = useScrollSections()
  return (
    <Box
      as={Headroom}
      zIndex={9}
      transition="background-color 0.1s ease"
      width="100%"
    >
      <Flex
        aria-label="Primary"
        as="nav"
        justifyContent="space-evenly"
        alignItems="center"
        p={[1, 2, 3]}
      >
        {sections.map(({ id, onClick, selected }) => (
          <Button
            fontSize={["xs", "sm", "md"]}
            aria-label={`nav-${id}`}
            onClick={onClick}
            selected={selected}
            fontWeight={500}
            _hover={{
              color: "oranget3"
            }}
            display="block"
            transition="all 0.3s"
            color={selected ? `oranget3` : "gainsboro"}
            key={id}
          >
            {capitalizedTitle(id)}
          </Button>
        ))}
      </Flex>
    </Box>
  )
}

function Header(props: any) {
  return (
    <chakra.header bg="hero1" width="full" {...props}>
      <HeaderContent />
    </chakra.header>
  )
}
export default Header
