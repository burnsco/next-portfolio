import siteConfig from "@configs/site/site-config"
import { NextSeo } from "next-seo"

const SEO: React.FC<{ title: string; description: string }> = ({
  title,
  description
}) => (
  <NextSeo
    title={title}
    description={description}
    titleTemplate={siteConfig.seo.titleTemplate}
  />
)

export default SEO
