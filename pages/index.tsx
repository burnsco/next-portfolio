import { Layout } from "@ui/index"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const HeroSection = dynamic(() => import("@sections/Hero"))
const SkillsSection = dynamic(() => import("@sections/Skills"))
const ProjectsSection = dynamic(() => import("@sections/Projects"))
const MiniAppsSection = dynamic(() => import("@sections/MiniApps"))
const AboutSection = dynamic(() => import("@sections/About"))
const ContactSection = dynamic(() => import("@sections/Contact"))
const Footer = dynamic(() => import("@ui/Footer"))

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => setLoaded(true), [])

  return (
    <Layout>
      <header>
        <HeroSection id="home" />
      </header>

      {loaded ? (
        <>
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
        </>
      ) : null}
    </Layout>
  )
}

export default IndexPage
