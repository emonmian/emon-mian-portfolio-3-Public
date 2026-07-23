import { ScrollText } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Training & credentials"
        />

        <Reveal>
          <div className="glass gradient-border flex flex-col gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:p-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <ScrollText className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-heading text-lg font-semibold">
                Industrial Technology Training
              </h3>
              <p className="mt-1 text-sm text-primary">
                Electrical Engineering &amp; Instrumentation
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Training Institute for Chemical Industries (TICI), BCIC Polash
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
