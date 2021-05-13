import { CheckIcon } from "@chakra-ui/icons"
import {
  Box,
  chakra,
  Icon,
  IconProps,
  List,
  ListItem,
  Tag,
  TagLabel,
  TagRightIcon
} from "@chakra-ui/react"
import data from "@configs/Skills/my-skills"

const CircleIcon = (props: IconProps) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
)

export default function MySkills() {
  return (
    <Box>
      {data.map(item => (
        <List key={`my-skills-${item.title}`}>
          <ListItem mb={3} textStyle="list-heading">
            <chakra.span fontWeight="700" color="f3" textTransform="uppercase">
              {item.title}
            </chakra.span>
            <CircleIcon boxSize={2} color="red.200" />
          </ListItem>
          <ListItem mb={4}>
            {item.skills.map(skill => (
              <Tag
                m={1}
                size="sm"
                colorScheme="blackAlpha"
                variant="solid"
                key={`MySkills-badge-${skill.title}`}
              >
                <TagLabel>{skill.title}</TagLabel>
                <TagRightIcon boxSize="12px" as={CheckIcon} />
              </Tag>
            ))}
          </ListItem>
        </List>
      ))}
    </Box>
  )
}
