import { chakra } from "@chakra-ui/react"

const SectionContainer: React.FC<{
  id: string
  children: React.ReactNode
  background?: string
}> = ({ id, children, background, ...props }) => (
  <main>
    <chakra.section
      aria-label={`${id} Section`}
      bg={background}
      id={id}
      {...props}
    >
      {children}
    </chakra.section>
  </main>
)

export default SectionContainer
