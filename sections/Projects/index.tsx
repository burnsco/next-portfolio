import { SectionContainer, SectionHeading } from "@common/index"
import Projects from "@sections/Projects/Projects"

export default function ProjectsContainer(props: any) {
  return (
    <SectionContainer
      id={props.id}
      background={`linear-gradient(white, #f8f9fa)`}
    >
      <SectionHeading title={props.id} />
      <Projects />
    </SectionContainer>
  )
}
