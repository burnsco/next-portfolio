import HeroSection from "@sections/Hero/index"
import { Layout } from "@ui/index"
import dynamic from "next/dynamic"

const SkillsSection = dynamic(() => import("@sections/Skills/index"))
const ProjectsSection = dynamic(() => import("@sections/Projects/index"))
const MiniAppsSection = dynamic(() => import("@sections/MiniApps/index"))
const AboutSection = dynamic(() => import("@sections/About/index"))
const ContactSection = dynamic(() => import("@sections/Contact/index"), {
  ssr: false
})
const Footer = dynamic(() => import("@ui/Footer"))

export default function IndexPage() {
  return (
    <Layout>
      <HeroSection id="home" />
      <SkillsSection id="skills" />
      <ProjectsSection id="projects" />
      <MiniAppsSection id="apps" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
      <Footer />
    </Layout>
  )
}
