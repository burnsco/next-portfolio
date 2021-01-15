import { SectionContainer } from "@common/index"
import PropTypes from "prop-types"
import About from "./About"

const AboutContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id}>
    <About />
  </SectionContainer>
)

AboutContainer.propTypes = {
  id: PropTypes.string.isRequired
}

export default AboutContainer
