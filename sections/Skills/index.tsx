import { Box, chakra, SimpleGrid, VStack } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import Image from "next/image"
import PropTypes from "prop-types"
import DeveloperInfo from "./DeveloperInfo"
import MySkills from "./MySkills"

const ChakraImage = chakra(Image)

export default function SkillsContainer(props: { id: string }) {
  return (
    <SectionContainer id={props.id}>
      <VStack>
        <Box pos="relative" overflow="hidden" p="3em" w="full">
          <SectionHeading title="Skills" />
          <ChakraImage
            src="/bg/15.jpg"
            layout="fill"
            opacity={0.6}
            objectFit="cover"
            quality="100"
          />
        </Box>

        <SimpleGrid px="5em" pt="3em" columns={{ base: 1, md: 2 }} spacing={8}>
          <DeveloperInfo />
          <MySkills />
        </SimpleGrid>
      </VStack>
    </SectionContainer>
  )
}

SkillsContainer.propTypes = {
  id: PropTypes.string.isRequired
}
