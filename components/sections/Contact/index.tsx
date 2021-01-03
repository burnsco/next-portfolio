import { SectionContainer } from "@common/index"
import PropTypes from "prop-types"
import Contact from "./Contact"

const ContactContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer
    background="linear-gradient(#3b3d42,#292a2d,#252323)"
    id={id}
  >
    <Contact />
  </SectionContainer>
)

export default ContactContainer

ContactContainer.propTypes = {
  id: PropTypes.string.isRequired
}
