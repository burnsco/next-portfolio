import { EmailIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { Container } from "@common/index"

export default function AboutMe({ aboutMe }: any) {
  return (
    <Container>
      <List>
        <ListItem textStyle="list-heading">
          <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
          {aboutMe.title}
        </ListItem>

        {aboutMe.excerpt.map((paragraph: any) => (
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
