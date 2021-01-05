import { Layout } from "@ui/index"
import Hero from "./Hero"

const HeroContainer: React.FC<{ id: string }> = ({ id }) => (
  <Layout id={id} background="linear-gradient(#252323,#292a2d,#3b3d42)">
    <Hero />
  </Layout>
)

export default HeroContainer
