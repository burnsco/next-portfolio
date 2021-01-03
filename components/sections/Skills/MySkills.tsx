import { Badge, List, ListIcon, ListItem } from "@chakra-ui/react"
import EmailIcon from "@common/icons/socials/email-icon"

export default function MySkills({ mySkills }: any) {
  return (
    <>
      {mySkills.map((item: any) => (
        <List key={`my-skills-${item.title}`}>
          <ListItem textStyle="list-heading">
            <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
            {item.title}
          </ListItem>
          <ListItem>
            {item.skills.map((skill: any) => (
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
}
