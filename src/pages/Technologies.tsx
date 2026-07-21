import { Box, Braces, BrainCircuit, Cloud, Code2, Container, Database, Layers3, Smartphone, Workflow } from 'lucide-react'

const technologies = [
  {name:'Azure', desc:'Cloud infrastructure, serverless services and AI platforms.', icon:Cloud},
  {name:'Kubernetes', desc:'Reliable orchestration for containerized workloads.', icon:Box},
  {name:'Terraform', desc:'Repeatable infrastructure defined and reviewed as code.', icon:Layers3},
  {name:'Python', desc:'AI systems, APIs, data pipelines and automation.', icon:Code2},
  {name:'Flutter', desc:'High-quality cross-platform mobile applications.', icon:Smartphone},
  {name:'TypeScript', desc:'Robust, maintainable web products and services.', icon:Braces},
  {name:'Firebase', desc:'Real-time data, authentication and serverless backends.', icon:Database},
  {name:'Docker', desc:'Portable, consistent application environments.', icon:Container},
  {name:'OpenAI', desc:'Grounded, reliable generative AI product experiences.', icon:Workflow},
  {name:'Machine Learning', desc:'Computer vision, prediction and intelligent automation.', icon:BrainCircuit},
]

export function Technologies() { return <div className="container-page pt-20 sm:pt-28"><header className="max-w-2xl"><p className="eyebrow">Toolbox</p><h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Technologies</h1><p className="mt-5 text-lg leading-8 text-zinc-400">A pragmatic technology stack selected to build secure, scalable and maintainable products.</p></header><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{technologies.map(({name,desc,icon:Icon})=><article key={name} className="surface group rounded-xl p-6 transition hover:border-white/[0.16] hover:bg-white/[0.04]"><div className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-violet-300"><Icon size={19}/></div><h2 className="mt-5 font-semibold">{name}</h2><p className="mt-2 text-sm leading-6 text-zinc-500">{desc}</p></article>)}</div></div> }
