import { FileText, BookOpen } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const journals = [
  {
    title:
      'Explainable Machine Learning Assisted Terahertz Metamaterial Absorber for Multi-Cancer Cell Bio-sensing',
    status: 'Submitted',
  },
  {
    title:
      'Numerical Investigation of Optoelectronic Performance Limits in Lead-Free Perovskite Solar Cells using SCAPS-1D',
    status: 'Submitted',
  },
]

const conferences = [
  {
    title: 'Multi-Resonant Metamaterial Absorber for C and X Bands',
    venue: 'ECCE 2025',
  },
  {
    title:
      'Bacteriophage Virus Shape Tuneable Microwave Metamaterial Absorber for S and C Band Applications',
    venue: 'ICCIT',
  },
  {
    title: 'Machine Learning Approach for Accurate RMSD Estimation',
    venue: 'Conference Paper',
  },
  {
    title: 'Lead-Free Bilayer Perovskite Solar Cell Optimization',
    venue: 'Conference Paper',
  },
]

export function Publications() {
  return (
    <section id="publications" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Publications"
          title="Research contributions"
          description="Peer-reviewed journal articles and conference papers across metamaterials, biosensing, and photovoltaics."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Reveal className="mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-lg font-semibold">
                Journal Articles
              </h3>
            </Reveal>
            <div className="space-y-4">
              {journals.map((pub, i) => (
                <Reveal key={pub.title} delay={i * 0.08}>
                  <article className="glass gradient-border group rounded-2xl p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 font-mono text-xs text-primary">
                        Journal
                      </span>
                      <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs text-accent-foreground">
                        {pub.status}
                      </span>
                    </div>
                    <h4 className="text-sm font-medium leading-relaxed text-pretty">
                      {pub.title}
                    </h4>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal className="mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-lg font-semibold">
                Conference Papers
              </h3>
            </Reveal>
            <div className="space-y-4">
              {conferences.map((pub, i) => (
                <Reveal key={pub.title} delay={i * 0.08}>
                  <article className="glass gradient-border group rounded-2xl p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 font-mono text-xs text-accent-foreground">
                        Conference
                      </span>
                      <span className="rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                        {pub.venue}
                      </span>
                    </div>
                    <h4 className="text-sm font-medium leading-relaxed text-pretty">
                      {pub.title}
                    </h4>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
