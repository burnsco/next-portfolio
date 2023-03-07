import { Box, ButtonGroup, Center, chakra, SimpleGrid, usePrefersReducedMotion, VStack } from "@chakra-ui/react"
import CustomButton from "@common/buttons/customButton"
import QuickEatsIconsList from "@common/icons/QuickEatsIconsList"
import { SectionContainer, SectionHeading } from "@common/index"
import { projects } from "@configs/projects"
import Image from "next/legacy/image"

const ChakraImage = chakra(Image)

interface Project {
  title: string;
  webUrl: string;
  gitUrl: string
  description: {
    text: string
  }[]
}

function SocialVideos() {
  const userPrefersReducedMotion = usePrefersReducedMotion()
  return (
    <video
      style={{
        height: "auto",
        width: "100%"
      }}
      controls
      autoPlay={!userPrefersReducedMotion}
      loop
      muted
    >
      <source src="/videos/socialwebm.webm" type="video/webm" />
      <source src="/videos/socialmp4.mp4" type="video/mp4" />
    </video>
  )
}

function QuickEatsVideos() {
  const userPrefersReducedMotion = usePrefersReducedMotion()
  return (
    <>
      <video
        style={{
          height: "auto",
          width: "100%"
        }}
        controls
        autoPlay={!userPrefersReducedMotion}
        loop
        muted
      >
        <source src="/videos/quikeatswebm.webm" type="video/webm" />
        <source src="/videos/quikeatsmp4.mp4" type="video/mp4" />
      </video>
      <Box border="2px solid red"  p="2">
      <Center>
        <chakra.h3 fontWeight="semibold" color="gray.800">QuickEats</chakra.h3>
      </Center>
      <Center mt="2">
        <QuickEatsIconsList />
      </Center>
      </Box>
    </>
  )
}


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

      <Box>
      {projects.map((project: any) => (
        <Box       key={`MainProject-${project.title}`}>
          <SimpleGrid
            px={{ base: "2em", md: "3em" }}

            spacing={{ base: 0, lg: 4, xl: 6 }}
            columns={{ base: 1, xl: 2 }}
          >
            <VStack>
              <Box>
                {project.video === "social" ? (
                  <SocialVideos />
                ) : (
                  <QuickEatsVideos />
                )}
              </Box>


            </VStack>

            <Box h="full" w="full" p={{ base: 4, lg: 2 }}>
      <VStack>
        <Box mx="auto" maxW="960px">
          {project.description.map((p:any )=> (
            <Box
              fontWeight="400"
              color="#606060"
              opacity="1"
              transform="matrix(1,0,0,1,0,0)"
              fontSize={{ base: "xs", md: "sm" }}
              key={`paragraph-${p.text}`}
              my="2"
            >
              {p.text}
            </Box>
          ))}
        </Box>


        <ButtonGroup>
          <CustomButton title="Source" href={project.gitUrl} />
          <CustomButton title="Demo" href={project.webUrl} />
        </ButtonGroup>

      </VStack>
    </Box>
          </SimpleGrid>

          <Box h={{ base: "6em", md: "8em", xl: "10em" }} w="full" bg="white" />
      </Box>
      ))}
    </Box>
    </VStack>
  </SectionContainer>
  )
}
