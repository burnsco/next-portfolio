import { Avatar, Flex, Heading, WrapItem } from "@chakra-ui/react"
import { SectionContainer } from "@components/common/index"
import { Header } from "@components/ui/index"
import PropTypes from "prop-types"

const Hero: React.FC<{ id: string }> = ({ id }) => (
  <SectionContainer id={id} background="`linear-gradient(black, grey)`,">
    <Header />
    <Flex
      sx={{
        minHeight: "95vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <WrapItem>
        <Avatar size="2xl" name="Corey Burns" src="./images/Me.jpg" />
      </WrapItem>
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
