import { Box, Text } from "@chakra-ui/react"

const Footer = () => (
  <Box
    color="p3"
    as="footer"
    width="100%"
    bg="hero2"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Text p="2" mt="3">
      Corey Burns
      <Text as="span" color="persianred" fontSize="0">
        © {new Date().getFullYear()}
      </Text>
    </Text>
  </Box>
)

export default Footer
