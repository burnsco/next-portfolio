import { chakra } from "@chakra-ui/react"

const SectionContainer: React.FC<{
  id: string
  children: React.ReactNode
  background?: string
}> = ({ id, children, background, ...props }) => (
  <chakra.section
    minH="100vh"
    border="2px solid red"
    aria-label={`${id} Section`}
    bg={background}
    id={id}
    {...props}
  >
    {children}
  </chakra.section>
)

export default SectionContainer
