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
    <Container p="10" maxW="1400px" bg="gray.50">
      <div ref={ref}>
        <Box maxW="1400px" mx="auto" textAlign="center" pt="1em">
          <Fade in={inView}>
            <chakra.h1
              fontSize={{ base: "3xl", sm: "5xl", xl: "7xl" }}
              fontFamily="Montserrat"
              fontWeight="800"
              color={color || "blackAlpha.400"}
              lineHeight="2"
            >
              {capitalizedTitle}
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
