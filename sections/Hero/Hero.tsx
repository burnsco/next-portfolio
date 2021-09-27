import { Box, Center, chakra, Heading, Text, VStack } from "@chakra-ui/react"
import AnimatedScrollDownArrow from "@common/icons/scroll-down-arrow"
import { motion } from "framer-motion"
import Image from "next/image"
import { Link } from "react-scroll"

const ChakraLink = chakra(Link)

const ChakraImage = chakra(Image)
const AnimatedSubHeading = motion(Box)
const AnimatedScrollText = motion(Text)

export default function Hero() {
  return (
    <Box pos="relative" overflow="hidden" w="full">
      <Center
        minH="100vh"
        w="full"
        p="3em"
        bg="gray.50"
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
          quality="80"
        />

        <Center display="flex" flexDir="column">
          <Box>
            <Heading
              color="#343436"
              letterSpacing="tighter"
              fontFamily="Montserrat"
              fontSize={{ sm: "4xl", md: "6xl" }}
              fontWeight="900"
            >
              Corey Burns
            </Heading>
          </Box>

          <Box>
            <AnimatedSubHeading
              as={Heading}
              opacity={0.9}
              initial={false}
              transform="rotate(-1deg)"
              animate={{ x: 100 }}
              background="linear-gradient(120deg,  rgba(243,147, 55,1), rgb(250, 112, 154) 100%)"
              backgroundRepeat="no-repeat"
              backgroundSize="100% 60%"
              backgroundPosition="0 59%"
              fontFamily="Montserrat"
              letterSpacing="tighter"
              fontSize={{ sm: "1xl", md: "2xl" }}
              color="blackAlpha.700"
              fontWeight="800"
            >
              full-stack developer
            </AnimatedSubHeading>
          </Box>
          <VStack pos="absolute" bottom="50" px={2}>
            <ChakraLink
              to="skills"
              _hover={{ cursor: "pointer", color: "p2" }}
              spy
              smooth
              duration={500}
            >
              <AnimatedScrollText
                fontSize={{ sm: "12px" }}
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
              <AnimatedScrollDownArrow />
            </ChakraLink>
          </VStack>
        </Center>
      </Center>
    </Box>
  )
}
