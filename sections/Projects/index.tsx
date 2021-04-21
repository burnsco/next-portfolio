import { SectionContainer, SectionHeading } from "@common/index"
import Projects from "@sections/Projects/Projects"

export default function ProjectsContainer(props: any) {
  return (
    <SectionContainer
      id={props.id}
      background={`linear-gradient(#f7fafc" #F9FBFB)`}
    >
      <SectionHeading title={props.id} />
      <Projects />
    </SectionContainer>
  )
}
