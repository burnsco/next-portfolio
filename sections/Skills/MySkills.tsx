import { Badge, Box, List, ListIcon, ListItem } from "@chakra-ui/react"
import EmailIcon from "@common/icons/email-icon"
import data from "@configs/Skills/my-skills"

const MySkills = () => (
  <Box border="2px solid orange" p={2}>
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
  </Box>
)

export default MySkills
