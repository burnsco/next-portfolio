import {
  Box,
  Button,
  Grid,
  HStack,
  Img,
  SlideFade,
  Text,
  useDisclosure
} from "@chakra-ui/react"
import { MiniAppCard } from "@common/index"
import data from "@configs/MiniApps/mini-apps"

const transition = { duration: 0.5, ease: "easeInOut", staggerChildren: 0.1 }

const postPreviewVariants = {
  initial: { x: "100%", opacity: 0 },
  enter: { x: 0, opacity: 1, transition },
  exit: { x: "-100%", opacity: 0, transition }
}

const MiniAppsCards = () => {
  const { isOpen } = useDisclosure()
  return (
    <SlideFade
      variants={postPreviewVariants}
      in={!isOpen}
      unmountOnExit={!isOpen}
    >
      <Grid gap={2} gridTemplateColumns="repeat(auto-fit, minmax(180px, 1fr))">
        {data.map(app => (
          <MiniAppCard key={`mini-apps-${app.title}`}>
            <Text fontWeight="bold" p={1} textAlign="center">
              {app.title}
            </Text>

            <Img
              w="100%"
              h="140px"
              src={app.image}
              alt={`mini app ${app.title}`}
              objectFit="cover"
            />

            <Box p={4}>
              <Text fontSize={{ base: "xs", md: "sm" }} opacity={0.8}>
                {app.excerpt}
              </Text>

              <HStack spacing={4} mt={1}>
                <Button
                  variant="outline"
                  as="a"
                  href={app.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </Button>

                <Button
                  as="a"
                  href={app.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Button>
              </HStack>
            </Box>
          </MiniAppCard>
        ))}
      </Grid>
    </SlideFade>
  )
}

export default MiniAppsCards
