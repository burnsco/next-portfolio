import { Box } from "@chakra-ui/react"
import { Container } from "@common/index"

const PageContainer: React.FC<{
  children: React.ReactNode
  bg: string
}> = ({ children, bg }) => (
  <>
    <Container className="main-content" background={bg}>
      <Box display={{ base: "block", md: "flex" }}>
        <div style={{ flex: 1 }}>
          <Box id="content" pt={3} px={5} mx="auto" maxW="80rem" minH="95vh">
            {children}
          </Box>
        </div>
      </Box>
    </Container>
  </>
)

export default PageContainer
