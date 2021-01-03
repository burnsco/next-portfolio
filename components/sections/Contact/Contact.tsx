import { Button, chakra, Container, Flex, Heading } from "@chakra-ui/react"
import { ChakraField } from "@common/index"
import mailOpen from "@iconify/icons-heroicons-outline/mail-open"
import { Icon } from "@iconify/react"
import { Formik } from "formik"

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
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={(_, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {props => (
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

            <ChakraField type="text" name="name" label="name" />

            <ChakraField name="email" type="email" label="email" />

            <ChakraField name="message" label="message" textarea />

            <Button mt={2} type="submit" isLoading={props.isSubmitting}>
              Submit
            </Button>
            <Icon icon={mailOpen} height="1.2em" width="1.2em" />
          </chakra.form>
        )}
      </Formik>
    </Flex>
  </Container>
)
export default Contact
