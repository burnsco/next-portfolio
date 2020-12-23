import { Box, Grid } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@components/common/index"
import PropTypes from "prop-types"
import DeveloperInfo from "./DeveloperInfo"
import MySkills from "./MySkills"

const SkillsContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id} aria-label={id} background="#FFFFFF">
    <SectionHeading title="Skills" />

    <Grid
      sx={{
        gap: 2,
        mb: [4, 5, 6],
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"
      }}
    >
      <Box>
        <DeveloperInfo />
      </Box>

      <Box>
        <MySkills />
      </Box>
    </Grid>
  </SectionContainer>
)

SkillsContainer.propTypes = {
  id: PropTypes.string.isRequired
}

export default SkillsContainer
