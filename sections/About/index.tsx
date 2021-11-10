import { EmailIcon } from "@chakra-ui/icons"
import {
  Box,
  Center,
  chakra,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  VStack
} from "@chakra-ui/react"
import { SectionContainer } from "@common/index"
import Image from "next/image"

const ChakraImage = chakra(Image)

export default function AboutContainer({ aboutMe, randomFacts }: AboutType) {
  return (
    <SectionContainer id="about">
      <VStack>
        <Box pos="relative" overflow="hidden" p="3em" w="full">
          <Center>
            <Heading>About.</Heading>
          </Center>
          <ChakraImage
            src="/bg/keyboardheadphones.webp"
            layout="fill"
            opacity={0.9}
            objectFit="cover"
          />
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} p="4">
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
