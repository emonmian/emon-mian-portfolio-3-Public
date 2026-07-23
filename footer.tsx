import { Cpu } from 'lucide-react'
import { LinkedInIcon, GitHubIcon, ScholarIcon } from '@/components/brand-icons'

const socials = [
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/emonmian/' },
  {
    icon: ScholarIcon,
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=kYZIt9YAAAAJ',
  },
  { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <Cpu className="h-4 w-4" />
          </span>
          <span className="font-heading text-sm font-bold">Md. Emon Mian</span>
        </div>

        <p className="mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
          &ldquo;Advancing RF Engineering, Antenna Systems, Metamaterials, and
          THz Biosensing through innovative research and practical engineering
          solutions.&rdquo;
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs text-muted-foreground">
          Md. Emon Mian © 2026
        </p>
      </div>
    </footer>
  )
}
