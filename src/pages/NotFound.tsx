import { Link } from 'react-router-dom'
export function NotFound() { return <div className="container-page py-32 text-center"><p className="eyebrow">404</p><h1 className="mt-4 text-4xl font-semibold">Page not found</h1><p className="mt-4 text-zinc-500">The page you’re looking for doesn’t exist.</p><Link className="button-primary mt-8" to="/">Back to projects</Link></div> }
