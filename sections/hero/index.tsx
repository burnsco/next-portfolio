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
import { SectionContainer } from "@common/index"
import { monte } from "fonts"
import { motion } from "framer-motion"
import Image from "next/image"
import { Link } from 'react-scroll'

const ChakraLink = chakra(Link)
const ChakraImage = chakra(Image)
const AnimatedScrollText = motion(Text)

export default function HeroContainer(props: any) {
  return (
    <SectionContainer id={props.id}>
      <Box pos="relative" overflow="hidden" w="full">
        <Center
          pos="relative"
          minH="100vh"
          w="full"
          bg="gray.50"
          display="flex"
          dir="column"
          h="full"
        >
          <ChakraImage
            alt=""
            src="/bg/hero.webp"
            opacity={0.2}
            layout="fill"
            objectFit="cover"
            quality="70"
            priority
          />

          <Flex alignItems="center" justifyContent="center" flexDir="column">
            <Box>
              <Heading
                className={monte.className}
                color="#343436"
                opacity={0.8}
                letterSpacing="tighter"
                fontFamily="Montserrat"
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="900"
              >
                Corey Burns
              </Heading>
            </Box>

            <Box>
              <Heading
                className={monte.className}
                opacity={0.9}
                background="linear-gradient(120deg,  rgba(243,147, 55,1), rgb(250, 112, 154) 100%)"
                backgroundRepeat="no-repeat"
                backgroundSize="100% 60%"
                backgroundPosition="0 59%"
                fontFamily="Montserrat"
                letterSpacing="tighter"
                fontSize={{ base: "1xl", md: "2xl" }}
                color="gray.700"
                fontWeight="800"
              >
                full-stack developer
              </Heading>
            </Box>
            <VStack pos="absolute" bottom="50" px={2}>
              <ChakraLink
                to="skills"
                _hover={{ cursor: "pointer", color: "p2" }}
                smooth
                duration={500}
              >
                <AnimatedScrollText
                  fontSize={{ base: "10.5px", sm: "12.5px" }}
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
          </Flex>
        </Center>
      </Box>
    </SectionContainer>
  )
}
