import { SectionContainer } from "@common/index"
import PropTypes from "prop-types"
import React from "react"
import DeveloperInfo from "./DeveloperInfo"
import MySkills from "./MySkills"

const SkillsContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id}>
    <DeveloperInfo />
    <MySkills />
  </SectionContainer>
)

export default SkillsContainer

SkillsContainer.propTypes = {
  id: PropTypes.string.isRequired
}
