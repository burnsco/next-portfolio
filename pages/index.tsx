import { Layout } from "@ui/index"
import dynamic from "next/dynamic"

const HeroSection = dynamic(() => import("@sections/Hero"))
const SkillsSection = dynamic(() => import("@sections/Skills"))
const ProjectsSection = dynamic(() => import("@sections/Projects"))
const MiniAppsSection = dynamic(() => import("@sections/MiniApps"))
const AboutSection = dynamic(() => import("@sections/About"))
const ContactSection = dynamic(() => import("@sections/Contact"))
const Footer = dynamic(() => import("@ui/Footer"))

const IndexPage = () => (
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

    <aside>
      <ContactSection id="contact" />
    </aside>

    <footer>
      <Footer />
    </footer>
  </Layout>
)

export default IndexPage
