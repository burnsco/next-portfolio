type RefsRegister = {
  [x: string]: RefObject<HTMLElement>
}

type Meta = {
  [id: string]: unknown
}

type ScrollContextType = {
  registerRef: ({ id: string, meta: unknown }) => RefObject<HTMLElement> | null
  scrollTo: (section: string) => void
  refs: RefsRegister
  meta: Meta
  selected: string
}

type MiniAppsType = {
  miniApps: {
    title: string
    section: string
    webUrl: string
    gitUrl: string
    excerpt: string
    image: string
  }[]
}

type ProjectInfoType = {
  description: {
    text: string
  }[]
  webUrl: string
  gitUrl: string
  title: string
  builtWith: {
    title: string
    iconName: string
  }[]
}

type DeveloperInfoType = {
  devInfo: {
    title: string
    iconName: string
    excerpt: {
      text: string
    }[]
  }
}

type MySkillsType = {
  mySkills: {
    title: string
    iconName: string
    skills: {
      title: string
    }[]
  }[]
}
