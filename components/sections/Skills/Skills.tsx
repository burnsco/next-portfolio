import { Grid } from "@chakra-ui/react"
import DeveloperInfo from "@sections/Skills/DeveloperInfo"
import MySkills from "./MySkills"

const Skills = () => (
  <Grid gap={4} gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))">
    <DeveloperInfo />
    <MySkills />
  </Grid>
)

export default Skills
