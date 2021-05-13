import { Box, BoxProps } from "@chakra-ui/react"

const LargeCard = (props: BoxProps) => (
  <Box
    borderRadius="lg"
    overflow="hidden"
    rounded="sm"
    bg="white"
    shadow="lg"
    {...props}
  />
)

export default LargeCard
