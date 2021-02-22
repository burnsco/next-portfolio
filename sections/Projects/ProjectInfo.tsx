import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text
} from "@chakra-ui/react"
import GitButtonIcon from "@common/icons/github-icon"
import WebIcon from "@common/icons/web-icon"
import dynamic from "next/dynamic"

const RedditCloneIconsList = dynamic(
  () => import("@common/icons/RedditCloneIconsList")
)
const QuickEatsIconsList = dynamic(
  () => import("@common/icons/QuickEatsIconsList")
)

const ProjectInfo: React.FC<ProjectInfoType> = ({
  description,
  webUrl,
  gitUrl,
  title
}) => (
  <Flex flexDirection="column" p={[4, 5, 6]}>
    <HStack>
      <Text>Title : </Text>
      <Heading
        color="textMuted"
        mb={[2, 3]}
        fontSize={["xl", "2xl", "3xl"]}
        fontWeight="900"
      >
        {title}
      </Heading>
    </HStack>
    <HStack>
      <Text>Tech : </Text>
      {title === "Reddit Clone" ? (
        <RedditCloneIconsList />
      ) : (
        <QuickEatsIconsList />
      )}
    </HStack>
    <Box p={4}>
      {description.map(p => (
        <Text
          fontSize={{ base: "xs", md: "sm" }}
          key={`paragraph-${p.text}`}
          my="2"
        >
          {p.text}
        </Text>
      ))}
    </Box>
    <Flex p={6} maxW="md" w="full">
      <Button
        colorScheme="facebook"
        leftIcon={<GitButtonIcon />}
        variant="outline"
        as="a"
        href={gitUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </Button>
      <Spacer />
      <Button
        colorScheme="purple"
        leftIcon={<WebIcon />}
        variant="solid"
        as="a"
        href={webUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo
      </Button>
    </Flex>
  </Flex>
)

export default ProjectInfo
