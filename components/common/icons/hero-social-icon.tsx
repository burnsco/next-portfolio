import { Box, Icon, Tooltip, VStack } from "@chakra-ui/react"
import CustomEmailIcon from "@common/icons/email-icon"
import AnimatedTelegramIcon from "@common/icons/telegram-icon"
import { NextChakraLink } from "@common/index"
import { socials } from "@configs/site-config/socials"
import { motion } from "framer-motion"
import GitIcon from "./git-icon"

const MotionHoverBox = motion(Box)

const HeroSocialIcon = () => (
  <VStack pos="relative" h="100%" w="40px" justify="center" align="center">
    {socials.map(item => (
      <Tooltip
        hasArrow
        bg="gray.200"
        placement="auto"
        key={`Social-${item.title}`}
        color="black"
        label={item.title}
        aria-label={item.title}
        shouldWrapChildren
      >
        <VStack
          as={NextChakraLink}
          height="2em"
          width="2em"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="#343436"
          isExternal
          aria-label={item.title}
          href={item.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {item.iconName === "email" && (
            <MotionHoverBox whileHover={{ scale: 1.1, rotate: 12 }}>
              <Icon opacity={0.9} w={5} h={5} as={CustomEmailIcon} />
            </MotionHoverBox>
          )}
          {item.iconName === "github" && (
            <MotionHoverBox whileHover={{ scale: 1.1, rotate: 12 }}>
              <Icon w={5} h={5} opacity={0.9} as={GitIcon} />
            </MotionHoverBox>
          )}
          {item.iconName === "telegram" && (
            <MotionHoverBox whileHover={{ scale: 1.1, rotate: 12 }}>
              <Icon w={5} h={5} opacity={0.9} as={AnimatedTelegramIcon} />
            </MotionHoverBox>
          )}
        </VStack>
      </Tooltip>
    ))}
  </VStack>
)

export default HeroSocialIcon
