import { EmailIcon } from "@chakra-ui/icons"
import {
  Box,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  VStack
} from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import { aboutMe, randomFacts } from "@configs/about"
import Image from "next/image"
import aboutBGImage from "../../public/bg/leaves.webp"

export default function AboutContainer() {
  return (
    <SectionContainer id="about">
      <VStack px={{ base: "2em", md: "3em" }}>
        <Box pos="relative" overflow="hidden" w="full">
          <SectionHeading title="about" />
          <Image
            alt=""
            src={aboutBGImage}
            quality={80}
            fill
            sizes="100vw"
            style={{
              opacity: 0.2,
              objectFit: "cover"
            }}
          />
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={7} p={["1em", "2em"]}>
          <List>
            <ListItem textStyle="list-heading">
              <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
              {randomFacts.title}
            </ListItem>
            <>
              {randomFacts.facts.map((fact: any) => (
                <ListItem
                  fontWeight="400"
                  color="#606060"
                  opacity="1"
                  transform="matrix(1,0,0,1,0,0)"
                  fontSize={{ base: "xs", md: "sm" }}
                  key={`random-fact-${fact.title}`}
                >
                  {fact.title}
                </ListItem>
              ))}
            </>
          </List>
          <List>
            <ListItem textStyle="list-heading">
              <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
              {aboutMe.title}
            </ListItem>
            <>
              {aboutMe.excerpt.map((paragraph: any) => (
                <ListItem
                  fontWeight="400"
                  color="#606060"
                  opacity="1"
                  transform="matrix(1,0,0,1,0,0)"
                  fontSize={{ base: "xs", md: "sm" }}
                  key={`p-${paragraph.text}`}
                >
                  {paragraph.text}
                </ListItem>
              ))}
            </>
          </List>
        </SimpleGrid>
      </VStack>
    </SectionContainer>
  )
}
