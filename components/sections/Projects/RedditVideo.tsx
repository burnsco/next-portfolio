import { Box } from "@chakra-ui/react"

const RedditCloneVideo = () => (
  <Box>
    <video
      style={{
        height: "auto",
        width: "100%"
      }}
      controls
      autoPlay
      loop
      muted
    >
      <source src="/videos/redditclonedemo.webm" type="video/webm" />
      <source src="/videos/reddit.mp4" type="video/mp4" />
    </video>
  </Box>
)

export default RedditCloneVideo
