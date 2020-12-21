import { Flex, FlexProps, useColorMode } from "@chakra-ui/react"

const CustomContainer = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: "gray.50", dark: "gray.900" }

  const color = { light: "black", dark: "white" }
  return (
    <Flex
      maxW="1200px"
      mx={["1em", "2em"]}
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}

export default CustomContainer
