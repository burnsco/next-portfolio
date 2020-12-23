import { Flex, Heading, Image } from "@chakra-ui/react"
import { SectionContainer } from "@components/common/index"
import { Header } from "@components/ui/index"
import PropTypes from "prop-types"

const Hero: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer
    id={id}
    aria-label={id}
    background="`linear-gradient(black, grey)`,"
  >
    <Header />
    <Flex
      sx={{
        minHeight: "95vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        height="130"
        width="130"
        mb={3}
        objectFit="cover"
        objectPosition="50% 50%"
        boxShadow="0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)"
        borderRadius="9999px"
        transform="rotate(-35deg)"
        src="/images/Me.jpg"
      />
      <Heading fontWeight="700" fontSize={[3, 4]} letterSpacing="tight">
        Corey Burns
      </Heading>
      <Heading fontWeight="600" fontSize={[1, 2]} letterSpacing="tight">
        Full-stack Developer
      </Heading>
    </Flex>
  </SectionContainer>
)

Hero.propTypes = {
  id: PropTypes.string.isRequired
}

export default Hero
