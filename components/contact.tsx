import { Phone, Mail } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { LinkedInIcon, GitHubIcon, ScholarIcon } from '@/components/brand-icons'

const socials = [
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/emonmian/' },
  {
    icon: ScholarIcon,
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=kYZIt9YAAAAJ',
  },
  { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com' },
  { icon: Mail, label: 'Email', href: 'mailto:emon.mian100@gmail.com' },
]

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to PhD opportunities, research collaborations, and RF / hardware engineering roles."
        />

        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="glass gradient-border flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8">
              <div className="space-y-4">
                <a
                  href="tel:+8801990668564"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card/40 p-4 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">
                      Phone
                    </span>
                    <span className="font-mono text-sm">+8801990668564</span>
                  </span>
                </a>
                <a
                  href="mailto:emon.mian100@gmail.com"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card/40 p-4 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">
                      Email
                    </span>
                    <span className="font-mono text-sm">
                      emon.mian100@gmail.com
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-sm text-muted-foreground">
                  Find me online
                </p>
                <div className="flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/50 text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
