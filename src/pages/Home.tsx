import { Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import projectsJson from '../data/projects.json'
import type { Project } from '../types'
import { ProjectCard } from '../components/ProjectCard'

const projects = projectsJson as Project[]
const categories = ['AI','Machine Learning','Flutter','Web','Cloud','Azure','DevOps','Platform Engineering','Automation','SaaS']

export function Home() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const filtered = useMemo(() => projects.filter(project => {
    const haystack = [project.name, ...project.technologies, ...project.categories].join(' ').toLowerCase()
    return haystack.includes(query.toLowerCase().trim()) && (category === 'All' || project.categories.includes(category))
  }), [query, category])

  return <>
    <section className="container-page pb-20 pt-24 text-center sm:pb-28 sm:pt-32">
      <p className="eyebrow">Selected work</p>
      <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-7xl">Engineering Portfolio</h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">A collection of software products, AI applications and automation solutions built to solve real-world problems.</p>
    </section>
    <section id="projects" className="container-page scroll-mt-24">
      <div className="flex flex-col justify-between gap-5 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end">
        <div><p className="eyebrow">Projects</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Products & systems</h2></div>
        <label className="relative block w-full sm:w-72"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects..." className="w-full rounded-lg border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-9 text-sm text-white placeholder:text-zinc-600 transition focus:border-violet-400/50"/>{query && <button onClick={()=>setQuery('')} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"><X size={15}/></button>}</label>
      </div>
      <div className="my-6 flex gap-2 overflow-x-auto pb-2">{['All',...categories].map(item => <button key={item} onClick={()=>setCategory(item)} className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition ${category===item ? 'border-zinc-200 bg-zinc-100 text-zinc-950' : 'border-white/10 text-zinc-500 hover:border-white/20 hover:text-zinc-200'}`}>{item}</button>)}</div>
      {filtered.length ? <div className="grid gap-5 md:grid-cols-2 lg:gap-6">{filtered.map(project => <ProjectCard key={project.id} project={project}/>)}</div> : <div className="surface rounded-2xl py-20 text-center"><p className="text-zinc-400">No projects match your search.</p><button onClick={()=>{setQuery('');setCategory('All')}} className="mt-3 text-sm text-violet-400 hover:text-violet-300">Clear filters</button></div>}
    </section>
  </>
}
