import { SectionContainer, SectionHeading } from "@common/index"
import PageContainer from "@ui/Layout/PageContainer"
import PropTypes from "prop-types"
import MiniAppsCards from "./MiniApps"

export const MiniApps: React.FC<{ id: string }> = ({ id }): JSX.Element => (
  <SectionContainer id={id}>
    <PageContainer bg="translucent">
      <SectionHeading title="MiniApps" />
      <MiniAppsCards />
    </PageContainer>
  </SectionContainer>
)

export default MiniApps

MiniApps.propTypes = {
  id: PropTypes.string.isRequired
}
