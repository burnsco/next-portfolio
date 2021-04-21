import AboutSection from "@sections/About"
import HeroSection from "@sections/Hero"
import MiniAppsSection from "@sections/MiniApps"
import ProjectsSection from "@sections/Projects"
import SkillsSection from "@sections/Skills"
import { Layout } from "@ui/index"
import dynamic from "next/dynamic"

const Footer = dynamic(() => import("@ui/Footer/Footer"))

export default function PortfolioLayout() {
  return (
    <Layout>
      <header>
        <HeroSection id="home" />
      </header>

      <main>
        <SkillsSection id="skills" />
        <ProjectsSection id="projects" />
        <MiniAppsSection id="apps" />
        <AboutSection id="about" />
      </main>

      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}
