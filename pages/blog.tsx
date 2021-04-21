import { Container, Heading } from "@chakra-ui/react"
import Navbar from "@ui/Header/Navbar"
import { Layout } from "@ui/index"
import dynamic from "next/dynamic"

const Footer = dynamic(() => import("@ui/Footer/Footer"))

export default function BlogLayout() {
  return (
    <Layout>
      <header>
        <Navbar />
      </header>

      <main>
        <Container minH="95vh">
          <Heading>Blog Page</Heading>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}
