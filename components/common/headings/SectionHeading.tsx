import { Box, chakra, Fade } from "@chakra-ui/react"
import { Container } from "@common/index"
import PropTypes from "prop-types"
import { useInView } from "react-intersection-observer"

const SectionHeading: React.FC<{
  title: string
  subHeading?: string
  color?: string
}> = ({ title, color, subHeading }) => {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    trackVisibility: true,
    delay: 250
  })

  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <Container py={6} maxW="1280px" bg="gray.50" mb={[0, 2]}>
      <div ref={ref}>
        <Box maxW="960px" mx="auto" textAlign="left">
          <Fade in={inView}>
            <chakra.h1
              fontSize="5xl"
              fontWeight="900"
              fontFamily="Lato"
              color={color || "blackAlpha.700"}
              lineHeight="2"
              mb="1"
            >
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
            {subHeading ? <chakra.h3>{subHeading}</chakra.h3> : null}
          </Fade>
        </Box>
      </div>
    </Container>
  )
}
SectionHeading.propTypes = {
  title: PropTypes.string.isRequired
}

export default SectionHeading
