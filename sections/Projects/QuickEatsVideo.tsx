import { Box, Center, chakra, usePrefersReducedMotion } from "@chakra-ui/react"
import dynamic from "next/dynamic"


const QuickEatsIconsList = dynamic(
  () => import("@common/icons/QuickEatsIconsList")
)

export default function QuickEatsVideo() {
  const userPrefersReducedMotion = usePrefersReducedMotion()
  return (
    <>
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
      <Box border="2px solid red"  p="2">
      <Center >
        <chakra.h3 fontWeight="medium">QuickEats</chakra.h3>
      </Center>
      <Center mt="2">
        {" "}
        <QuickEatsIconsList />
      </Center>
      </Box>
    </>
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
