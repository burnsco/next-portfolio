import { chakra, VStack } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import Projects from "@sections/Projects/Projects"
import Image from "next/image"
import React from "react"

const ChakraImage = chakra(Image)

export default function ProjectsContainer(props: any) {
  return (
    <SectionContainer id={props.id}>
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

        <Projects />
      </VStack>
    </SectionContainer>
  )
}
