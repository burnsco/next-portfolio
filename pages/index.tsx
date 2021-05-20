import AboutSection from "@sections/About"
import HeroSection from "@sections/Hero"
import MiniAppsSection from "@sections/MiniApps"
import ProjectsSection from "@sections/Projects"
import SkillsSection from "@sections/Skills"
import Footer from "@ui/Footer/Footer"
import Navbar from "@ui/Navbar/Navbar"
import LeftSideBar from "@ui/Side/Left"
import RightSideBar from "@ui/Side/Right"
import BottomSideBar from "../components/ui/Side/Bottom"

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <LeftSideBar />
      <RightSideBar />
      <BottomSideBar />
      <main>
        <HeroSection id="home" />
        <SkillsSection id="skills" />
        <ProjectsSection id="projects" />
        <MiniAppsSection id="apps" />
        <AboutSection id="about" />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
