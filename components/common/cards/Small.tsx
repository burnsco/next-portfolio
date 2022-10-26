import { BoxProps, Grid } from "@chakra-ui/react"
import { motion } from "framer-motion"

const AnimatedSmallCard = motion(Grid)

const SmallCard = (props: BoxProps) => (
  <AnimatedSmallCard
    grid
    h="full"
    bg="white"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    rounded="md"
    shadow="lg"
    {...props}
  />
)

export default SmallCard
