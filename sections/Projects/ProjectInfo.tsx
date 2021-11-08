import { Box, Button, Flex, Icon, Spacer, Text, VStack } from "@chakra-ui/react"
import CustomGithubIcon from "@common/icons/github-icon"
import { NextChakraLink } from "@common/index"

export default function ProjectInfo({
  description,
  webUrl,
  gitUrl
}: ProjectDetailsType) {
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
            <Icon as={CustomGithubIcon} boxSize={12} />
          </NextChakraLink>
          <Spacer />
          <Button
            href={webUrl}
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            colorScheme="teal"
            variant="solid"
          >
            Button
          </Button>
        </Flex>
      </VStack>
    </Box>
  )
}
