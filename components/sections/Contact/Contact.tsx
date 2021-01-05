import { EmailIcon } from "@chakra-ui/icons"
import {
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Input,
  Textarea
} from "@chakra-ui/react"

const Contact = () => (
  <Container maxW="4xl" as="aside">
    <Flex
      width="100%"
      flexDirection="column"
      px={3}
      py={3}
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        my={5}
        fontFamily="Helvetica"
        fontWeight={800}
        color="white"
        width="100"
      >
        Contact
      </Heading>
      <chakra.form
        width={["95%", "75%", "65%", "50%"]}
        flexDirection="column"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
        as="form"
        name="contact"
        method="POST"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <Input type="text" name="name" label="name" />

        <Input name="email" type="email" label="email" />

        <Textarea name="message" label="message" textarea />

        <Button leftIcon={<EmailIcon />} mt={2} type="submit">
          Submit
        </Button>
      </chakra.form>
    </Flex>
  </Container>
)
export default Contact
