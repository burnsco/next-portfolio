import * as chakraComponents from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "components/mdx-components"
import PageContainer from "components/page-container"

export function MDXLayoutProvider(props: any) {
  return (
    <MDXProvider components={{ ...chakraComponents, ...MDXComponents }}>
      {props.children}
    </MDXProvider>
  )
}

interface MDXLayoutProps {
  frontmatter: any
  children: React.ReactNode
}

function MDXLayout(props: MDXLayoutProps) {
  const { frontmatter, children } = props

  return (
    <MDXLayoutProvider>
      <PageContainer frontmatter={frontmatter}>{children}</PageContainer>
    </MDXLayoutProvider>
  )
}

export default MDXLayout
