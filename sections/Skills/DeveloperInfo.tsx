import { Box, List, ListIcon, ListItem } from "@chakra-ui/react"
import EmailIcon from "@common/icons/email-icon"
import data from "@configs/Skills/about-me"

export default function DeveloperInfo() {
  return (
    <Box p={2} border="2px solid purple">
      <List>
        <ListItem textStyle="list-heading">
          <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
          {data.title}
        </ListItem>

        {data.excerpt.map(p => (
          <ListItem
            p={2}
            as="h2"
            fontSize={{ base: "xs", md: "sm" }}
            key={`devInfo-${p.text}`}
          >
            {p.text}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
