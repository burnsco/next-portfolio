import { Box, chakra } from "@chakra-ui/react"
import { Container } from "@common/index"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import { useInView } from "react-intersection-observer"

const SectionHeading: React.FC<{ title: string; subHeading?: string }> = ({
  title,
  subHeading
}) => {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    trackVisibility: true,
    delay: 250
  })

  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <Container maxW="1280px" pb="2.5rem" bg="transparent" mb={[0, 2]} my={8}>
      <div ref={ref}>
        <Box maxW="760px" mx="auto" textAlign="center">
          {inView ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1.2 }}
              transition={{
                type: "spring",
                duration: 0.8,
                stiffness: 260,
                damping: 20
              }}
            >
              <chakra.h1 textStyle="section-heading" lineHeight="1.2" mb="1">
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
            </motion.div>
          ) : null}
        </Box>
      </div>
    </Container>
  )
}
SectionHeading.propTypes = {
  title: PropTypes.string.isRequired
}

export default SectionHeading
