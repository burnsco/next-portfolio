/** @jsx jsx */
import { jsx, Heading, Badge, Grid } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import CustomContainer from '../../components/Containers/CustomContainer'
import RenderIcon from '../../components/SocialIcons/RenderIcon'

export default function MySkills() {
  const { data } = useStaticQuery(graphql`
    {
      data: allMySkillsJson {
        nodes {
          delay
          iconName
          title
          skills {
            title
          }
        }
      }
    }
  `)

  return (
    <Grid
      sx={{
        height: '100%',
      }}
    >
      {data.nodes.map((item, i) => (
        <CustomContainer key={`my-skills-${item.title}-${i}`}>
          <ul sx={{ m: 0, p: 0, listStyleType: 'none' }}>
            <li
              data-sal="slide-up"
              data-sal-delay={item.delay}
              data-sal-easing="ease"
            >
              <Heading
                sx={{
                  fontSize: [2, 3],
                  mb: 1,
                }}
              >
                <RenderIcon iconname={item.iconName} />
                <span sx={{ ml: 2 }}>{item.title}</span>
              </Heading>

              {item.skills.map((skill, d) => (
                <Badge
                  key={`MySkills-${skill.title}-${d}`}
                  variant="outline"
                  sx={{ m: [0, 1], ml: [1, null, null, null] }}
                >
                  <small sx={{ fontSize: ['8px', '10px'], color: 'text' }}>
                    {skill.title}
                  </small>
                </Badge>
              ))}
            </li>
          </ul>
        </CustomContainer>
      ))}
    </Grid>
  )
}
