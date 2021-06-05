import { SectionContainer } from "@common/index"
import Hero from "./Hero"

export default function HeroContainer(props: any) {
  return (
    <SectionContainer id={props.id}>
      <Hero />
    </SectionContainer>
  )
}
