import { SimpleGrid } from "@chakra-ui/react"
import { SectionContainer } from "@common/index"
import PropTypes from "prop-types"
import React from "react"
import DeveloperInfo from "./DeveloperInfo"
import MySkills from "./MySkills"

export default function SkillsContainer(props: any) {
  return (
    <SectionContainer id={props.id}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} p="6">
        <DeveloperInfo />
        <MySkills />
      </SimpleGrid>
    </SectionContainer>
  )
}

SkillsContainer.propTypes = {
  id: PropTypes.string.isRequired
}
