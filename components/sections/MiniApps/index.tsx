import { Container, SectionContainer, SectionHeading } from "@common/index"
import PropTypes from "prop-types"
import MiniAppsCards from "./MiniApps"

export const MiniApps: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id} background="linear-gradient(#F1F1F1,#E9E9E9)">
    <Container>
      <SectionHeading
        subHeading="small apps made early in my learning journey."
        title="Mini-Apps"
      />
      <MiniAppsCards />
    </Container>
  </SectionContainer>
)

export default MiniApps

MiniApps.propTypes = {
  id: PropTypes.string.isRequired
}
