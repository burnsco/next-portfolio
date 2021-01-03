import { Grid } from "@chakra-ui/react"
import DeveloperInfo from "@sections/Skills/DeveloperInfo"

const Skills = () => (
  <Grid gap={2} gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))">
    <DeveloperInfo />
  </Grid>
)

export default Skills
