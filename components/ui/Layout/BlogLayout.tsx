import { Heading } from "@chakra-ui/react"
import { Container } from "@common/index"
import HeroSection from "@sections/Hero"
import { Layout } from "@ui/index"
import dynamic from "next/dynamic"

const Footer = dynamic(() => import("@ui/Footer/Footer"))

export default function BlogLayout() {
  return (
    <Layout>
      <header>
        <HeroSection id="home" />
      </header>

      <main>
        <Container>
          <Heading>Blog Page</Heading>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}
