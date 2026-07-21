import type { ProjectStatus } from '../types'
const styles = { Live: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/20', 'In Progress': 'text-amber-300 bg-amber-400/10 border-amber-400/20', Private: 'text-zinc-400 bg-zinc-400/10 border-zinc-400/20' }
export function StatusBadge({ status }: { status: ProjectStatus }) { return <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${styles[status]}`}><span className="mr-1.5 inline-block size-1.5 rounded-full bg-current"/>{status}</span> }
