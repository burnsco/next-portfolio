import { Grid } from "@chakra-ui/react"
import { Container } from "@common/index"
import MySkills from "./MySkills"

const Skills = () => (
  <Container>
    <Grid gap={4} gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))">
      <MySkills />
    </Grid>
  </Container>
)

export default Skills
