import { Flex, Text } from "@chakra-ui/react"

const Footer = () => (
  <Flex
    as="footer"
    width="100%"
    bg="eerieblack"
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
  </Flex>
)

export default Footer
