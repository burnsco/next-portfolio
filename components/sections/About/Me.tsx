import { Flex, Heading, Text } from "@chakra-ui/react"
import { Container } from "@common/index"
import RenderIcon from "@common/render-icon/RenderIcon"
import data from "configs/about-me"

export default function AboutMe() {
  return (
    <Container>
      <Flex flexDir="column" flexWrap="wrap">
        <Heading mb="2" fontSize="sm">
          <RenderIcon height="1.5em" width="1.5em" iconname={data.iconName} />
          {data.title}
        </Heading>

        {data.excerpt.map(paragraph => (
          <Text key={`p-${paragraph}`}>{paragraph.text}</Text>
        ))}
      </Flex>
    </Container>
  )
}
