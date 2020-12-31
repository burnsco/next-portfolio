import { Grid } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import PropTypes from "prop-types"
import AboutMe from "./Me"
import RandomFacts from "./RandomFacts"

const AboutContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer background="linear-gradient(#E9E9E9, white)" id={id}>
    <SectionHeading title={id} subHeading="some personal info." />
    <Grid
      gap={[3, 4]}
      mb={[4, 5, 6]}
      gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))"
    >
      <AboutMe />
      <RandomFacts />
    </Grid>
  </SectionContainer>
)

AboutContainer.propTypes = {
  id: PropTypes.string.isRequired
}

export default AboutContainer
