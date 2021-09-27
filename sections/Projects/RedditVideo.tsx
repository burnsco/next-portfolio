import { usePrefersReducedMotion } from "@chakra-ui/react"

export default function RedditCloneVideo() {
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
      <source src="/videos/redditwebm.webm" type="video/webm" />
      <source src="/videos/redditmp4.mp4" type="video/mp4" />
    </video>
  )
}
