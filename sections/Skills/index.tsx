import { SimpleGrid } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import PageContainer from "@ui/Layout/PageContainer"
import PropTypes from "prop-types"
import React from "react"
import DeveloperInfo from "./DeveloperInfo"
import MySkills from "./MySkills"

export default function SkillsContainer(props: any) {
  return (
    <SectionContainer mt="8" id={props.id}>
      <PageContainer bg="gray.50">
        <SectionHeading title={props.id} />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} py="6">
          <DeveloperInfo />
          <MySkills />
        </SimpleGrid>
      </PageContainer>
    </SectionContainer>
  )
}

SkillsContainer.propTypes = {
  id: PropTypes.string.isRequired
}
