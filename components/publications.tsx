import { BookOpen, FileText } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const journals = [
  {
    title: 'Explainable Machine Learning Assisted Terahertz Metamaterial Absorber for Multi-Cancer Cell Bio-sensing',
    researchArea: 'THz Biosensing • Metamaterials • Electromagnetic Sensing',
  },
  {
    title: 'Numerical Investigation of Optoelectronic Performance Limits in Lead-Free (FA)₀.₅(MA)₀.₅SnI₃ Perovskite Solar Cells Using SCAPS-1D',
    researchArea: 'Perovskite Solar Cells • SCAPS-1D • Photovoltaics',
  },
]

const conferences = [
  {
    title: 'Multi-Resonant Metamaterial Absorber for C & X Bands',
    venue: '2025 International Conference on Electrical, Computer and Communication Engineering (ECCE 2025)',
    location: 'Chittagong, Bangladesh',
    year: '2025',
  },
  {
    title: 'Bacteriophage Virus Shape Tuneable Microwave Metamaterial Absorber for S & C Band Applications',
    venue: '27th International Conference on Computer and Information Technology (ICCIT 2025)',
    location: 'Bangladesh',
    year: '2025',
  },
  {
    title: 'A Machine Learning Approach for Accurate RMSD Estimation',
    venue: '2nd International Conference on Next-Generation Computing, IoT and Machine Learning (NGCIML 2025)',
    location: 'Bangladesh',
    year: '2025',
  },
  {
    title: 'Lead-Free Bilayer Perovskite Solar Cell Optimization',
    venue: 'Conference Publication',
    location: 'Dhaka, Bangladesh',
    year: '2025',
  },
]

export function Publications() {
  return (
    <section id="publications" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Publications"
          title="Research contributions"
          description="Peer-reviewed publications across metamaterials, biosensing, and photovoltaics."
        />

        <div className="space-y-12">
          {/* Journal Articles Section */}
          <div>
            <Reveal className="mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-lg font-semibold">
                Journal Articles
              </h3>
            </Reveal>
            <p className="mb-4 text-sm text-muted-foreground">
              Submitted research manuscripts in terahertz metamaterials, biosensing, and photovoltaic devices.
            </p>
            <div className="space-y-3">
              {journals.map((pub, i) => (
                <Reveal key={pub.title} delay={i * 0.08}>
                  <article className="glass gradient-border group rounded-2xl p-5 transition-all hover:shadow-lg">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h4 className="flex-1 font-heading text-base font-semibold leading-snug text-foreground">
                        {pub.title}
                      </h4>
                      <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 font-mono text-xs text-accent-foreground">
                        Submitted
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground/75">
                      {pub.researchArea}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Conference Papers Section */}
          <div>
            <Reveal className="mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-lg font-semibold">
                Conference Papers
              </h3>
            </Reveal>
            <p className="mb-4 text-sm text-muted-foreground">
              Peer-reviewed conference publications across metamaterials, machine learning, and photovoltaics.
            </p>
            <div className="space-y-3">
              {conferences.map((pub, i) => (
                <Reveal key={pub.title} delay={i * 0.08}>
                  <article className="glass gradient-border group rounded-2xl p-5 transition-all hover:shadow-lg">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h3 className="flex-1 font-heading text-base font-semibold leading-snug text-foreground">
                        {pub.title}
                      </h3>
                      <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 font-mono text-xs text-primary">
                        Published
                      </span>
                    </div>
                    <p className="mb-1 text-sm text-muted-foreground">
                      {pub.venue}
                    </p>
                    <p className="text-xs text-muted-foreground/75">
                      {pub.location} • {pub.year}
                    </p>
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
