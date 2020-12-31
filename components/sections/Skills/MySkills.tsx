import { Badge, List, ListIcon, ListItem } from "@chakra-ui/react"
import EmailIcon from "@common/icons/socials/email-icon"
import { Container } from "@common/index"
import data from "configs/my-skills"

export default function MySkills() {
  return (
    <Container as="article">
      {data.map(item => (
        <List key={`my-skills-${item.title}`}>
          <ListItem textStyle="list-heading">
            <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
            {item.title}
          </ListItem>
          <ListItem>
            {item.skills.map(skill => (
              <Badge
                variant="solid"
                colorScheme="green"
                key={`MySkills-badge-${skill.title}`}
              >
                {skill.title}
              </Badge>
            ))}
          </ListItem>
        </List>
      ))}
    </Container>
  )
}
