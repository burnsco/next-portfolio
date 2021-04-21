import { Badge, Box, List, ListIcon, ListItem } from "@chakra-ui/react"
import CustomGraphQLIcon from "@common/icons/graphql-icon"
import CustomReactIcon from "@common/icons/react-icon"
import data from "@configs/Skills/my-skills"
import CustomLinuxIcon from "../../components/common/icons/linux-icon"

const MySkills = () => (
  <Box>
    {data.map(item => (
      <List key={`my-skills-${item.title}`}>
        <ListItem textStyle="list-heading">
          {item.iconName === "react" && (
            <ListIcon as={CustomReactIcon} boxSize={6} color="red.500" />
          )}
          {item.iconName === "graphql" && (
            <ListIcon as={CustomGraphQLIcon} boxSize={5} color="red.500" />
          )}
          {item.iconName === "linux" && (
            <ListIcon as={CustomLinuxIcon} boxSize={5} color="red.500" />
          )}

          {item.title}
        </ListItem>
        <ListItem>
          {item.skills.map(skill => (
            <Badge
              m={1}
              fontSize="10px"
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
