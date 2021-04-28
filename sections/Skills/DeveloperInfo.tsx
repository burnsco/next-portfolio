import { Box, List, ListIcon, ListItem } from "@chakra-ui/react"
import DevInfoIcon from "@common/icons/dev-info-icon"
import data from "@configs/Skills/about-me"

export default function DeveloperInfo() {
  return (
    <Box p={2}>
      <List>
        <ListItem textStyle="list-heading">
          <ListIcon
            textShadow="dark-lg"
            as={DevInfoIcon}
            boxSize={5}
            color="red.500"
          />
          {data.title}
        </ListItem>
        <>
          {data.excerpt.map(p => (
            <ListItem
              fontFamily="Rubik"
              fontWeight="300"
              fontSize={{ base: "xs", md: "sm" }}
              key={`devInfo-${p.text}`}
            >
              {p.text}
            </ListItem>
          ))}
        </>
      </List>
    </Box>
  )
}
