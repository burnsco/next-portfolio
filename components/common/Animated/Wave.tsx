import { chakra } from "@chakra-ui/react"
import { motion } from "framer-motion"

const waves = [
  "M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z",
  "M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z",
  "M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
]

const ActualWave: React.FC<{
  layer: string
  offset: string
  color: string
}> = ({ layer, offset, color }) => (
  <chakra.div
    zIndex={layer}
    top={offset}
    userSelect="none"
    pointerEvents="none"
    width="100%"
    height="20vh"
    pos="absolute"
    left={0}
  >
    <motion.svg
      width="100%"
      height="20vh"
      viewBox="0 0 800 338.05"
      preserveAspectRatio="none"
    >
      <motion.path
        animate={{ d: waves }}
        transition={{
          duration: 20,
          times: [0, 0.5, 1],
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        fill={color}
        d="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z"
      />
    </motion.svg>
  </chakra.div>
)

export default ActualWave
