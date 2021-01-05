import { Layout } from "@ui/index"
import PropTypes from "prop-types"
import About from "./About"

const AboutContainer: React.FC<{ id: string }> = ({ id }) => (
  <Layout background="linear-gradient(#E9E9E9, white)" id={id}>
    <About />
  </Layout>
)

AboutContainer.propTypes = {
  id: PropTypes.string.isRequired
}

export default AboutContainer
