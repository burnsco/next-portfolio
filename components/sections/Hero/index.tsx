import { SectionContainer } from "@common/index"
import Hero from "./Hero"

const HeroContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer
    id={id}
    background="linear-gradient(#252323,#292a2d,#3b3d42)"
  >
    <Hero />
  </SectionContainer>
)

export default HeroContainer
