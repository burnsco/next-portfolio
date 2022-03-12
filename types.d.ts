type MainDataType = {
  data: {
    skills: SkillsType
    about: AboutType
    miniapps: MiniAppsType
    projects: ProjectsType
    sections: SectionType
  }
}

type SectionType = {
  sections: {
    id: string
    href: string
  }[]
}

type ProjectsType = {
  projects: {
    title: string
    webUrl: string
    gitUrl: string
    description: {
      text: string
    }[]
    videos: string
  }[]
}
type Projects2Type = {
  projects: {
    title: string
    webUrl: string
    gitUrl: string
    description: {
      text: string
    }[]
    videos: string
  }[]
}

type SkillsType = {
  developerInfo: {
    title: string
    iconName: string
    excerpt: {
      text: string
    }[]
  }
  mySkills: {
    title: string
    iconName: string
    skills: { title: string }[]
  }[]
}

type FactsType = {
  title: string
  iconName: string
  facts: {
    title: string
  }[]
}

type ProjectDetailsType = {
  title: string
  webUrl: string
  gitUrl: string
  description: {
    text: string
  }[]
}

type AboutType = {
  aboutMe: {
    title: string
    iconName: string
    excerpt: {
      text: string
    }[]
  }
  randomFacts: FactsType
}

type MiniAppsType = {
  miniapps: {
    id: number
    title: string
    section: string
    webUrl: string
    gitUrl: string
    excerpt: string
    image: string
  }[]
}
