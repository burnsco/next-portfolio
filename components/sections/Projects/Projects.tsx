import { Box, Flex, Grid } from "@chakra-ui/react"
import {
  Container,
  ProjectCard,
  SectionContainer,
  SectionHeading
} from "@common/index"
import data from "configs/projects"
import PropTypes from "prop-types"
import React from "react"
import ProjectInfo from "./ProjectInfo"
import QuickEatsVideo from "./QuickEatsVideo"
import RedditCloneVideo from "./RedditVideo"

const Projects: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id} background="linear-gradient(#F9F9F9,#F1F1F1)">
    <Container flexDir="column">
      <SectionHeading title="Projects" />
      <Grid gap={6}>
        {data.map(project => (
          <Box key={`MainProject-${project.title}`} p={[2, 3]}>
            <Flex flexDir="column">
              <ProjectCard>
                {project.video === "reddit" ? (
                  <RedditCloneVideo />
                ) : (
                  <QuickEatsVideo />
                )}

                <ProjectInfo
                  title={project.title}
                  builtWith={project.builtWith}
                  description={project.description}
                  webUrl={project.webUrl}
                  gitUrl={project.gitUrl}
                />
              </ProjectCard>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Container>
  </SectionContainer>
)
export default Projects

Projects.propTypes = {
  id: PropTypes.string.isRequired
}
