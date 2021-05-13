import {
  Box,
  Button,
  Flex,
  Grid,
  Img,
  ScaleFade,
  Spacer,
  Text
} from "@chakra-ui/react"
import { MiniAppCard } from "@common/index"
import data from "@configs/MiniApps/mini-apps"
import { AnimateSharedLayout } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function MiniAppsCards() {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    trackVisibility: true,
    delay: 350
  })

  return (
    <div ref={ref}>
      {inView ? (
        <Grid
          py={8}
          gap={[2, 4]}
          gridTemplateColumns="repeat(auto-fit, minmax(180px, 1fr))"
        >
          <AnimateSharedLayout type="crossfade">
            {data.map(app => (
              <ScaleFade
                key={`mini-apps-${app.title}`}
                initialScale={app.id}
                in
              >
                <MiniAppCard>
                  <Text
                    bg="l3"
                    color="p5"
                    fontWeight="semibold"
                    fontSize="md"
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
                    <Box
                      fontSize={{ base: "xs", md: "sm" }}
                      py={2}
                      opacity={0.8}
                    >
                      {app.excerpt}
                    </Box>
                    <Spacer />

                    <Flex>
                      <Button
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
                        color="white"
                        colorScheme="orange"
                        href={app.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </Button>
                    </Flex>
                  </Flex>
                </MiniAppCard>
              </ScaleFade>
            ))}
          </AnimateSharedLayout>
        </Grid>
      ) : null}
    </div>
  )
}
