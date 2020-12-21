/** @jsx jsx */
import { Box, jsx } from 'theme-ui'
import quickeatsmp4 from '../../data/videos/quickeats.mp4'
import quickeatswebm from '../../data/videos/quikeatsdemo.webm'

const QuickEatsVideo = () => (
  <Box>
    <video
      style={{
        height: 'auto',
        width: '100%',
      }}
      controls
      autoPlay
      loop
      muted
    >
      <source src={quickeatswebm} type="video/webm" />
      <source src={quickeatsmp4} type="video/mp4" />
    </video>
  </Box>
)

export default QuickEatsVideo
