import { ArrowLeft, ArrowUpRight, GitFork } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import projectsJson from '../data/projects.json'
import type { Project } from '../types'
import { StatusBadge } from '../components/StatusBadge'
import { NotFound } from './NotFound'
import { assetUrl } from '../utils/assetUrl'

const projects = projectsJson as Project[]
const sections = (p: Project) => [
  ['Problem', p.problem], ['Solution', p.solution], ['Architecture', p.architecture],
  ['Business Impact', p.businessImpact], ['Challenges', p.challenges], ['Lessons Learned', p.lessonsLearned]
]

export function ProjectPage() {
  const { projectId } = useParams()
  const project = projects.find(item => item.id === projectId)
  if (!project) return <NotFound />
  return <article className="container-page pt-10 sm:pt-16">
    <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"><ArrowLeft size={15}/>All projects</Link>
    <header className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
      <div><div className="flex flex-wrap items-center gap-3"><StatusBadge status={project.status}/>{project.categories.map(c=><span className="text-xs text-zinc-500" key={c}>{c}</span>)}</div><h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{project.name}</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">{project.tagline}</p></div>
      {(project.liveUrl || project.githubUrl) && <div className="flex flex-wrap gap-3">{project.liveUrl && <a className="button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={16}/></a>}{project.githubUrl && <a className="button-secondary" href={project.githubUrl} target="_blank" rel="noreferrer"><GitFork size={16}/>GitHub</a>}</div>}
    </header>
    <div className="relative mt-12 aspect-[16/8] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 sm:mt-16"><div className="absolute inset-0 opacity-25" style={{background:`radial-gradient(circle at 60% 30%, ${project.accent}, transparent 50%)`}}/><img src={assetUrl(project.image)} alt={`${project.name} product interface`} className="relative h-full w-full object-cover"/></div>
    <div className="mx-auto mt-16 max-w-4xl sm:mt-24">
      <section className="grid gap-6 border-b border-white/[0.08] pb-14 sm:grid-cols-[180px_1fr]"><h2 className="text-sm font-semibold">Overview</h2><p className="text-lg leading-8 text-zinc-400">{project.overview}</p></section>
      {sections(project).slice(0,3).map(([title,body]) => <section key={title} className="grid gap-5 border-b border-white/[0.08] py-12 sm:grid-cols-[180px_1fr]"><h2 className="text-sm font-semibold">{title}</h2><p className="leading-7 text-zinc-400">{body}</p></section>)}
      <section className="grid gap-6 border-b border-white/[0.08] py-12 sm:grid-cols-[180px_1fr]"><h2 className="text-sm font-semibold">Technologies Used</h2><div className="flex flex-wrap gap-2">{project.technologies.map(t=><span className="badge" key={t}>{t}</span>)}</div></section>
      <section className="grid gap-6 border-b border-white/[0.08] py-12 sm:grid-cols-[180px_1fr]"><h2 className="text-sm font-semibold">Features</h2><ul className="grid gap-3 sm:grid-cols-2">{project.features.map(f=><li key={f} className="surface rounded-lg px-4 py-3 text-sm text-zinc-300">{f}</li>)}</ul></section>
    </div>
    <section className="mt-16 sm:mt-24"><p className="eyebrow">Screenshots</p><h2 className="mt-2 text-2xl font-semibold">Inside the product</h2><div className="mt-7 grid gap-5 md:grid-cols-2">{project.screenshots.map((shot,i)=><figure key={`${shot.src}-${i}`} className="overflow-hidden rounded-xl border border-white/[0.08] bg-panel"><img src={assetUrl(shot.src)} alt={shot.alt} loading="lazy" className="aspect-[16/10] w-full object-cover"/><figcaption className="border-t border-white/[0.07] px-4 py-3 text-xs text-zinc-500">{shot.alt}</figcaption></figure>)}</div></section>
    <div className="mx-auto mt-16 max-w-4xl sm:mt-24">{sections(project).slice(3).map(([title,body]) => <section key={title} className="grid gap-5 border-b border-white/[0.08] py-12 sm:grid-cols-[180px_1fr]"><h2 className="text-sm font-semibold">{title}</h2><p className="leading-7 text-zinc-400">{body}</p></section>)}</div>
    <div className="mt-16 text-center"><Link to="/" className="button-secondary"><ArrowLeft size={16}/>Explore more projects</Link></div>
  </article>
}
