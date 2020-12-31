import { chakra } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { useContext, useMemo } from "react"
import { ScrollContext } from "./context"

const SectionContainer: React.FC<{
  id: string
  meta?: unknown
  children: React.ReactNode
  background?: string
}> = ({ id, children, background, meta, ...props }) => {
  const { registerRef } = useContext(ScrollContext)
  const ref = useMemo(() => registerRef({ id, meta }), [id, meta, registerRef])

  return (
    <chakra.section bg={background} ref={ref} id={id} {...props}>
      {children}
    </chakra.section>
  )
}

SectionContainer.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default SectionContainer
