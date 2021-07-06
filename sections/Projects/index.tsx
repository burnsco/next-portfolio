import { chakra, VStack } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import dynamic from "next/dynamic"
import Image from "next/image"
import React from "react"
const ChakraImage = chakra(Image)
const Projects = dynamic(() => import("@sections/Projects/Projects"))

export default function ProjectsContainer({ projects }: any) {
  return (
    <SectionContainer id="projects">
      <VStack id="projects Container">
        <chakra.div pos="relative" overflow="hidden" p="3em" w="full">
          <SectionHeading title="Projects" />
          <ChakraImage
            src="/bg/5.jpg"
            layout="fill"
            opacity={0.2}
            objectFit="cover"
            quality="100"
          />
        </chakra.div>

        <Projects projects={projects} />
      </VStack>
    </SectionContainer>
  )
}
