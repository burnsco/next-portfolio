import { Box, Center, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box
      display="flex"
      mb="3em"
      color="white"
      width="100%"
      height="80px"
      bg="black"
    >
      <Center p="2" mt="3" color="white" w="full">
        Corey Burns
        <Text as="span" color="red">
          © {new Date().getFullYear()}
        </Text>
      </Center>
    </Box>
  )
}
