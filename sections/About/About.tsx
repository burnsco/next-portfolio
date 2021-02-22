import { Grid } from "@chakra-ui/react"
import AboutMe from "./Me"
import RandomFacts from "./RandomFacts"

const About = () => (
  <Grid gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))">
    <AboutMe />
    <RandomFacts />
  </Grid>
)

export default About
