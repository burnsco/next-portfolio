import { chakra, VStack } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import dynamic from "next/dynamic"
import Image from "next/legacy/image"

const ChakraImage = chakra(Image)
const Projects = dynamic(() => import("@sections/Projects/Projects"))

export default function ProjectsContainer() {
  return (
    <SectionContainer id="projects">
      <VStack id="projects Container">
        <chakra.div pos="relative" overflow="hidden" w="full">
          <SectionHeading title="Projects" />
          <ChakraImage
            src="/bg/spiralarch.webp"
            layout="fill"
            opacity={0.2}
            objectFit="cover"
            quality="80"
          />
        </chakra.div>

        <Projects  />
      </VStack>
    </SectionContainer>
  )
}
