import { chakra } from "@chakra-ui/react"

const SectionContainer: React.FC<{
  id: string
  children: React.ReactNode
  background?: string
}> = ({ id, children, background, ...props }) => (
  <chakra.section
    border="2px dotted red"
    minH="75vh"
    aria-label={`${id} Section`}
    bg={background}
    id={id}
    {...props}
  >
    {children}
  </chakra.section>
)

export default SectionContainer
