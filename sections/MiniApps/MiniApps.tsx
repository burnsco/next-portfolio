import {
  Box,
  ButtonGroup, Center, Grid,
  GridItem,
  Img,
  ScaleFade,
  Text
} from "@chakra-ui/react"
import CustomButton from "@common/buttons/customButton"
import { AnimateSharedLayout } from "framer-motion"
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
          <Grid
            gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            py={8}
            px="4em"
            margin="1em auto"
            gap="6"
          >
            <AnimateSharedLayout>
              {miniapps.map((app: any) => (
                <ScaleFade
                  key={`mini-apps-${app.title}`}
                  initialScale={app.id}
                  in
                >
                  <GridItem
                      borderRadius="md"
                      boxShadow="md"
                      border="2px solid purple"
                      gridTemplateRows="max-content 180px 1fr"
                  >
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
                      h="200px"
                      maxW="100%"
                      src={app.image}
                      alt={`mini app ${app.title}`}
                      objectFit="cover"
                    />
                      <Box padding="1">
                      <Text
                        border="2px solid blue"
                        fontSize={{ base: "xs", md: "sm" }}
                        p="4"
                        opacity={0.8}
                      >
                        {app.excerpt}
                      </Text>


                    <Center w="full" py="2">
                        <ButtonGroup gap="4" border="2px solid red">
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
                        </Box>



                  </GridItem>
                </ScaleFade>
              ))}
            </AnimateSharedLayout>
          </Grid>

      ) : null}
    </div>
  )
}
