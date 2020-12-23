import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react"
import RenderIcon from "@components/common/icons/socials"
import { ProjectInfoType } from "@data/types/projects"

const ProjectInfo: React.FC<ProjectInfoType> = ({
  description,
  webUrl,
  gitUrl,
  title,
  builtWith
}) => (
  <Flex
    sx={{
      flexDirection: "column",
      fontSize: [0, 1]
    }}
  >
    <Flex sx={{ my: 2 }}>
      <Heading
        sx={{
          color: "black",
          fontWeight: "800"
        }}
      >
        <Text fontSize="xs" color="oliveBlack">
          {title}
        </Text>
      </Heading>
    </Flex>
    <Flex my={[1, 2]} flexWrap="wrap">
      {builtWith.map((item, i) => (
        <Text
          key={`BuiltWith-${item.title}-${i}`}
          sx={{ ml: 2, fontSize: [0, 1, 2, 3] }}
        >
          <RenderIcon iconname={item.iconName} />
        </Text>
      ))}
    </Flex>
    {description.map(p => (
      <Text key={`paragraph-${p.text}`} my="2">
        {p.text}
      </Text>
    ))}
    <Flex
      sx={{
        mt: 3,
        justifyContent: "space-evenly"
      }}
    >
      <Link
        href={gitUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "background" }}
      >
        <Button
          _hover={{
            backgroundColor: "#e7e7e7"
          }}
        >
          Source
          <RenderIcon iconname="gitAlt" />
        </Button>
      </Link>
      <Link
        href={webUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "background" }}
      >
        <Button bg="#e7e7e7" border="2px solid #e7e7e7">
          Demo
          <RenderIcon iconname="webIcon" />
        </Button>
      </Link>
    </Flex>
  </Flex>
)

export default ProjectInfo
