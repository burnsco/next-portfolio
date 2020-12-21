import { Box, Flex, Heading } from "@chakra-ui/react"
import { ChakraField, SectionContainer } from "@components/common/index"
import mailOpen from "@iconify/icons-heroicons-outline/mail-open"
import { Icon } from "@iconify/react"
import { Formik } from 'formik'

const Contact: React.FC<{ id: string }> = ({ id }) => {

  const handleSubmit = () => {
    console.log('test')
  }
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
          variant="textStyles.projectTitle"
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
        initialValues={{ name: '', email: '', message: ''}}
        onSubmit={handleSubmit}>
          {({ isSubmitting => (</Formik>
          })}
        <Form>
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

         <ChakraField name="name" placeholder="name" label="Name">

         <ChakraField name="email" type="email" placeholder="email" label="email">

          <ChakraField name="message" placeholder="write me a short message!" label="Name" textarea>

          <CoolButton
            sx={{
              border: "2px dashed",
              cursor: `pointer`,
              fontSize: `100%`,
              lineHeight: `inherit`,
              alignSelf: "flex-end",
              mt: 2,
              bg: "blueDark",
              ":hover": { bg: "carolinablue" }
            }}
            title="Send"
            type="submit"
          >
            <Icon icon={mailOpen} height="1.2em" width="1.2em" />
          </CoolButton>
        </Flex>
      </Flex>
      </Form>
      </Formik>
    </Box>
  </SectionContainer>
)
}

Contact.propTypes = {
  title: PropTypes.string.isRequired
}

export default Contact
