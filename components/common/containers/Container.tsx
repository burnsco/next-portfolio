import type { BoxProps } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const Container = (props: BoxProps) => (
  <Box
    w="full"
    pb="12"
    pt="3"
    mx="auto"
    maxW="75rem"
    px={{ base: "2", md: "4" }}
    {...props}
  />
)

export default Container
