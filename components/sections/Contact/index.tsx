import { SectionContainer } from "@common/index"
import { Layout } from "@ui/index"
import PropTypes from "prop-types"
import Contact from "./Contact"

const ContactContainer: React.FC<{ id: string }> = ({ id }) => (
  <Layout>
    <SectionContainer
      background="linear-gradient(#3b3d42,#292a2d,#252323)"
      id={id}
    >
      <Contact />
    </SectionContainer>
  </Layout>
)

export default ContactContainer

ContactContainer.propTypes = {
  id: PropTypes.string.isRequired
}
