import {
  AboutSection,
  ContactSection,
  FooterSection,
  HeroSection,
  MiniAppsSection,
  ProjectsSection,
  SkillsSection
} from "@components/sections/index"
import Layout from "@components/ui/Layout"

export default function IndexPage() {
  return (
    <Layout>
      <HeroSection title="Home" />
      <SkillsSection title="Skills" />
      <ProjectsSection title="Projects" />
      <MiniAppsSection title="Apps" />
      <AboutSection title="About" />
      <ContactSection title="Contact" />
      <FooterSection />
    </Layout>
  )
}
