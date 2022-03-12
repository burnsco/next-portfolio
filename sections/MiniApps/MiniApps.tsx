import {
  Box,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  Img,
  ScaleFade,
  Text
} from "@chakra-ui/react"
import CustomButton from "@common/buttons/customButton"
import { MiniAppCard } from "@common/index"
import { AnimateSharedLayout } from "framer-motion"
import React from "react"
import { useInView } from "react-intersection-observer"

export default function MiniAppsCards({ miniapps }: MiniAppsType) {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    trackVisibility: true,
    delay: 350
  })

  return (
    <div ref={ref}>
      {inView ? (
        <Box p={[1, 6]}>
          <Grid
            py={8}
            gap={[2, 4]}
            gridTemplateColumns="repeat(auto-fit, minmax(180px, 1fr))"
          >
            <AnimateSharedLayout>
              {miniapps.map((app: any) => (
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
                      h="180px"
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

                      <Center>
                        <ButtonGroup w="full">
                          <CustomButton
                            as="a"
                            title="Source"
                            href={app.gitUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          />

                          <CustomButton
                            as="a"
                            href={app.webUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Demo"
                          />
                        </ButtonGroup>
                      </Center>
                    </Flex>
                  </MiniAppCard>
                </ScaleFade>
              ))}
            </AnimateSharedLayout>
          </Grid>
        </Box>
      ) : null}
    </div>
  )
}
