import { HStack, Icon } from "@chakra-ui/react"
import {
  SiApollographql,
  SiBabel,
  SiDigitalocean,
  SiDocker,
  SiGraphql,
  SiLinux,
  SiNodeDotJs,
  SiReact,
  SiStyledComponents,
  SiTypescript,
  SiWebpack
} from "react-icons/si"

const RedditCloneIconsList = () => (
  <HStack spacing={4}>
    <Icon as={SiReact} />
    <Icon as={SiStyledComponents} boxSize={6} />
    <Icon as={SiWebpack} />
    <Icon as={SiApollographql} />
    <Icon as={SiNodeDotJs} />
    <Icon as={SiGraphql} />
    <Icon as={SiDocker} />
    <Icon as={SiLinux} />
    <Icon as={SiDigitalocean} />
    <Icon as={SiTypescript} />
    <Icon as={SiBabel} />
  </HStack>
)

export default RedditCloneIconsList
