import { Badge, List, ListIcon, ListItem } from "@chakra-ui/react"
import EmailIcon from "@common/icons/email-icon"
import data from "@configs/Skills/my-skills"

const MySkills = () => (
  <>
    {data.map(item => (
      <List key={`my-skills-${item.title}`}>
        <ListItem textStyle="list-heading">
          <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
          {item.title}
        </ListItem>
        <ListItem>
          {item.skills.map(skill => (
            <Badge
              m={1}
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
  </>
)

export default MySkills
