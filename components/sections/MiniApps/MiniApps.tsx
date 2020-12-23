import { Box } from "@chakra-ui/react"
import {
  CustomContainer,
  SectionContainer,
  SectionHeading
} from "@components/common/index"
import PropTypes from "prop-types"
import MiniAppsCards from "./MiniAppsCards"

const MiniApps: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id} aria-label={id} background="#F8F9FA">
    <CustomContainer>
      <Box sx={{ my: 5, pb: 3 }}>
        <SectionHeading title="Mini-Apps" />
        <MiniAppsCards />
      </Box>
    </CustomContainer>
  </SectionContainer>
)

MiniApps.propTypes = {
  id: PropTypes.string.isRequired
}

export default MiniApps
