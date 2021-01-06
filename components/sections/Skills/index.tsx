import { Layout } from "@ui/index"
import PropTypes from "prop-types"
import React from "react"
import DeveloperInfo from "./DeveloperInfo"
import MySkills from "./MySkills"

const SkillsContainer: React.FC<{ id: string }> = ({ id }) => (
  <Layout id={id}>
    <DeveloperInfo />
    <MySkills />
  </Layout>
)

export default SkillsContainer

SkillsContainer.propTypes = {
  id: PropTypes.string.isRequired
}
