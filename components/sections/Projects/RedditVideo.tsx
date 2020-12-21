/** @jsx jsx */
import { Box, jsx } from 'theme-ui'
import redditmp4 from '../../data/videos/reddit.mp4'
import redditwebm from '../../data/videos/redditclonedemo.webm'

const RedditCloneVideo = () => (
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
      <source src={redditwebm} type="video/webm" />
      <source src={redditmp4} type="video/mp4" />
    </video>
  </Box>
)

export default RedditCloneVideo
