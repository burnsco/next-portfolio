import { Flex, HStack, Icon } from "@chakra-ui/react"
import CustomEmailIcon from "@common/icons/email-icon"
import AnimatedTelegramIcon from "@common/icons/telegram-icon"
import { socials } from "@configs/site-config/socials"
import { motion } from "framer-motion"
import GitIcon from "./git-icon"

const MotionHoverBox = motion(Flex)

const HeroSocialIconHor = () => (
  <>
    {socials.map(item => (
      <HStack
        key={`social-bottom-${item.title}`}
        w="full"
        display={{ base: "block", sm: "none" }}
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
      </HStack>
    ))}
  </>
)

export default HeroSocialIconHor
