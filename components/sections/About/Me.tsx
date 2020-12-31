import { EmailIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { Container } from "@common/index"
import data from "configs/about-me"

export default function AboutMe() {
  return (
    <Container as="article">
      <List>
        <ListItem textStyle="list-heading">
          <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
          {data.title}
        </ListItem>

        {data.excerpt.map(paragraph => (
          <ListItem
            fontSize={{ base: "xs", md: "sm" }}
            key={`p-${paragraph.text}`}
          >
            {paragraph.text}
          </ListItem>
        ))}
      </List>
    </Container>
  )
}
