import { Box } from "@chakra-ui/react"
import { Container } from "@common/index"
import { Navbar } from "@ui/index"
import PageTransition from "./PageTransition"

const PageContainer: React.FC<{
  children: React.ReactNode
  background: string
}> = ({ children, background }) => (
  <>
    <Navbar />
    <Container bg={background} as="main" className="main-content">
      <Box display={{ base: "block", md: "flex" }}>
        <div style={{ flex: 1 }}>
          <Box
            id="content"
            pt={3}
            px={5}
            mt="4.5rem"
            mx="auto"
            maxW="60rem"
            minH="76vh"
          >
            <PageTransition>{children}</PageTransition>
          </Box>
        </div>
      </Box>
    </Container>
  </>
)

export default PageContainer
