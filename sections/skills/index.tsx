import { Box, Center, chakra, SimpleGrid, VStack } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import DeveloperInfo from "@sections/skills/DeveloperInfo"
import MySkills from "@sections/skills/MySkills"
import Image from "next/legacy/image"

const ChakraImage = chakra(Image)

export default function SkillsContainer() {

  return (
    <SectionContainer id="skills">
      <VStack>
        <Box pos="relative" overflow="hidden" w="full">
          <Center>
            <SectionHeading title="Skills" />
          </Center>
          <ChakraImage
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
