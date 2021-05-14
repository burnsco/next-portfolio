import { Box, Center, chakra, Flex, Heading } from "@chakra-ui/react"
import Navbar from "@ui/Navbar/Navbar"
import BottomSideBar from "@ui/Side/Bottom"
import LeftSideBar from "@ui/Side/Left"
import RightSideBar from "@ui/Side/Right"
import { motion } from "framer-motion"
import Image from "next/image"

// $black: #555;
// $grey: #343436;
// $lightgrey: #959595;

const ChakraImage = chakra(Image)
const AnimatedSubHeading = motion(Box)

export default function Hero() {
  return (
    <Box>
      <Navbar />
      <RightSideBar />
      <LeftSideBar />
      <BottomSideBar />

      <Box pos="relative" overflow="hidden">
        <Center
          display="flex"
          align="center"
          justify="center"
          dir="column"
          minHeight="94vh"
          h="full"
          bgColor="gray.50"
        >
          <ChakraImage
            src="/bg/2.jpg"
            layout="fill"
            opacity={0.1}
            objectFit="cover"
            quality="100"
          />

          <Flex justify="center" align="center">
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
          </Flex>
        </Center>
      </Box>
    </Box>
  )
}
