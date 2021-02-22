import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react"
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
    <Heading
      color="bt3"
      mb={[2, 3]}
      fontSize={["xl", "2xl", "3xl"]}
      fontWeight="900"
    >
      {title}
    </Heading>

    {title === "Reddit Clone" ? (
      <RedditCloneIconsList />
    ) : (
      <QuickEatsIconsList />
    )}

    {description.map(p => (
      <Text
        fontSize={{ base: "xs", md: "sm" }}
        key={`paragraph-${p.text}`}
        my="2"
      >
        {p.text}
      </Text>
    ))}

    <Stack mt={3} dir="row" spacing={4} align="center">
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

      <Button
        colorScheme="twitter"
        leftIcon={<WebIcon />}
        variant="solid"
        as="a"
        href={webUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo
      </Button>
    </Stack>
  </Flex>
)

export default ProjectInfo
