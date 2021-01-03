import { SectionContainer, SectionHeading } from "@common/index"
import PropTypes from "prop-types"
import About from "./About"

const AboutContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer background="linear-gradient(#E9E9E9, white)" id={id}>
    <SectionHeading title={id} subHeading="some personal info." />
    <About />
  </SectionContainer>
)

AboutContainer.propTypes = {
  id: PropTypes.string.isRequired
}

export default AboutContainer
