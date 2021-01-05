import { chakra, Flex, Heading, Img } from "@chakra-ui/react"
import { AnimatedWave, Container, HeroSocialIcons } from "@common/index"

const Hero = () => (
  <Flex minHeight="100vh" flexDir="column" align="center" justify="center">
    <Container
      display="flex"
      mb={6}
      bg="translucent"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Img
        objectPosition="50% 50%"
        objectFit="cover"
        boxSize="130px"
        aria-label="Me"
        boxShadow="avatar"
        transform="rotate(-37deg)"
        borderRadius="full"
        size="2xl"
        mb="3"
        loading="eager"
        name="Corey Burns"
        src="/images/me.webp"
      />

      <Heading color="saffron" fontWeight={900}>
        Corey Burns
      </Heading>

      <chakra.h2 fontWeight={600} color="white">
        Full-stack Developer
      </chakra.h2>

      <HeroSocialIcons />
    </Container>
    <AnimatedWave bottom />
  </Flex>
)

export default Hero
