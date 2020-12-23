import { Box, Flex, Grid } from "@chakra-ui/react"
import {
  CustomContainer,
  SectionContainer,
  SectionHeading
} from "@components/common/index"
import data from "@data/projects"
import PropTypes from "prop-types"
import React from "react"
import ProjectInfo from "./ProjectInfo"
import QuickEatsVideo from "./QuickEatsVideo"
import RedditCloneVideo from "./RedditVideo"

const Projects: React.FC<{ id: string }> = ({ id }) => {
  return (
    <SectionContainer id={id} aria-label={id} background="#F8F9FA">
      <CustomContainer>
        <SectionHeading title="Projects" />
        <Grid gap={6}>
          {data.map(project => (
            <Box key={`MainProject-${project.title}`} m={[1, 2]} p={[2, 3]}>
              <Flex
                sx={{
                  flexDirection: "column"
                }}
              >
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
              </Flex>
            </Box>
          ))}
        </Grid>
      </CustomContainer>
    </SectionContainer>
  )
}

Projects.propTypes = {
  id: PropTypes.string.isRequired
}

export default Projects
