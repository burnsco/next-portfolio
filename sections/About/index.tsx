import { SectionContainer, SectionHeading } from "@common/index"
import PageContainer from "@ui/Layout/PageContainer"
import PropTypes from "prop-types"
import About from "./About"

const AboutContainer: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id} background={`linear-gradient(#e9ecef,gray.50)`}>
    <PageContainer bg="translucent">
      <SectionHeading title={id} />
      <About />
    </PageContainer>
  </SectionContainer>
)

AboutContainer.propTypes = {
  id: PropTypes.string.isRequired
}

export default AboutContainer
