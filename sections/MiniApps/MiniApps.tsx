import { Box, Button, Flex, Grid, Img, Spacer, Text } from "@chakra-ui/react"
import { MiniAppCard } from "@common/index"
import data from "@configs/MiniApps/mini-apps"

const MiniAppsCards = () => (
  <Grid
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
  </Grid>
)

export default MiniAppsCards
