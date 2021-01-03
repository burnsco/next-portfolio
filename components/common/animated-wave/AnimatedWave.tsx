import { chakra } from "@chakra-ui/react"
import ActualWave from "./Wave"

const AnimatedWave: React.FC<{ bottom?: boolean }> = ({ bottom }) => (
  <chakra.div
    position="absolute"
    left={0}
    userSelect="none"
    pointerEvents="none"
    height="98vh"
    width="100%"
    transform={bottom ? `matrix(1, 0, 0, -1, 0, 0)` : undefined}
  >
    <ActualWave layer="1" offset="-2.5vh" color="white" />
    <ActualWave layer="2" offset="2.5vh" color="rgba(255,255,255, .4)" />
    <ActualWave layer="3" offset="1.5vh" color="rgba(255,255,255, .7)" />
  </chakra.div>
)

export default AnimatedWave
