import { Flex } from "@chakra-ui/react"
import { Container, ProjectCard } from "@common/index"
import data from "@configs/Projects/projects"
import dynamic from "next/dynamic"
import ProjectInfo from "./ProjectInfo"

const QuickEatsVideos = dynamic(() => import("./QuickEatsVideo"))
const RedditCloneVideos = dynamic(() => import("./RedditVideo"))

export default function Projects() {
  return (
    <Container id="actual projects container">
      {data.map((project: any) => (
        <Flex key={`MainProject-${project.title}`} p={[2, 3]} my="4rem">
          <ProjectCard>
            <Flex>
              {project.video === "reddit" ? (
                <Flex w="50%">
                  <RedditCloneVideos />
                </Flex>
              ) : (
                <Flex w="50%">
                  <QuickEatsVideos />
                </Flex>
              )}
              <Flex w="50%">
                <ProjectInfo
                  title={project.title}
                  description={project.description}
                  webUrl={project.webUrl}
                  gitUrl={project.gitUrl}
                />
              </Flex>
            </Flex>
          </ProjectCard>
        </Flex>
      ))}
    </Container>
  )
}
