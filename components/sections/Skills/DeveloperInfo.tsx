import { List, ListIcon, ListItem } from "@chakra-ui/react"
import EmailIcon from "@common/icons/socials/email-icon"
import { Container } from "@common/index"
import data from "@configs/developer-info"

export default function DeveloperInfo() {
  return (
    <Container as="article">
      <List>
        <ListItem textStyle="list-heading">
          <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
          {data.title}
        </ListItem>

        {data.excerpt.map(paragraph => (
          <ListItem key={`devInfo-${paragraph}`}>{paragraph.text}</ListItem>
        ))}
      </List>
    </Container>
  )
}
