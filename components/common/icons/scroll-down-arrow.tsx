import { chakra } from "@chakra-ui/react"
import { motion } from "framer-motion"

const AnimatedScrollDownArrow = () => (
  <chakra.div
    display="flex"
    align="center"
    id="scroll-down-div"
    pos="relative"
    userSelect="none"
    width="1em"
    h="2.5em"
    pointerEvents="none"
  >
    <motion.svg height="100%" width="100%" viewBox="0 0 20 20">
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="black"
        animate={{
          y: [0, 2, 4, 6, 8, 4, 3, 3, 0]
        }}
        transition={{
          duration: 2,
          times: [0, 0.5, 1],
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        d="M2.5 10H6V3h8v7h3.5L10 17.5L2.5 10z"
      />
    </motion.svg>
  </chakra.div>
)

export default AnimatedScrollDownArrow
