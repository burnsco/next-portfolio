import { Box, Flex, HStack, Icon, Tooltip } from "@chakra-ui/react"
import CustomEmailIcon from "@common/icons/email-icon"
import AnimatedTelegramIcon from "@common/icons/telegram-icon"
import { NextChakraLink } from "@common/index"
import data from "@configs/site-config/socials"
import { motion } from "framer-motion"
import { SiGithub } from "react-icons/si"

const MotionHoverBox = motion(Box)

const HeroSocialIcon = () => (
  <Flex mt={4} w="12em" justify="space-evenly">
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
        <HStack
          as={NextChakraLink}
          height="2.5em"
          width="2.5em"
          borderStyle="dotted"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="#fff"
          borderRadius={4}
          isExternal
          aria-label={item.title}
          href={item.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {item.iconName === "email" && (
            <MotionHoverBox whileHover={{ scale: 1.1, rotate: 90 }}>
              <Icon w={7} h={7} as={CustomEmailIcon} />
            </MotionHoverBox>
          )}
          {item.iconName === "github" && (
            <MotionHoverBox whileHover={{ scale: 1.1, rotate: -90 }}>
              <Icon w={7} h={7} as={SiGithub} />
            </MotionHoverBox>
          )}
          {item.iconName === "telegram" && (
            <MotionHoverBox whileHover={{ scale: 1.1, rotate: 90 }}>
              <Icon w={7} h={7} as={AnimatedTelegramIcon} />
            </MotionHoverBox>
          )}
        </HStack>
      </Tooltip>
    ))}
  </Flex>
)

export default HeroSocialIcon
