import { Center, usePrefersReducedMotion } from "@chakra-ui/react"
import dynamic from "next/dynamic"

const RedditCloneIconsList = dynamic(
  () => import("@common/icons/RedditCloneIconsList")
)
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
      <Center mt="4" p="1">
        <h4>QuickEats</h4>
      </Center>
      <Center mt="1">
        {" "}
        <QuickEatsIconsList />
      </Center>
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
