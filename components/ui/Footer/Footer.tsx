import { Box, Center, Text } from "@chakra-ui/react"

const Footer = () => (
  <Box display="flex" color="white" width="100%" height="50px" bg="black">
    <Center p="2" mt="3" color="white">
      Corey Burns
      <Text as="span" color="red">
        © {new Date().getFullYear()}
      </Text>
    </Center>
  </Box>
)

export default Footer
