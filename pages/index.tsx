import { Box } from "@chakra-ui/react"
import AboutSection from "@sections/About"
import HeroSection from "@sections/Hero"
import MiniAppsSection from "@sections/MiniApps"
import ProjectsSection from "@sections/Projects"
import SkillsSection from "@sections/Skills"
import Footer from "@ui/Footer/Footer"
import Navbar from "@ui/Navbar/Navbar"
import BottomSideBar from "@ui/Side/Bottom"
import LeftSideBar from "@ui/Side/Left"
import RightSideBar from "@ui/Side/Right"

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <LeftSideBar />
      <RightSideBar />
      <BottomSideBar />
      <main className="scroll-snap">
        <HeroSection id="home" />
        <Box w="full" h="10em" bg="white" />
        <SkillsSection id="skills" />
        <Box w="full" h="10em" bg="white" />
        <ProjectsSection id="projects" />

        <MiniAppsSection id="apps" />
        <Box w="full" h="10em" bg="white" />
        <AboutSection id="about" />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
