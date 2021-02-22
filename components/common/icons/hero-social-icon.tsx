import { Flex, Icon, Tooltip } from "@chakra-ui/react"
import CustomEmailIcon from "@common/icons/email-icon"
import IcqIcon from "@common/icons/icq-icon"
import AnimatedTelegramIcon from "@common/icons/telegram-icon"
import { NextChakraLink } from "@common/index"
import data from "@configs/site-config/socials"
import { motion } from "framer-motion"
import { SiGithub } from "react-icons/si"

const HeroSocialIcon = () => (
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
        <motion.div whileHover={{ scale: 1.1, y: -5 }}>
          <NextChakraLink
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
            {item.iconName === "email" && (
              <Icon w={6} h={6} as={CustomEmailIcon} />
            )}
            {item.iconName === "github" && <Icon w={6} h={6} as={SiGithub} />}
            {item.iconName === "telegram" && (
              <Icon w={6} h={6} as={AnimatedTelegramIcon} />
            )}
            {item.iconName === "icq" && <Icon w={6} h={6} as={IcqIcon} />}
          </NextChakraLink>
        </motion.div>
      </Tooltip>
    ))}
  </Flex>
)

export default HeroSocialIcon
