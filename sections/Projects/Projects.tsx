import { Box, SimpleGrid, VStack } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import ProjectInfo from "./ProjectInfo"

// const RedditCloneIconsList = dynamic(
//   () => import("@common/icons/RedditCloneIconsList")
// )
// const QuickEatsIconsList = dynamic(
//   () => import("@common/icons/QuickEatsIconsList")
// )

const QuickEatsVideos = dynamic(() => import("./QuickEatsVideo"))
const SocialMediaVideos = dynamic(() => import("./RedditVideo"))

export default function Projects({ projects }: ProjectsType) {
  return (
    <>
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
                  <SocialMediaVideos />
                ) : (
                  <QuickEatsVideos />
                )}
              </Box>

              {/* <Center h="full">
                <Stack spacing={3}>
                  <HStack>
                    <Badge
                      opacity={0.5}
                      variant="outline"
                      colorScheme="blackAlpha"
                    >
                      <Heading
                        colorScheme="red"
                        fontWeight="400"
                        color="black"
                        transform="matrix(1,0,0,1,0,0)"
                        fontSize={{ base: "xs", md: "sm" }}
                      >
                        Title :{" "}
                      </Heading>
                    </Badge>
                    <Heading
                      lineHeight="2"
                      opacity={0.9}
                      fontWeight="900"
                      letterSpacing="wide"
                      color="#414a6b !important;"
                      mb={[2, 3]}
                      fontSize={["xl", "2xl", "3xl"]}
                    >
                      {project.title}
                    </Heading>
                  </HStack>
                  <HStack>
                    <Badge
                      opacity={0.5}
                      variant="outline"
                      colorScheme="blackAlpha"
                    >
                      <Heading
                        fontWeight="400"
                        color="black"
                        opacity="1"
                        transform="matrix(1,0,0,1,0,0)"
                        fontSize={{ base: "xs", md: "sm" }}
                      >
                        Tech :{" "}
                      </Heading>
                    </Badge>
                    {title === "Reddit Clone" ? (
                      <RedditCloneIconsList />
                    ) : (
                      <QuickEatsIconsList />
                    )}
                  </HStack>
                </Stack>
              </Center> */}
            </VStack>

            <ProjectInfo
              title={project.title}
              description={project.description}
              webUrl={project.webUrl}
              gitUrl={project.gitUrl}
            />
          </SimpleGrid>

          <Box h={{ base: "6em", md: "8em", xl: "10em" }} w="full" bg="white" />
      </Box>
      ))}
    </>
  )
}
