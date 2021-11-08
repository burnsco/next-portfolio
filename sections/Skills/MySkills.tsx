import {
  Box,
  chakra,
  HStack,
  List,
  ListItem,
  ScaleFade,
  Tag,
  TagLabel
} from "@chakra-ui/react"
import { useInView } from "react-intersection-observer"

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
                  <HStack fontWeight="700" color="newBlack" px="1" maxW="150px">
                    <chakra.h3
                      fontSize="22px"
                      color="mainBlack"
                      opacity={0.8}
                      background="linear-gradient(120deg,  rgba(243,147, 55,1), rgb(250, 112, 154) 100%)"
                      backgroundRepeat="no-repeat"
                      backgroundSize="100% 0.2em"
                      backgroundPosition="0 89%"
                      letterSpacing="tighter"
                      fontWeight="800"
                      fontFamily="Nunito, sans-serif"
                      lineHeight="1.2"
                    >
                      {item.title}
                    </chakra.h3>
                  </HStack>
                </ListItem>
                <ListItem mb={4}>
                  {item.skills.map((skill: any) => (
                    <Tag
                      m={1}
                      size="sm"
                      colorScheme="blackAlpha"
                      variant="subtle"
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
