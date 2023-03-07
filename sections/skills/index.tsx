import { Box, Center, chakra, Fade, HStack, List, ListItem, ScaleFade, SimpleGrid, Tag, TagLabel, VStack } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import { developerInfo, mySkills } from "@configs/skills"
import { ChakraImage } from "@lib/chakraImage"
import { nunito } from "fonts"
import { useInView } from "react-intersection-observer"


function MySkills() {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    trackVisibility: true,
    delay: 350
  })
  return (
    <div ref={ref}>
      {inView ? (
        <Box  p="2">
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
                      className={nunito.className}
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
                      <TagLabel color="blackAlpha.700">{skill.title}</TagLabel>
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

 function DeveloperInfo() {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    trackVisibility: true,
    delay: 350
  })
  return (
    <div ref={ref}>
      {inView ? (
        <Fade in={inView}>
          <List p="4" border="2px solid red">
            {developerInfo.excerpt.map((p: any) => (
              <ListItem
                fontWeight="400"
                color="#606060"
                opacity="1"
                transform="matrix(1,0,0,1,0,0)"
                fontSize={{ base: "xs", md: "sm" }}
                key={`devInfo-${p.text}`}
              >
                {p.text}
              </ListItem>
            ))}
          </List>
        </Fade>
      ) : null}
    </div>
  )
}

export default function SkillsContainer() {
  return (
    <SectionContainer id="skills">
      <VStack>
        <Box pos="relative" overflow="hidden" w="full">
          <Center>
            <SectionHeading title="Skills" />
          </Center>
          <ChakraImage
            alt=""
            src="/bg/laptop.webp"
            layout="fill"
            opacity={0.1}
            quality={80}
            objectFit="cover"
            priority
          />
        </Box>
        <SimpleGrid
          p={{ base: "2em", md: "3em" }}
          columns={{ base: 1, lg: 2 }}
          spacing={4}
        >
          <DeveloperInfo />
          <MySkills  />
        </SimpleGrid>
      </VStack>
    </SectionContainer>
  )
}
