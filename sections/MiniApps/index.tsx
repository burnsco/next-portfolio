import { SectionContainer } from "@common/index"
import PropTypes from "prop-types"
import MiniAppsCards from "./MiniApps"

export const MiniApps: React.FC<{ id: string }> = ({ id }): JSX.Element => (
  <SectionContainer id={id} background={`linear-gradient(#f8f9fa,gray.50)`}>
    <MiniAppsCards />
  </SectionContainer>
)

export default MiniApps

MiniApps.propTypes = {
  id: PropTypes.string.isRequired
}
