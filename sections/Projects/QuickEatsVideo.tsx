import { Box, usePrefersReducedMotion } from "@chakra-ui/react"

export default function QuickEatsVideo() {
  const userPrefersReducedMotion = usePrefersReducedMotion()
  return (
    <Box w="100%" h="100%">
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
    </Box>
  )
}

// import { usePrefersReducedMotion } from "@chakra-ui/react"

// export default function QuickEatsVideo() {
//   const userPrefersReducedMotion = usePrefersReducedMotion()
//   return (
//     <video
//       style={{
//         height: "100%",
//         width: "100%"
//       }}
//       controls
//       autoPlay={!userPrefersReducedMotion}
//       loop
//       muted
//     >
//       <source src="/videos/quikeatswebm.webm" type="video/webm" />
//       <source src="/videos/quikeatsmp4.mp4" type="video/mp4" />
//     </video>
//   )
// }
