import { Box, chakra, VStack } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import Image from "next/image"
import About from "./About"

const ChakraImage = chakra(Image)

export default function AboutContainer({ aboutMe, randomFacts }: AboutType) {
  return (
    <SectionContainer id="about">
      <VStack>
        <Box pos="relative" overflow="hidden" p="3em" w="full">
          <SectionHeading title="About" color="black" />
          <ChakraImage
            src="/bg/11.jpg"
            layout="fill"
            opacity={0.4}
            objectFit="cover"
            quality="100"
          />
        </Box>

        <About aboutMe={aboutMe} randomFacts={randomFacts} />
      </VStack>
    </SectionContainer>
  )
}
