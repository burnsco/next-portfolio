import { Box, List, ListItem } from "@chakra-ui/react"
import data from "@configs/Skills/about-me"

export default function DeveloperInfo() {
  return (
    <List pt="2em">
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
  )
}
