import { Box, HStack, Icon, Text } from "@chakra-ui/react"
import sections from "@configs/site-config/sections"
import { motion } from "framer-motion"
import { GoHome } from "react-icons/go"
import { Link } from "react-scroll"

function capitalizedTitle(title: string) {
  return title.charAt(0).toUpperCase() + title.slice(1)

  //   $primary: #de5f5f;
  // $black: #555;
  // $grey: #343436;
  // $lightgrey: #959595;
  // $yellow: #FDEF52
  // $blue: #3A99D8
  // }
}

export default function HeaderContent() {
  return (
    <HStack
      aria-label="Primary Navigation"
      as="nav"
      w="full"
      justifyContent="space-around"
      alignItems="center"
    >
      <Icon color="white" as={GoHome} />

      <HStack w="md" justify="space-evenly">
        {sections.map(sec => (
          <motion.div
            key={`nav-item-${sec.id}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Box
              textStyle="nav-link"
              color="whitesmoke"
              _hover={{ cursor: "pointer", color: "rgba(243,147, 55,1)" }}
              aria-label={`Page ${sec.id}`}
              display="block"
              key={sec.id}
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
          </motion.div>
        ))}
      </HStack>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Text
          border="1px solid white"
          p={2}
          textStyle="nav-link"
          color="white"
          _hover={{ cursor: "pointer" }}
        >
          Contact
        </Text>
      </motion.div>
    </HStack>
  )
}
