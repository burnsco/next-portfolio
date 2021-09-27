import { BoxProps, Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"

const AnimatedSmallCard = motion(Flex)

const SmallCard = (props: BoxProps) => (
  <AnimatedSmallCard
    flexDirection="column"
    h="full"
    bg="white"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    rounded="md"
    shadow="md"
    {...props}
  />
)

export default SmallCard
