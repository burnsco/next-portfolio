import { Flex, Tooltip } from "@chakra-ui/react"
import { NextChakraLink } from "@common/index"
import RenderIcon from "@common/render-icon/RenderIcon"
import data from "configs/socials"

const HeroSocialIcons = () => (
  <Flex mt={2} w="12em" justify="space-evenly">
    {data.map(item => (
      <Tooltip
        hasArrow
        bg="gray.200"
        key={`Social-${item.title}`}
        color="black"
        label={item.title}
        aria-label={item.title}
        shouldWrapChildren
      >
        <NextChakraLink
          _hover={{
            opacity: 0.8,
            background: "#666;"
          }}
          transition="all .5s"
          height="2.5em"
          width="2.5em"
          borderStyle="solid"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px"
          color="#fff"
          borderColor="#666"
          background="#3b3d42"
          borderRadius={4}
          isExternal
          aria-label={item.title}
          href={item.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          <RenderIcon
            iconname={item.iconName}
            width="1.5em"
            height="1.5em"
            color="white"
          />
        </NextChakraLink>
      </Tooltip>
    ))}
  </Flex>
)

export default HeroSocialIcons
