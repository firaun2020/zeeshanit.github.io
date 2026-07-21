import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../types'
import { StatusBadge } from './StatusBadge'

export function ProjectCard({ project }: { project: Project }) {
  return <Link to={`/projects/${project.id}`} className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-panel transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:shadow-glow">
    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.07] bg-zinc-950">
      <div className="absolute inset-0 opacity-30" style={{background:`radial-gradient(circle at 60% 30%, ${project.accent}, transparent 55%)`}} />
      <img src={project.image} alt="" className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]" />
    </div>
    <div className="p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3"><StatusBadge status={project.status}/><ArrowUpRight size={18} className="text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"/></div>
      <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-500">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.technologies.slice(0,4).map(tech => <span className="badge" key={tech}>{tech}</span>)}</div>
    </div>
  </Link>
}
