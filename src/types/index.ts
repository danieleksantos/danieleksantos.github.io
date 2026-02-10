export interface Project {
  id: number
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  image: string
  github: string
  demo: string
  featured?: boolean
  category: 'fullstack' | 'frontend' | 'backend'
}

export interface Skill {
  name: string
  level: number
  icon?: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface ContactMethod {
  label: string
  value: string
  link: string
  icon: string
}
