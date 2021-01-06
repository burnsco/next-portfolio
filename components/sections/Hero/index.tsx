import { Layout } from "@ui/index"
import Hero from "./Hero"

const HeroContainer: React.FC<{ id: string }> = ({ id }) => (
  <Layout id={id}>
    <Hero />
  </Layout>
)

export default HeroContainer
