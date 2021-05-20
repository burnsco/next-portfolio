import {
  Box,
  Center,
  chakra,
  Flex,
  Heading,
  Text,
  VStack
} from "@chakra-ui/react"
import AnimatedScrollDownArrow from "@common/icons/scroll-down-arrow"
import { motion } from "framer-motion"
import Image from "next/image"

// $black: #555;
// $grey: #343436;
// $lightgrey: #959595;

const ChakraImage = chakra(Image)
const AnimatedSubHeading = motion(Box)
const AnimatedScrollText = motion(Text)
const AnimatedScrollArrow = motion(AnimatedScrollDownArrow)

export default function Hero() {
  return (
    <Box pos="relative" overflow="hidden" w="full">
      <Center
        minH="100vh"
        w="full"
        px={2}
        display="flex"
        align="center"
        justify="center"
        dir="column"
        h="full"
      >
        <ChakraImage
          src="/bg/2.jpg"
          layout="fill"
          opacity={0.1}
          objectFit="cover"
          quality="100"
        />

        <Flex dir="row" justify="center" align="center">
          <Heading
            color="#343436"
            letterSpacing="tighter"
            fontFamily="Montserrat"
            fontSize="8xl"
            fontWeight="900"
          >
            Corey Burns
          </Heading>
          <Box>
            <AnimatedSubHeading
              as={Heading}
              transform="rotate(-5deg)"
              bgColor="p2"
              fontFamily="Montserrat"
              letterSpacing="tighter"
              fontSize="3xl"
              color="whiteAlpha.800"
              fontWeight="800"
            >
              full-stack developer
            </AnimatedSubHeading>
          </Box>

          <VStack pos="absolute" bottom="50" px={2}>
            <AnimatedScrollText
              initial={{ rotate: 90 }}
              animate={{
                y: [0, -2, -5, -7, -9, -6, -4, -3, 0]
              }}
              transition={{
                duration: 2,
                times: [0, 0.5, 1],
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Scroll
            </AnimatedScrollText>
            <AnimatedScrollArrow />
          </VStack>
        </Flex>
      </Center>
    </Box>
  )
}
