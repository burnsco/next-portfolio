import { SectionContainer } from "@common/index"
import Projects from "@sections/Projects/Projects"

export default function ProjectsContainer(props: any) {
  return (
    <SectionContainer id={props.id}>
      <Projects />
    </SectionContainer>
  )
}
