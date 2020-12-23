const baseUrl = "https://github.com/burnsco/next-portfolio"

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Corey Burns. All Rights Reserved.`,
  author: {
    name: "Corey Burns",
    github: "https://github.com/burnsco",
    email: "coreyburns@outlook.com"
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/develop/website`,
    blobUrl: `${baseUrl}/blob/develop`
  },
  seo: {
    title: "Corey Burns",
    titleTemplate: "%s - Corey Burns",
    description: "Full-Stack Web Developer.",
    siteUrl: "https://coreyburns.dev"
  }
}

export default siteConfig
