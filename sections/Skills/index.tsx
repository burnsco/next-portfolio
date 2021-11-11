import { Box, Center, chakra, SimpleGrid, VStack } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import DeveloperInfo from "@sections/Skills/DeveloperInfo"
import MySkills from "@sections/Skills/MySkills"
import Image from "next/image"

const ChakraImage = chakra(Image)

export default function SkillsContainer({
  developerInfo,
  mySkills
}: SkillsType) {
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
            objectFit="cover"
            priority
          />
        </Box>

        <SimpleGrid
          p={{ base: "2em", md: "3em" }}
          columns={{ base: 1, lg: 2 }}
          spacing={4}
          border="1px solid purple"
        >
          <DeveloperInfo developerInfo={developerInfo} />
          <MySkills mySkills={mySkills} />
        </SimpleGrid>
      </VStack>
    </SectionContainer>
  )
}
