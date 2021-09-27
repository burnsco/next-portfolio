import { HStack } from "@chakra-ui/react"
import ApolloIcon from "./apollo-graphql-icon"
import BabelIcon from "./babel-icon"
import DigitalOceanIcon from "./digital-ocean-icon"
import DockerIcon from "./docker-icon"
import SiGraphqlIcon from "./graphql-icon2"
import SiLinuxIcon from "./linux2-icon"
import NodeJsIcon from "./nodejs-icon"
import SiReactIcon from "./reactIcon"
import StyledIcon from "./styled-icon"
import TsIcon from "./TS-Icon"
import WebPackIcon from "./webpack-icon"

const RedditCloneIconsList = () => (
  <HStack spacing={4}>
    <SiReactIcon />
    <StyledIcon boxSize={6} />
    <WebPackIcon />
    <ApolloIcon />
    <NodeJsIcon />
    <SiGraphqlIcon />
    <DockerIcon />
    <SiLinuxIcon />
    <DigitalOceanIcon />
    <TsIcon />
    <BabelIcon />
  </HStack>
)

export default RedditCloneIconsList
