import {
  Box,
  chakra,
  HStack,
  Icon,
  List,
  ListItem,
  ScaleFade,
  Tag,
  TagLabel
} from "@chakra-ui/react"
import CustomGraphQLIcon from "@common/icons/graphql-icon"
import CustomLinuxIcon from "@common/icons/linux-icon"
import CustomReactIcon from "@common/icons/react-icon"
import { useInView } from "react-intersection-observer"

const OldSkillsHeading = (props: any) => (
  <chakra.span
    opacity={0.9}
    color="gray.50"
    p="0.5"
    letterSpacing="wider"
    fontWeight="800"
    textTransform="uppercase"
  >
    {props.title}
  </chakra.span>
)

export default function MySkills({ mySkills }: any) {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    trackVisibility: true,
    delay: 350
  })

  return (
    <div ref={ref}>
      {inView ? (
        <Box>
          {mySkills.map((item: any) => (
            <ScaleFade
              initialScale={0.4}
              in={inView}
              key={`my-skills-${item.title}`}
            >
              <List>
                <ListItem mb="2.5">
                  <HStack
                    color="white"
                    bg="p1"
                    borderRadius="3xl"
                    border="0.5px dotted"
                    px="2"
                    opacity={0.7}
                    maxW="150px"
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
                  {item.skills.map((skill: any) => (
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
            </ScaleFade>
          ))}
        </Box>
      ) : null}
    </div>
  )
}
