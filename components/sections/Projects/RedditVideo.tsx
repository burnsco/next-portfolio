import { AspectRatio, usePrefersReducedMotion } from "@chakra-ui/react"

const RedditCloneVideo = () => {
  const userPrefersReducedMotion = usePrefersReducedMotion()
  return (
    <AspectRatio
      maxW="1080px"
      ratio={[21 / 9, 16 / 9, 9 / 16, 4 / 3, 1.85 / 1]}
    >
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
    </AspectRatio>
  )
}

export default RedditCloneVideo
