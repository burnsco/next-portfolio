import { Box, Grid } from "@chakra-ui/react"
import { Container, ProjectCard } from "@common/index"
import data from "@configs/Projects/projects"
import dynamic from "next/dynamic"
import ProjectInfo from "./ProjectInfo"

const QuickEatsVideos = dynamic(() => import("./QuickEatsVideo"))
const RedditCloneVideos = dynamic(() => import("./RedditVideo"))

const Projects = () => (
  <Container flexDir="column">
    <Grid gap={6}>
      {data.map((project: any) => (
        <Box key={`MainProject-${project.title}`} p={[2, 3]} my="4rem">
          <ProjectCard flexDir="row">
            {project.video === "reddit" ? (
              <RedditCloneVideos />
            ) : (
              <QuickEatsVideos />
            )}

            <ProjectInfo
              title={project.title}
              description={project.description}
              webUrl={project.webUrl}
              gitUrl={project.gitUrl}
            />
          </ProjectCard>
        </Box>
      ))}
    </Grid>
  </Container>
)
export default Projects
