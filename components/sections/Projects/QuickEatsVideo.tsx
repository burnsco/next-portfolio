import { Box } from "@chakra-ui/react"

const QuickEatsVideo = () => (
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
      <source src="./videos/quickeatsdemo.webm" type="video/webm" />
      <source src="./videos/quickeats.mp4" type="video/mp4" />
    </video>
  </Box>
)

export default QuickEatsVideo
