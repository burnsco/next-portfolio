import { SectionContainer, SectionHeading } from "@common/index"
import PropTypes from "prop-types"
import Skills from "./Skills"

const SkillsContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id} background="linear-gradient(white,#F9F9F9)">
    <SectionHeading title="Skills" />
    <Skills />
  </SectionContainer>
)

export default SkillsContainer

SkillsContainer.propTypes = {
  id: PropTypes.string.isRequired
}
