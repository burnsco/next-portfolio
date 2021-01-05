import Projects from "@sections/Projects/Projects"
import { Layout } from "@ui/index"

const ProjectsContainer: React.FC<{ id: string }> = ({ id }) => (
  <Layout background="linear-gradient(#F9F9F9,#F1F1F1)" id={id}>
    <Projects />
  </Layout>
)

export default ProjectsContainer
