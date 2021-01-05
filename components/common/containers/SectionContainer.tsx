import { chakra } from "@chakra-ui/react"
import { Container } from "next/app"

const SectionContainer: React.FC<{
  id: string
  children: React.ReactNode
  background?: string
}> = ({ id, children, background, ...props }) => (
  <Container as="main">
    <chakra.section
      aria-label={`${id} Section`}
      bg={background}
      id={id}
      {...props}
    >
      {children}
    </chakra.section>
  </Container>
)

export default SectionContainer
