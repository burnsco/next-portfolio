/** @jsx jsx */
import { jsx, Box, Flex, Card, Grid } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import SectionContainer from '../Container/SectionContainer'
import ProjectInfo from './ProjectInfo'
import CustomContainer from '../../components/Containers/CustomContainer'
import SectionHeading from '../Container/SectionHeading'
import RedditCloneVideo from './RedditVideo'
import QuickEatsVideo from './QuickEatsVideo'

export default function Projects({ title }) {
  const { data } = useStaticQuery(graphql`
    {
      data: allProjectsJson {
        nodes {
          builtWith {
            iconName
            title
          }
          description {
            text
          }
          gitUrl
          title
          video
          webUrl
        }
      }
    }
  `)

  return (
    <SectionContainer id={title} aria-label={title}>
      <Box variant="layout.projects">
        <CustomContainer>
          <SectionHeading title="Projects" />
          <Grid gap={6}>
            {data.nodes.map(project => (
              <Card key={`MainProject-${project.title}`} m={[1, 2]} p={[2, 3]}>
                <Flex
                  sx={{
                    flexDirection: 'column',
                  }}
                >
                  {project.video === 'reddit' ? (
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
              </Card>
            ))}
          </Grid>
        </CustomContainer>
      </Box>
    </SectionContainer>
  )
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
}
