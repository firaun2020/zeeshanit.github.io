import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const links = [{ to: '/', label: 'Projects' }, { to: '/technologies', label: 'Technologies' }, { to: '/contact', label: 'Contact' }]

export function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [location.pathname])
  return <div className="min-h-screen bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(124,58,237,.15),transparent)]">
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-semibold tracking-tight"><span className="grid size-7 place-items-center rounded-md border border-white/15 bg-white/[0.06] text-xs">E</span><span>Engineering Portfolio</span></Link>
        <nav className="hidden items-center gap-7 sm:flex">{links.map(link => <NavLink key={link.to} end={link.to === '/'} to={link.to} className={({isActive}) => `text-sm transition hover:text-white ${isActive ? 'text-white' : 'text-zinc-500'}`}>{link.label}</NavLink>)}</nav>
        <button onClick={() => setOpen(!open)} className="rounded-md p-2 text-zinc-400 sm:hidden" aria-label="Toggle menu">{open ? <X size={20}/> : <Menu size={20}/>}</button>
      </div>
      {open && <nav className="container-page flex flex-col gap-1 border-t border-white/[0.06] py-3 sm:hidden">{links.map(link => <NavLink key={link.to} to={link.to} className="rounded-md px-3 py-2 text-sm text-zinc-300 hover:bg-white/5">{link.label}</NavLink>)}</nav>}
    </header>
    <main><Outlet /></main>
    <footer className="container-page mt-24 border-t border-white/[0.07] py-8 text-sm text-zinc-600"><div className="flex flex-col justify-between gap-2 sm:flex-row"><span>Engineering Portfolio</span><span>Designed & engineered with care.</span></div></footer>
  </div>
}
