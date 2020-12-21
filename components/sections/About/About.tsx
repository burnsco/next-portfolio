import { Box, Grid } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@components/common/index"
import PropTypes from "prop-types"
import AboutMe from "./Me"
import RandomFacts from "./RandomFacts"

const About: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer background="#FFFFFF" id={id} aria-label={`${id} Section`}>
    <SectionHeading title={id} />
    <Grid
      sx={{
        gap: [3, 4],
        mb: [4, 5, 6],
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"
      }}
    >
      <Box>
        <AboutMe />
      </Box>

      <Box>
        <Grid
          sx={{
            height: "100%"
          }}
        >
          <RandomFacts />
        </Grid>
      </Box>
    </Grid>
  </SectionContainer>
)

About.propTypes = {
  id: PropTypes.string.isRequired
}

export default About
