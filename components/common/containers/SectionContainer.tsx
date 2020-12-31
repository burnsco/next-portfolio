import { chakra } from "@chakra-ui/react"
import { ScrollContext } from "@common/scroll-sections/context"
import { useContext, useMemo } from "react"

const SectionContainer: React.FC<{
  id: string
  meta?: unknown
  children: React.ReactNode
  background?: string
}> = ({ id, children, background, meta, ...props }) => {
  const { registerRef } = useContext(ScrollContext)

  const ref = useMemo(() => registerRef({ id, meta }), [id, meta, registerRef])

  return (
    <chakra.section
      aria-label={`${id} Section`}
      bg={background}
      ref={ref}
      id={id}
      {...props}
    >
      {children}
    </chakra.section>
  )
}

export default SectionContainer
