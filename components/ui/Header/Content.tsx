import {
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"
import { ContactDrawer, NextChakraLink } from "@common/index"
import sections from "@configs/site-config/sections"
import { FaMoon, FaSun } from "react-icons/fa"

function capitalizedTitle(title: string) {
  return title.charAt(0).toUpperCase() + title.slice(1)
}

export default function HeaderContent() {
  const { toggleColorMode: toggleMode } = useColorMode()

  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  const text = useColorModeValue("dark", "light")

  return (
    <Flex
      aria-label="Primary Navigation"
      as="nav"
      justifyContent="space-evenly"
      alignItems="center"
      p={[1, 2, 3]}
    >
      {sections.map(sec => (
        <NextChakraLink
          href={sec.href}
          fontSize={["xs", "sm", "md"]}
          aria-label={`Page ${sec.id}`}
          display="block"
          key={sec.id}
        >
          {capitalizedTitle(sec.id)}
        </NextChakraLink>
      ))}
      <ContactDrawer />
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        ml={{ base: "0", md: "3" }}
        onClick={toggleMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  )
}
