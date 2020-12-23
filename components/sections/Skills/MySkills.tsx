import { Badge, Grid, Heading, List, ListItem, Text } from "@chakra-ui/react"
import RenderIcon from "@components/common/icons/socials"
import { CustomContainer } from "@components/common/index"
import data from "@data/my-skills"

export default function MySkills() {
  return (
    <Grid
      sx={{
        height: "100%"
      }}
    >
      {data.map((item, i) => (
        <CustomContainer key={`my-skills-${item.title}-${i}`}>
          <List>
            <ListItem
              data-sal="slide-up"
              data-sal-delay={item.delay}
              data-sal-easing="ease"
            >
              <Heading
                sx={{
                  fontSize: [2, 3],
                  mb: 1
                }}
              >
                <RenderIcon iconname={item.iconName} />
                <Text ml={2}>{item.title}</Text>
              </Heading>

              {item.skills.map((skill, d) => (
                <Badge
                  key={`MySkills-${skill.title}-${d}`}
                  variant="outline"
                  sx={{ m: [0, 1], ml: [1, null, null, null] }}
                >
                  <Text sx={{ fontSize: ["8px", "10px"] }}>{skill.title}</Text>
                </Badge>
              ))}
            </ListItem>
          </List>
        </CustomContainer>
      ))}
    </Grid>
  )
}
