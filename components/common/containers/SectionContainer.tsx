import { chakra } from "@chakra-ui/react"

const SectionContainer: React.FC<{
  id: string
  children: React.ReactNode
}> = ({ id, children, ...props }) => (
  <chakra.section minH="95vh" aria-label={`${id} Section`} id={id} {...props}>
    {children}
  </chakra.section>
)

export default SectionContainer
