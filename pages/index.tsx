import { Box, ChakraProvider } from "@chakra-ui/react"
import HeroSection from "@sections/Hero"
import theme from "@theme/index"
import Navbar from "@ui/Navbar"
import BottomSideBar from "@ui/Side/Bottom"
import LeftSideBar from "@ui/Side/Left"
import RightSideBar from "@ui/Side/Right"
import { GetStaticProps } from "next"
import dynamic from "next/dynamic"

export default function IndexPage({ data }: MainDataType) {
  const SkillsSection = dynamic(() => import("@sections/Skills"))
  const ProjectsSection = dynamic(() => import("@sections/Projects"))
  const MiniAppsSection = dynamic(() => import("@sections/MiniApps"))
  const AboutSection = dynamic(() => import("@sections/About"))
  const Footer = dynamic(() => import("@ui/Footer/Footer"))

  const { skills, projects, miniapps, about, sections } = data

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Navbar sections={sections} />
      <LeftSideBar />
      <RightSideBar />
      <BottomSideBar />
      <main>
        <HeroSection />
        <Box w="full" h="10em" bg="white" />
        <SkillsSection {...skills} />
        <Box w="full" h="10em" bg="white" />
        <ProjectsSection projects={projects} />
        <Box w="full" h="10em" bg="white" />
        <MiniAppsSection miniapps={miniapps} />
        <Box w="full" h="10em" bg="white" />
        <AboutSection {...about} />
      </main>

      <footer>
        <Footer />
      </footer>
    </ChakraProvider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await import("@configs/Projects")
  const about = await import("@configs/About")
  const skills = await import("@configs/Skills")
  const miniapps = await import("@configs/MiniApps")
  const sections = await import("@configs/site-config/sections")

  return {
    props: {
      data: {
        ...projects,
        ...about,
        ...skills,
        ...miniapps,
        ...sections
      }
    }
  }
}
