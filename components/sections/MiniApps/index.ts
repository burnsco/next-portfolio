/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import PropTypes from 'prop-types'
import SectionContainer from '../Container/SectionContainer'
import CustomContainer from '../../components/Containers/CustomContainer'
import SectionHeading from '../Container/SectionHeading'
import MiniAppsCards from './MiniAppsCards'

const MiniApps = ({ title }) => (
  <SectionContainer id={title} aria-label={title} background="#F8F9FA">
    <CustomContainer>
      <Box sx={{ my: 5, pb: 3 }}>
        <SectionHeading title="Mini-Apps" />
        <MiniAppsCards />
      </Box>
    </CustomContainer>
  </SectionContainer>
)

MiniApps.propTypes = {
  title: PropTypes.string.isRequired,
}

export default MiniApps
