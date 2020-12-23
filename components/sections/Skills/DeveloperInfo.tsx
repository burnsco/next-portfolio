import { Flex, Heading, Text } from "@chakra-ui/react"
import RenderIcon from "@components/common/icons/socials"
import { CustomContainer } from "@components/common/index"
import data from "@data/more-about-me"
import React from "react"

export default function DeveloperInfo() {
  return (
    <CustomContainer>
      <Flex sx={{ flexDirection: "column", flexWrap: "wrap" }}>
        <Heading
          data-sal="slide-left"
          data-sal-delay={data.delay}
          data-sal-easing="ease"
          sx={{
            fontSize: [2, 3],
            mb: 2
          }}
        >
          <RenderIcon iconname={data.iconName} />
          <Text ml={2}>{data.title}</Text>
        </Heading>

        {data.excerpt.map((paragraph, i) => (
          <Text
            key={`DeveloperInfo-Paragraph-${i}`}
            sx={{
              fontSize: [0, 1]
            }}
          >
            {paragraph.text}
          </Text>
        ))}
      </Flex>
    </CustomContainer>
  )
}
