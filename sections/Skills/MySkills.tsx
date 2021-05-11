import { CheckIcon } from "@chakra-ui/icons"
import {
  Box,
  chakra,
  List,
  ListItem,
  Tag,
  TagLabel,
  TagRightIcon
} from "@chakra-ui/react"
import data from "@configs/Skills/my-skills"

export default function MySkills() {
  return (
    <Box>
      {data.map(item => (
        <List key={`my-skills-${item.title}`}>
          <ListItem mb={4} textTransform="uppercase" textStyle="list-heading">
            <chakra.span
              p={1}
              bgGradient="linear(to-r, rgba(243,147, 55,1),rgb(250, 112, 154))"
              transform={`skew(20deg)`}
              fontWeight="700"
              color="white"
              textTransform="uppercase"
              fontStyle="oblique"
            >
              {item.title}
            </chakra.span>
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
