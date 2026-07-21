export type ProjectStatus = 'Live' | 'In Progress' | 'Private'

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  accent: string
  categories: string[]
  technologies: string[]
  status: ProjectStatus
  overview: string
  problem: string
  solution: string
  architecture: string
  features: string[]
  screenshots: { src: string; alt: string }[]
  businessImpact: string
  challenges: string
  lessonsLearned: string
  liveUrl?: string
  githubUrl?: string
}
