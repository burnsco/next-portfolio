import dynamic from "next/dynamic"

const ProjectsSection = dynamic(() => import("@sections/Projects"))

const ProjectsPage = () => <ProjectsSection id="projects" />

export default ProjectsPage
