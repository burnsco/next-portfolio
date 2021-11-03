import { Box, Center, chakra, Flex, Heading, Text } from "@chakra-ui/react"
import HeroSocialIcon from "@common/icons/hero-social-icon"
import { AnimatedWave } from "@common/index"
import Navbar from "@ui/Navbar/Navbar"

// $black: #555;
// $grey: #343436;
// $lightgrey: #959595;

export default function Hero() {
  return (
    <Box>
      <Navbar />
      <Flex
        minHeight="90vh"
        bgGradient="linear(to-b,#202124,#212529,#292a2d,#343a40)"
        flexDir="column"
        align="center"
        justify="center"
      >
        <Center display="flex" flexDir="column" mb={6}>
          <Heading
            as="h1"
            fontSize="2.8rem"
            color="orange1"
            lineHeight="1.6"
            fontWeight="800"
          >
            Corey{" "}
            <chakra.span
              color="white"
              _hover={{
                filter:
                  "brightness(0.5) sepia(1) hue-rotate(-70deg) saturate(5)"
              }}
            >
              Burns
            </chakra.span>
          </Heading>

          <Text
            fontSize="1rem"
            letterSpacing="wide"
            color="gray.300"
            fontWeight="600"
          >
            Full-stack Developer
          </Text>
          <HeroSocialIcon />
        </Center>
        <AnimatedWave bottom />
      </Flex>
    </Box>
  )
}
