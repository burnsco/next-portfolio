import {
  Button,
  chakra,
  Flex,
  Heading,
  HStack,
  Stack,
  Text
} from "@chakra-ui/react"
import GitButtonIcon from "@common/icons/socials/github-icon"
import WebIcon from "@common/icons/socials/web-icon"
import RenderIcon from "@common/render-icon/RenderIcon"

const ProjectInfo: React.FC<ProjectInfoType> = ({
  description,
  webUrl,
  gitUrl,
  title,
  builtWith
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

    <HStack spacing={4}>
      {builtWith.map(item => (
        <chakra.span key={`BuiltWith-${item.title}`}>
          <RenderIcon iconname={item.iconName} height="1.2em" width="1.2em" />
        </chakra.span>
      ))}
    </HStack>

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
