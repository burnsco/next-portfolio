import type { BoxProps } from "@chakra-ui/react"
import { Box, useColorMode } from "@chakra-ui/react"

export const Container = (props: BoxProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: "gray.50", dark: "gray.900" }
  const color = { light: "black", dark: "white" }

  return (
    <Box
      w="full"
      pb="12"
      pt="3"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      mx="auto"
      maxW="75rem"
      px={{ base: "2", md: "6" }}
      {...props}
    />
  )
}

export default Container
