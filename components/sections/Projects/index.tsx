import { SectionContainer, SectionHeading } from "@common/index"
import Projects from "@sections/Projects/Projects"

const ProjectsContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id} background="linear-gradient(#F9F9F9,#F1F1F1)">
    <SectionHeading title="Projects" subHeading="Full-stack apps" />
    <Projects />
  </SectionContainer>
)

export default ProjectsContainer
