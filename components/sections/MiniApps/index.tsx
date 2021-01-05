import { Layout } from "@ui/index"
import PropTypes from "prop-types"
import MiniAppsCards from "./MiniApps"

export const MiniApps: React.FC<{ id: string }> = ({ id }) => (
  <Layout id={id} background="linear-gradient(#F1F1F1,#E9E9E9)">
    <MiniAppsCards />
  </Layout>
)

export default MiniApps

MiniApps.propTypes = {
  id: PropTypes.string.isRequired
}
