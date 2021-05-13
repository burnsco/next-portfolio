import { Box, HStack, Icon } from "@chakra-ui/react"
import { ContactDrawer } from "@common/index"
import sections from "@configs/site-config/sections"
import { motion } from "framer-motion"
import { AiOutlineHome } from "react-icons/ai"
import { Link } from "react-scroll"

function capitalizedTitle(title: string) {
  return title.charAt(0).toUpperCase() + title.slice(1)

  // $primary: #de5f5f;
  // $black: #555;
  // $primar2: #db3a34
  // $impary3: #ffc857
  // $grey: #343436;
  // $black: #323031
  // $green: #177e89
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
      px={2}
      justifyContent="space-between"
    >
      <Icon color="white" h={5} w={5} as={AiOutlineHome} />
      <HStack w="md" justify="space-evenly" as="ul">
        {sections.map(sec => (
          <motion.div
            key={`nav-item-${sec.id}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Box
              as="li"
              textStyle="nav-link"
              color="whitesmoke"
              _hover={{
                cursor: "pointer",
                color: "ghostwhite",
                transition: "all 0.2s cubic-bezier(.08,.52,.52,1)"
              }}
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
      <ContactDrawer />
    </HStack>
  )
}
