import { Box, chakra, List, ListIcon, ListItem } from "@chakra-ui/react"
import data from "@configs/Skills/about-me"
import { FcInfo } from "react-icons/fc"

export default function DeveloperInfo() {
  return (
    <Box p={2}>
      <List>
        <ListItem>
          <ListIcon as={FcInfo} boxSize="6" />
          <chakra.span
            fontFamily="Poppin"
            fontWeight="700"
            color="f4"
            opacity="0.8"
            textTransform="uppercase"
          >
            {data.title}
          </chakra.span>
        </ListItem>
        <Box mt="1">
          {data.excerpt.map(p => (
            <ListItem
              fontWeight="400"
              color="#606060"
              opacity="1"
              transform="matrix(1,0,0,1,0,0)"
              fontFamily="Lato"
              fontSize={{ base: "xs", md: "sm" }}
              key={`devInfo-${p.text}`}
            >
              {p.text}
            </ListItem>
          ))}
        </Box>
      </List>
    </Box>
  )
}
