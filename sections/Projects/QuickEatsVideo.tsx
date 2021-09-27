import { usePrefersReducedMotion } from "@chakra-ui/react"

export default function QuickEatsVideo() {
  const userPrefersReducedMotion = usePrefersReducedMotion()
  return (
    <video
      style={{
        height: "100%",
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
