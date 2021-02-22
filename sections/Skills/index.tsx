import { Flex, Wrap, WrapItem } from "@chakra-ui/react"
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
      <Wrap spacing="10px">
        <Flex flexDirection={["column", "row"]}>
          <WrapItem>
            <DeveloperInfo />
          </WrapItem>
          <WrapItem>
            <MySkills />
          </WrapItem>
        </Flex>
      </Wrap>
    </PageContainer>
  </SectionContainer>
)

export default SkillsContainer

SkillsContainer.propTypes = {
  id: PropTypes.string.isRequired
}
