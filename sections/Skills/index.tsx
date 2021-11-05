import { Box, Center, chakra, SimpleGrid, VStack } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import DeveloperInfo from "@sections/Skills/DeveloperInfo"
import MySkills from "@sections/Skills/MySkills"
import Image from "next/image"
import React from "react"

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
          px="5em"
          pt="1.5em"
          columns={{ base: 1, md: 2 }}
          spacing={8}
        >
          <DeveloperInfo developerInfo={developerInfo} />
          <MySkills mySkills={mySkills} />
        </SimpleGrid>
      </VStack>
    </SectionContainer>
  )
}
