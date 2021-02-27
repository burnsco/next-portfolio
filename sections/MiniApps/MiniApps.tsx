import { Box, Button, Flex, Grid, Img, Spacer, Text } from "@chakra-ui/react"
import { MiniAppCard } from "@common/index"
import data from "@configs/MiniApps/mini-apps"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Test = motion(Grid)

const MiniAppsCards = () => {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    trackVisibility: true,
    delay: 250
  })

  return (
    <div ref={ref}>
      {inView ? (
        <Test
          animate={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
          py={8}
          gap={[2, 4]}
          gridTemplateColumns="repeat(auto-fit, minmax(180px, 1fr))"
        >
          {data.map(app => (
            <MiniAppCard key={`mini-apps-${app.title}`}>
              <Text
                fontWeight="bold"
                fontSize="xl"
                opacity={0.7}
                p={1}
                textAlign="center"
              >
                {app.title}
              </Text>

              <Img
                w="100%"
                h="140px"
                src={app.image}
                alt={`mini app ${app.title}`}
                objectFit="cover"
              />
              <Flex flexDir="column" h="full" p={3}>
                <Box fontSize={{ base: "xs", md: "sm" }} py={6} opacity={0.8}>
                  {app.excerpt}
                </Box>
                <Spacer />

                <Flex>
                  <Button
                    variant="outline"
                    as="a"
                    href={app.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </Button>
                  <Spacer />
                  <Button
                    as="a"
                    colorScheme="whatsapp"
                    href={app.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </Button>
                </Flex>
              </Flex>
            </MiniAppCard>
          ))}
        </Test>
      ) : null}
    </div>
  )
}

export default MiniAppsCards
