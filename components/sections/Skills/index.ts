/** @jsx jsx */
import { jsx, Box, Grid } from 'theme-ui'
import PropTypes from 'prop-types'
import SectionContainer from '../Container/SectionContainer'

import DeveloperInfo from './DeveloperInfo'
import MySkills from './MySkills'
import SectionHeading from '../Container/SectionHeading'

const Skills = ({ title }) => (
  <SectionContainer id={title} aria-label={title}>
    <Box sx={{ variant: 'layout.about' }}>
      <SectionHeading title="Skills" />

      <Grid
        sx={{
          gap: 2,
          mb: [4, 5, 6],
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        }}
      >
        <Box>
          <DeveloperInfo />
        </Box>

        <Box>
          <MySkills />
        </Box>
      </Grid>
    </Box>
  </SectionContainer>
)

Skills.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Skills
