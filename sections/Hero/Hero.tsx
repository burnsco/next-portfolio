import { Center, chakra, Flex, Heading, Img } from "@chakra-ui/react"
import { AnimatedWave, HeroSocialIcons } from "@common/index"
import Navbar from "@ui/Header"

const Hero = () => (
  <>
    <Navbar />
    <Flex
      minHeight="88vh"
      bgGradient="linear(to-b, #292a2d,#3b3d42)"
      flexDir="column"
      align="center"
      justify="center"
    >
      <Center display="flex" flexDir="column">
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
          loading="eager"
          name="Corey Burns"
          src="/images/me.webp"
        />

        <Heading color="saffron" fontWeight="black">
          Corey Burns
        </Heading>

        <chakra.h2 fontWeight={600} color="white">
          Full-stack Developer
        </chakra.h2>

        <HeroSocialIcons />
      </Center>
      <AnimatedWave bottom />
    </Flex>
  </>
)

export default Hero
