import { SimpleGrid } from "@chakra-ui/react"
import AboutMe from "./Me"
import RandomFacts from "./RandomFacts"

export default function About() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} p="6em">
      <AboutMe />
      <RandomFacts />
    </SimpleGrid>
  )
}
