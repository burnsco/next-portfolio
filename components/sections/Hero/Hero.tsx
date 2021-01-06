import { Box, chakra, Heading, Img } from "@chakra-ui/react"
import { Container, HeroSocialIcons } from "@common/index"

const Hero = () => (
  <Box
    display="flex"
    minHeight="100%"
    flexDir="column"
    align="center"
    justify="center"
  >
    <Container
      mt={10}
      display="flex"
      bg="translucent"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Img
        objectPosition="50% 50%"
        objectFit="cover"
        w="130px"
        h="130px"
        aria-label="Me"
        boxShadow="avatar"
        transform="rotate(-37deg)"
        borderRadius="full"
        size="2xl"
        mb="3"
        loading="lazy"
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
  </Box>
)

export default Hero
