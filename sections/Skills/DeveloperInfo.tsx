import { Box, chakra, List, ListItem } from "@chakra-ui/react"
import data from "@configs/Skills/about-me"

export default function DeveloperInfo() {
  return (
    <Box p={2}>
      <List>
        <ListItem textStyle="list-heading">
          <chakra.span
            p={1}
            fontWeight="700"
            bgGradient="linear(to-b, rgba(243,147, 55,1),rgb(250, 112, 154))"
            color="white"
            textTransform="uppercase"
          >
            {data.title}
          </chakra.span>
        </ListItem>
        <Box mt="1">
          {data.excerpt.map(p => (
            <ListItem
              fontWeight="300"
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
