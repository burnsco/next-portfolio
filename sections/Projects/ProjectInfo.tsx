import { Box, Button, Flex, Icon, Spacer, Text, VStack } from "@chakra-ui/react"
import { NextChakraLink } from "@common/index"
import { IoLogoGithub } from "react-icons/io"

export default function ProjectInfo({
  description,
  webUrl,
  gitUrl
}: ProjectInfoType) {
  return (
    <Box h="full" w="full">
      <VStack spacing={2} p={[0, 4, 6]}>
        <Box p={4}>
          {description.map(p => (
            <Text
              fontWeight="400"
              color="#606060"
              opacity="1"
              transform="matrix(1,0,0,1,0,0)"
              fontFamily="Lato"
              fontSize={{ base: "xs", md: "sm" }}
              key={`paragraph-${p.text}`}
              my="2"
            >
              {p.text}
            </Text>
          ))}
        </Box>
        <Flex p={6} maxW="md" w="full">
          <NextChakraLink
            href={gitUrl}
            target="_blank"
            rel="noopender noreferrer"
          >
            <Icon as={IoLogoGithub} boxSize={12} />
          </NextChakraLink>
          <Spacer />
          <Button
            px={5}
            size="lg"
            colorScheme="red"
            variant="solid"
            as="a"
            href={webUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out!
          </Button>
        </Flex>
      </VStack>
    </Box>
  )
}
