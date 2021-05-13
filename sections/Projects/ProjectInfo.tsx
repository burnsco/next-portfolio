import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { IoLogoGithub } from "react-icons/io"

const RedditCloneIconsList = dynamic(
  () => import("@common/icons/RedditCloneIconsList")
)
const QuickEatsIconsList = dynamic(
  () => import("@common/icons/QuickEatsIconsList")
)

const MotionButton = motion(IconButton)

const ProjectInfo: React.FC<ProjectInfoType> = ({
  description,
  webUrl,
  gitUrl,
  title
}) => (
  <Box
    h="full"
    w="full"
    overflow="hidden"
    zIndex="-1"
    bgSize="cover"
    bgImage="url(/textures/boxygrey.svg)"
    bgRepeat="repeat-y"
  >
    <VStack spacing={2} p={[4, 5, 6]}>
      <HStack>
        <Heading
          lineHeight="2"
          fontWeight="900"
          letterSpacing="wide"
          color="#414a6b !important;"
          mb={[2, 3]}
          fontSize={["xl", "2xl", "3xl"]}
        >
          {title}
        </Heading>
      </HStack>
      <HStack>
        {title === "Reddit Clone" ? (
          <RedditCloneIconsList />
        ) : (
          <QuickEatsIconsList />
        )}
      </HStack>
      <Box p={4}>
        {description.map(p => (
          <Text
            fontWeight="300"
            lineHeight="tall"
            fontSize={{ base: "xs", md: "sm" }}
            key={`paragraph-${p.text}`}
            my="2"
          >
            {p.text}
          </Text>
        ))}
      </Box>
      <Flex p={6} maxW="md" w="full">
        <Icon as={IoLogoGithub} boxSize={12} />
        <Spacer />
        <Button
          px={5}
          size="lg"
          variant="outline"
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

export default ProjectInfo
