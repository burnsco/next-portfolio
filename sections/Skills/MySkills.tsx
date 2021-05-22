import {
  Box,
  chakra,
  HStack,
  Icon,
  List,
  ListItem,
  Tag,
  TagLabel
} from "@chakra-ui/react"
import CustomGraphQLIcon from "@common/icons/graphql-icon"
import CustomLinuxIcon from "@common/icons/linux-icon"
import CustomReactIcon from "@common/icons/react-icon"
import data from "@configs/Skills/my-skills"

const OldSkillsHeading = (props: any) => (
  <chakra.span
    opacity={0.8}
    fontSize="md"
    color="gray.50"
    fontStyle="oblique"
    letterSpacing="wider"
    fontWeight="800"
    textTransform="uppercase"
  >
    {props.title}
  </chakra.span>
)

export default function MySkills() {
  return (
    <Box>
      {data.map(item => (
        <List key={`my-skills-${item.title}`}>
          <ListItem mb="2.5">
            <HStack
              color="white"
              bg="p1"
              borderRadius="3xl"
              border="1px dotted"
              px="2"
              opacity={0.8}
              maxW="120px"
            >
              {item.title === "frontend" ? (
                <Icon as={CustomReactIcon} boxSize="5" />
              ) : null}
              {item.title === "backend" ? (
                <Icon as={CustomGraphQLIcon} boxSize="5" />
              ) : null}

              {item.title === "dev-ops" ? (
                <Icon as={CustomLinuxIcon} boxSize="5" />
              ) : null}

              <OldSkillsHeading {...item} />
            </HStack>
          </ListItem>
          <ListItem mb={4}>
            {item.skills.map(skill => (
              <Tag
                m={1}
                size="sm"
                colorScheme="blackAlpha"
                variant="outline"
                key={`MySkills-badge-${skill.title}`}
              >
                <TagLabel>{skill.title}</TagLabel>
              </Tag>
            ))}
          </ListItem>
        </List>
      ))}
    </Box>
  )
}
