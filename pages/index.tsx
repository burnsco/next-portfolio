import dynamic from "next/dynamic"

const HeroSection = dynamic(() => import("@sections/Hero"))

const IndexPage = () => <HeroSection id="home" />

export default IndexPage
