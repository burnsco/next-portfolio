import { SimpleGrid } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import PageContainer from "@ui/Layout/PageContainer"
import PropTypes from "prop-types"
import React from "react"
import DeveloperInfo from "./DeveloperInfo"
import MySkills from "./MySkills"

const SkillsContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id}>
    <PageContainer bg="white">
      <SectionHeading title={id} />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} py="6">
        <DeveloperInfo />
        <MySkills />
      </SimpleGrid>
    </PageContainer>
  </SectionContainer>
)

export default SkillsContainer

SkillsContainer.propTypes = {
  id: PropTypes.string.isRequired
}
