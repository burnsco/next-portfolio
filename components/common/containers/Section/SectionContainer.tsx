import PropTypes from "prop-types"
import { Section } from "react-scroll-section"

const SectionContainer: React.FC<{
  id: string
  children: React.ReactNode
  background: string
}> = ({ id, children, background, ...props }) => (
  <Section id={id} {...props}>
    {children}
  </Section>
)

SectionContainer.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default SectionContainer
