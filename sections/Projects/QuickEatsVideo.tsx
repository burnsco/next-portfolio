import { usePrefersReducedMotion } from "@chakra-ui/react"

const QuickEatsVideo = () => {
  const userPrefersReducedMotion = usePrefersReducedMotion()
  return (
    <video
      style={{
        height: "auto",
        width: "100%"
      }}
      controls
      autoPlay={!userPrefersReducedMotion}
      loop
      muted
    >
      <source src="/videos/quikeatswebm.webm" type="video/webm" />
      <source src="/videos/quikeatsmp4.mp4" type="video/mp4" />
    </video>
  )
}

export default QuickEatsVideo
