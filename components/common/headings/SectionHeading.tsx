import { Box, chakra } from "@chakra-ui/react"
import { Container } from "@common/index"
import PropTypes from "prop-types"

const SectionHeading: React.FC<{ title: string; subHeading?: string }> = ({
  title,
  subHeading
}) => {
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <Container py="3rem" maxW="1280px">
      <Box maxW="760px" mx="auto" textAlign="center" mb="42px">
        <chakra.h1 textStyle="section-heading" mb="3">
          <chakra.span
            backgroundImage="linear-gradient(120deg, rgba(243,147, 55,1) 0%, rgb(250, 112, 154) 100%)"
            backgroundRepeat="no-repeat"
            backgroundSize="100% 0.2em"
            backgroundPosition="0 88%"
            transition="background-size 0.25s ease-in"
            _hover={{
              backgroundSize: "100% 88%"
            }}
          >
            {capitalizedTitle}
          </chakra.span>
        </chakra.h1>
        <chakra.p opacity={0.8} fontSize="lg">
          {subHeading}
        </chakra.p>
      </Box>
    </Container>
  )
}
SectionHeading.propTypes = {
  title: PropTypes.string.isRequired
}

export default SectionHeading
