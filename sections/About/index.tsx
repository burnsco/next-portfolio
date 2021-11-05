import { Box, Center, chakra, Heading, VStack } from "@chakra-ui/react"
import { SectionContainer } from "@common/index"
import Image from "next/image"
import About from "./About"

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
            priority
          />
        </Box>

        <About aboutMe={aboutMe} randomFacts={randomFacts} />
      </VStack>
    </SectionContainer>
  )
}
