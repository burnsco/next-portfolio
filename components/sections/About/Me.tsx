import { Flex, Heading } from "@chakra-ui/react"
import RenderIcon from "@components/common/icons/socials"
import aboutMeData from "@data/aboutMe"

export default function AboutMe() {
  return (
    <Flex sx={{ flexDirection: "column", flexWrap: "wrap" }}>
      <Heading
        data-sal="slide-right"
        data-sal-delay={aboutMeData.delay}
        data-sal-easing="ease"
        sx={{
          fontSize: [2, 3],
          mb: 2
        }}
      >
        <RenderIcon iconname={aboutMeData.iconName} />
        <Heading sx={{ ml: 2 }}>{aboutMeData.title}</Heading>
      </Heading>

      {aboutMeData.excerpt.map((paragraph, i) => (
        <Heading
          key={`p-${paragraph}-${i}`}
          sx={{
            fontSize: [0, 1]
          }}
        >
          {paragraph.text}
        </Heading>
      ))}
    </Flex>
  )
}
