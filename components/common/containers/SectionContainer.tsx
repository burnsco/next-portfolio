import { chakra } from "@chakra-ui/react"

const SectionContainer: React.FC<{
  id: string
  children: React.ReactNode
}> = ({ id, children, ...props }) => (
  <chakra.section
    px={{ base: "0em", xs: "2.5em", md: "3em" }}
    minH="95vh"
    aria-label={`${id} Section`}
    id={id}
    {...props}
  >
    {children}
  </chakra.section>
)

export default SectionContainer
