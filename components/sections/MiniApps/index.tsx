import { SectionContainer } from "@common/index"
import PropTypes from "prop-types"
import MiniAppsCards from "./MiniApps"

export const MiniApps: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id}>
    <MiniAppsCards />
  </SectionContainer>
)

export default MiniApps

MiniApps.propTypes = {
  id: PropTypes.string.isRequired
}
