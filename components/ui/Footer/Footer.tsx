import { Box, Center, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box
      display="flex"
      mb={{ base: "2em", md: "3em" }}
      color="white"
      width="100%"
      height="80px"
      bg="blackAlpha.800"
    >
      <Center p="2" mt="3" color="white" w="full">
        Corey Burns
        <Text fontSize="xs" as="span" ml="1" color="red">
          © {new Date().getFullYear()}
        </Text>
      </Center>
    </Box>
  )
}
