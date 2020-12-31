import { Button, chakra, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import GitButtonIcon from "@common/icons/socials/github-icon"
import WebIcon from "@common/icons/socials/web-icon"
import RenderIcon from "@common/render-icon/RenderIcon"
import { ProjectInfoType } from "configs/types/projects"

const ProjectInfo: React.FC<ProjectInfoType> = ({
  description,
  webUrl,
  gitUrl,
  title,
  builtWith
}) => (
  <Flex flexDirection="column" p={[3, 4, 5]}>
    <Heading as="h3" color="black" fontWeight="800">
      {title}
    </Heading>

    <Flex p={[2, 3]} my={[1, 2]} flexWrap="wrap">
      {builtWith.map(item => (
        <chakra.span
          key={`BuiltWith-${item.title}`}
          ml={2}
          fontSize={{ base: "xs", md: "sm" }}
        >
          <RenderIcon iconname={item.iconName} height="1.2em" width="1.2em" />
        </chakra.span>
      ))}
    </Flex>

    {description.map(p => (
      <Text key={`paragraph-${p.text}`} my="2">
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
