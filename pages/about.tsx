import dynamic from "next/dynamic"

const AboutSection = dynamic(() => import("@sections/About"))

const AboutPage = () => <AboutSection id="about" />

export default AboutPage
