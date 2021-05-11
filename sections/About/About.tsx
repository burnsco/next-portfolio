import { SimpleGrid } from "@chakra-ui/react"
import AboutMe from "./Me"
import RandomFacts from "./RandomFacts"

const About = () => (
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={4}>
    <AboutMe />
    <RandomFacts />
  </SimpleGrid>
)

export default About
