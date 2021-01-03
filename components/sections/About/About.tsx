import { Grid } from "@chakra-ui/react"
import AboutMe from "./Me"
import RandomFacts from "./RandomFacts"

const About = () => (
  <Grid
    gap={[3, 4]}
    mb={[4, 5, 6]}
    gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))"
  >
    <AboutMe />
    <RandomFacts />
  </Grid>
)

export default About
