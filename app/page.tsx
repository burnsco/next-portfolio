"use client"

import { Box } from "@chakra-ui/react"
import HeroSection from "@sections/hero"
import Navbar from "@ui/Navbar"
import BottomSideBar from "@ui/Side/Bottom"
import LeftSideBar from "@ui/Side/Left"
import RightSideBar from "@ui/Side/Right"
import dynamic from "next/dynamic"

const SkillsSection = dynamic(() => import("@sections/skills"))
const ProjectsSection = dynamic(() => import("@sections/projects"))
const MiniAppsSection = dynamic(() => import("@sections/miniapps"))
const AboutSection = dynamic(() => import("@sections/about"))
const Footer = dynamic(() => import("@ui/Footer/Footer"))

export default function Page() {
  return (
    <>
      <Navbar />
      <LeftSideBar />
      <RightSideBar />
      <BottomSideBar />
      <main>
        <HeroSection />
        <Box w="full" h="10em" bg="white" />
        <SkillsSection  />
        <Box w="full" h="10em" bg="white" />
        <ProjectsSection  />
        <Box w="full" h="10em" bg="white" />
        <MiniAppsSection />
        <Box w="full" h="10em" bg="white" />
        <AboutSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
