import { Box, ButtonGroup, Text, VStack } from "@chakra-ui/react"
import CustomButton from "@common/buttons/customButton"

export default function ProjectInfo({
  description,
  webUrl,
  gitUrl
}: ProjectDetailsType) {
  return (
    <Box h="full" w="full" p={{ base: 2, lg: 4 }}>
      <VStack>
        <Box mx="auto" maxW="960px">
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
        {/* <Flex p={6} maxW="md" w="full">
          <NextChakraLink
            href={gitUrl}
            target="_blank"
            rel="noopender noreferrer"
          >
            Source <Icon as={CustomGithubIcon} boxSize={12} />
          </NextChakraLink>
          <Spacer />
          <Button
            href={webUrl}
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            colorScheme="twitter"
            variant="solid"
          >
            Check it out
          </Button>
        </Flex> */}


        <ButtonGroup>
          <CustomButton title="Source" href={gitUrl} />
          <CustomButton title="Demo" href={webUrl} />
        </ButtonGroup>

      </VStack>
    </Box>
  )
}
