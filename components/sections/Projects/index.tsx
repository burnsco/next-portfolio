import Projects from "@sections/Projects/Projects"
import { Layout } from "@ui/index"

const ProjectsContainer: React.FC<{ id: string }> = ({ id }) => (
  <Layout id={id}>
    <Projects />
  </Layout>
)

export default ProjectsContainer
