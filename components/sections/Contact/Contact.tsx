import { Button, Flex, Heading } from "@chakra-ui/react"
import { ChakraField, SectionContainer } from "@components/common/index"
import mailOpen from "@iconify/icons-heroicons-outline/mail-open"
import { Icon } from "@iconify/react"
import { Formik } from "formik"
import PropTypes from "prop-types"

const Contact: React.FC<{ id: string }> = ({ id }) => {
  return (
    <SectionContainer background="black" id={id} aria-label={`${id} Section`}>
      <Flex
        sx={{
          width: "100%",
          flexDirection: "column",
          px: 3,
          py: 3,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Heading
          sx={{
            display: "flex",
            fontSize: [7, 8],
            fontFamily: "Roboto Slab",
            color: "white",
            width: "100",
            flexWrap: "wrap",
            justifyContent: "center",
            justifyItems: "center"
          }}
        >
          Contact
        </Heading>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={() => {
            console.log("testing")
          }}
        >
          {({ isSubmitting }) => (
            <Flex
              sx={{
                width: ["95%", "75%", "65%", "50%"],
                flexDirection: "column",
                justifyContent: "center",
                justifyItems: "center",
                alignItems: "center"
              }}
              as="form"
              name="contact"
              method="POST"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />

              <ChakraField name="name" placeholder="name" label="Name" />

              <ChakraField
                name="email"
                type="email"
                placeholder="email"
                label="email"
              />

              <ChakraField
                name="message"
                placeholder="write me a short message!"
                label="Name"
                textarea
              />

              <Button type="submit" isLoading={isSubmitting}>
                Submit
              </Button>
              <Icon icon={mailOpen} height="1.2em" width="1.2em" />
            </Flex>
          )}
        </Formik>
      </Flex>
    </SectionContainer>
  )
}

Contact.propTypes = {
  id: PropTypes.string.isRequired
}

export default Contact
