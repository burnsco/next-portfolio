import { SectionContainer } from "@common/index"
import Hero from "./Hero"

const HeroContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id}>
    <Hero />
  </SectionContainer>
)

export default HeroContainer
