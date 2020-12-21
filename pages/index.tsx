import Layout from "@components/Layout"
import {
  About,
  Contact,
  Footer,
  Hero,
  MiniApps,
  Projects,
  Skills
} from "@sections"

export default function IndexPage() {
  return (
    <Layout>
      <Hero title="Home" />
      <Skills title="Skills" />
      <Projects title="Projects" />
      <MiniApps title="Apps" />
      <About title="About" />
      <Contact title="Contact" />
      <Footer />
    </Layout>
  )
}
