import { SectionContainer } from "@common/index"
import Projects from "@sections/Projects/Projects"

const ProjectsContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id}>
    <Projects />
  </SectionContainer>
)

export default ProjectsContainer
