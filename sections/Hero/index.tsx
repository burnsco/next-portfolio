import {
  Box,
  Center,
  chakra,
  Flex,
  Heading,
  Link,
  Text,
  VStack
} from "@chakra-ui/react"
import AnimatedScrollDownArrow from "@common/icons/scroll-down-arrow"
import { SectionContainer } from "@common/index"
import { motion } from "framer-motion"
import Image from "next/image"

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
          align="center"
          justify="center"
          dir="column"
          h="full"
        >
          <ChakraImage
            src="/bg/hero.webp"
            layout="fill"
            opacity={0.2}
            objectFit="cover"
            priority
            quality="80"
          />

          <Flex alignItems="center" justifyContent="center" flexDir="column">
            <Box>
              <Heading
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
                opacity={0.9}
                background="linear-gradient(120deg,  rgba(243,147, 55,1), rgb(250, 112, 154) 100%)"
                backgroundRepeat="no-repeat"
                backgroundSize="100% 60%"
                backgroundPosition="0 59%"
                fontFamily="Montserrat"
                letterSpacing="tighter"
                fontSize={{ base: "1xl", md: "2xl" }}
                color="mainBlack"
                fontWeight="800"
              >
                full-stack developer
              </Heading>
            </Box>
            <VStack pos="absolute" bottom="50" px={2}>
              <ChakraLink
                to="skills"
                _hover={{ cursor: "pointer", color: "p2" }}
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
