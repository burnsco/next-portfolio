import {
  AboutSection,
  ContactSection,
  HeroSection,
  MiniAppsSection,
  ProjectsSection,
  SkillsSection
} from "@components/sections/index"
import { Footer, Layout } from "@components/ui/index"

export default function IndexPage() {
  return (
    <Layout>
      <HeroSection id="Home" />
      <SkillsSection id="Skills" />
      <ProjectsSection id="Projects" />
      <MiniAppsSection id="Apps" />
      <AboutSection id="About" />
      <ContactSection id="Contact" />
      <Footer />
    </Layout>
  )
}
