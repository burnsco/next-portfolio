import { Grid } from "@chakra-ui/react"
import { Container, SectionContainer, SectionHeading } from "@common/index"
import PropTypes from "prop-types"
import DeveloperInfo from "./DeveloperInfo"
import MySkills from "./MySkills"

const SkillsContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id} background="linear-gradient(white,#F9F9F9)">
    <Container as="article">
      <SectionHeading title="Skills" />
      <Grid
        gap={2}
        mb={[4, 5, 6]}
        gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))"
      >
        <DeveloperInfo />

        <MySkills />
      </Grid>
    </Container>
  </SectionContainer>
)

export default SkillsContainer

SkillsContainer.propTypes = {
  id: PropTypes.string.isRequired
}
