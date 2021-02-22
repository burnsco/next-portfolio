import { SectionContainer, SectionHeading } from "@common/index"
import Projects from "@sections/Projects/Projects"

const ProjectsContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id} background={`linear-gradient(#f7fafc" #C5C6D0)`}>
    <SectionHeading title={id} />
    <Projects />
  </SectionContainer>
)

export default ProjectsContainer
