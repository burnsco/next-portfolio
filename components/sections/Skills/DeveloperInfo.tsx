import { List, ListIcon, ListItem } from "@chakra-ui/react"
import EmailIcon from "@common/icons/socials/email-icon"
import data from "@configs/Skills/about-me"

export default function DeveloperInfo() {
  return (
    <List>
      <ListItem textStyle="list-heading">
        <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
        {data.title}
      </ListItem>

      {data.excerpt.map(p => (
        <ListItem
          as="h2"
          fontSize={{ base: "xs", md: "sm" }}
          key={`devInfo-${p.text}`}
        >
          {p.text}
        </ListItem>
      ))}
    </List>
  )
}
