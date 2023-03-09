import {
  Box,
  ButtonGroup,
  Center,
  chakra,
  SimpleGrid,
  usePrefersReducedMotion,
  VStack
} from "@chakra-ui/react"
import CustomButton from "@common/buttons/customButton"
import QuickEatsIconsList from "@common/icons/QuickEatsIconsList"
import { SectionContainer, SectionHeading } from "@common/index"
import { projects } from "@configs/projects"
import Image from "next/image"
import projectsBgImage from "../../public/bg/spiralarch.webp"

interface Project {
  title: string
  webUrl: string
  gitUrl: string
  description: {
    text: string
  }[]
  videos: string
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
      <Box p="2">
        <Center>
          <chakra.h3 fontWeight="semibold" color="gray.800">
            QuickEats
          </chakra.h3>
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
          <Image
            alt=""
            src={projectsBgImage}
            placeholder="blur"
            quality={80}
            fill
            sizes="100vw"
            style={{
              opacity: 0.2,
              objectFit: "cover"
            }}
          />
        </chakra.div>

        <Box>
          {projects.map((project: Project) => (
            <Box key={`MainProject-${project.title}`}>
              <SimpleGrid
                px={{ base: "2em", md: "3em" }}
                spacing={{ base: 0, lg: 4, xl: 6 }}
                columns={{ base: 1, xl: 2 }}
              >
                <VStack>
                  <Box>
                    {project.videos === "social" ? (
                      <SocialVideos />
                    ) : (
                      <QuickEatsVideos />
                    )}
                  </Box>
                </VStack>

                <Box h="full" w="full" p={{ base: 4, lg: 2 }}>
                  <VStack>
                    <Box mx="auto" maxW="960px">
                      {project.description.map((p: any) => (
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
                      <CustomButton
                        title="Source"
                        href={project.gitUrl}
                        source
                      />
                      <CustomButton title="Demo" href={project.webUrl} />
                    </ButtonGroup>
                  </VStack>
                </Box>
              </SimpleGrid>

              <Box
                h={{ base: "6em", md: "8em", xl: "10em" }}
                w="full"
                bg="white"
              />
            </Box>
          ))}
        </Box>
      </VStack>
    </SectionContainer>
  )
}
