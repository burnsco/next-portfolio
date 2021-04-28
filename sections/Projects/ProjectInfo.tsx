import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  Text
} from "@chakra-ui/react"
import WebIcon from "@common/icons/web-icon"
import dynamic from "next/dynamic"
import { IoMdArrowDropright } from "react-icons/io"

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
      <Text>
        Title <Icon as={IoMdArrowDropright} />{" "}
      </Text>
      <Heading
        color="textMuted"
        mb={[2, 3]}
        fontSize={["xl", "2xl", "3xl"]}
        fontWeight="700"
      >
        {title}
      </Heading>
    </HStack>
    <HStack>
      <Text>
        Tech <Icon as={IoMdArrowDropright} />{" "}
      </Text>
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
        size="lg"
        colorScheme="green"
        leftIcon={<WebIcon />}
        variant="solid"
        as="a"
        href={gitUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </Button>
      <Spacer />
      <Button
        size="lg"
        colorScheme="green"
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
