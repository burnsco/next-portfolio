"use client"

import { Box } from "@chakra-ui/react"
import { sections } from "@configs/site-config/sections"
import HeroSection from "@sections/Hero"
import Navbar from "@ui/Navbar"
import BottomSideBar from "@ui/Side/Bottom"
import LeftSideBar from "@ui/Side/Left"
import RightSideBar from "@ui/Side/Right"
import dynamic from "next/dynamic"

const SkillsSection = dynamic(() => import("@sections/Skills"))
const ProjectsSection = dynamic(() => import("@sections/Projects"))
const MiniAppsSection = dynamic(() => import("@sections/MiniApps"))
const AboutSection = dynamic(() => import("@sections/About"))
const Footer = dynamic(() => import("@ui/Footer/Footer"))




export default function Page() {

  return (
    <>
      <Navbar sections={sections} />
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
