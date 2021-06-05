import { Box, chakra, VStack } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import Image from "next/image"
import PropTypes from "prop-types"
import About from "./About"

const ChakraImage = chakra(Image)

export default function AboutContainer(props: { id: string }) {
  return (
    <SectionContainer id={props.id}>
      <VStack>
        <Box pos="relative" overflow="hidden" p="3em" w="full">
          <SectionHeading title="About" color="black" />
          <ChakraImage
            src="/bg/11.jpg"
            layout="fill"
            opacity={0.4}
            objectFit="cover"
            quality="100"
          />
        </Box>

        <About />
      </VStack>
    </SectionContainer>
  )
}

AboutContainer.propTypes = {
  id: PropTypes.string.isRequired
}
