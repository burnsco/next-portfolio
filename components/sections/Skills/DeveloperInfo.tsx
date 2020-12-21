import { graphql, useStaticQuery } from 'gatsby'
/** @jsx jsx */
import { jsx, Heading, Text, Flex } from 'theme-ui'
import CustomContainer from '../../components/Containers/CustomContainer'
import RenderIcon from '../../components/SocialIcons/RenderIcon'

export default function DeveloperInfo() {
  const { data } = useStaticQuery(graphql`
    {
      data: allDeveloperInfoJson {
        nodes {
          delay
          iconName
          title
          excerpt {
            text
          }
        }
      }
    }
  `)

  return (
    <CustomContainer>
      <Flex sx={{ flexDirection: 'column', flexWrap: 'wrap' }}>
        <Heading
          data-sal="slide-left"
          data-sal-delay={data.nodes[0].delay}
          data-sal-easing="ease"
          sx={{
            fontSize: [2, 3],
            mb: 2,
          }}
        >
          <RenderIcon iconname={data.nodes[0].iconName} />
          <span sx={{ ml: 2 }}>{data.nodes[0].title}</span>
        </Heading>

        {data.nodes[0].excerpt.map((paragraph, i) => (
          <Text
            key={`DeveloperInfo-Paragraph-${i}`}
            sx={{
              fontSize: [0, 1],
            }}
          >
            {paragraph.text}
          </Text>
        ))}
      </Flex>
    </CustomContainer>
  )
}
