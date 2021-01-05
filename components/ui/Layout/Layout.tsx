import { SectionContainer } from "@common/index"
import PropTypes from "prop-types"
import PageContainer from "./PageContainer"

const Layout: React.FC<{
  children: React.ReactNode
  id: string
  background: string
}> = ({ children, id, background }) => (
  <PageContainer background={background}>
    <SectionContainer id={id}>{children}</SectionContainer>
  </PageContainer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
