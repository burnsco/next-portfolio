import { Flex, Text } from "@chakra-ui/react"
import { ContactDrawer } from "@common/index"
import sections from "@configs/site-config/sections"
import { motion } from "framer-motion"
import { Link } from "react-scroll"

function capitalizedTitle(title: string) {
  return title.charAt(0).toUpperCase() + title.slice(1)
}

export default function HeaderContent() {
  return (
    <Flex
      aria-label="Primary Navigation"
      as="nav"
      w="full"
      justifyContent="space-evenly"
      alignItems="center"
      p={[1, 2, 3]}
    >
      {sections.map(sec => (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Text
            color="whitesmoke"
            _hover={{ color: "saffron" }}
            fontWeight="500"
            fontSize={["xs", "sm", "md"]}
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
          </Text>
        </motion.div>
      ))}
      <ContactDrawer />
    </Flex>
  )
}
