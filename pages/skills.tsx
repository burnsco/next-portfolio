import dynamic from "next/dynamic"

const SkillsSection = dynamic(() => import("@sections/Skills"))

const SkillsPage = () => <SkillsSection id="skills" />

export default SkillsPage
