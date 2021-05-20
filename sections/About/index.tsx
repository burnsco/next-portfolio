import { SectionContainer } from "@common/index"
import PropTypes from "prop-types"
import About from "./About"

const AboutContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id} background={`linear-gradient(#e9ecef,gray.50)`}>
    <About />
  </SectionContainer>
)

AboutContainer.propTypes = {
  id: PropTypes.string.isRequired
}

export default AboutContainer
