import {
  Flex,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"
import { ContactDrawer } from "@common/index"
import sections from "@configs/site-config/sections"
import { FaMoon, FaSun } from "react-icons/fa"
import { Link } from "react-scroll"

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
        <Text
          color="whitesmoke"
          fontWeight="500"
          fontSize={["xs", "sm", "md"]}
          aria-label={`Page ${sec.id}`}
          display="block"
          key={sec.id}
        >
          <Link activeClass="active" to={`${sec.id}`} spy smooth duration={500}>
            {capitalizedTitle(sec.id)}
          </Link>
        </Text>
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
