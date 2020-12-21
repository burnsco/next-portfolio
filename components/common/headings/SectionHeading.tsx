import { Heading } from "@chakra-ui/react"
import PropTypes from "prop-types"

const SectionHeading: React.FC<{ title: string }> = ({ title }) => (
  <Heading
    data-sal="fade"
    data-sal-delay="300"
    data-sal-easing="ease-out-back"
    sx={{
      color: "blackolive",
      overflow: "hidden",
      textAlign: "center",
      fontSize: [6, 7, 8],
      fontFamily: "Roboto Slab",
      fontWeight: 900,
      my: 2
    }}
    variant="textStyles.projectTitle"
  >
    <Heading
      sx={{
        color: "blackolive",
        backgroundImage:
          "linear-gradient(120deg, rgba(243,147, 55,1) 0%, rgb(250, 112, 154) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 0.2em",
        backgroundPosition: "0 88%",
        transition: "background-size 0.25s ease-in",
        "&:hover": {
          backgroundSize: "100% 88%"
        }
      }}
    >
      {title}
    </Heading>
  </Heading>
)

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired
}

export default SectionHeading
