import {
  Microscope,
  Radar,
  Layers,
  Antenna,
  Plane,
  Radio,
  BrainCircuit,
  FlaskConical,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const topics = [
  { icon: Microscope, title: 'THz Biosensors', desc: 'Terahertz sensing for biological detection' },
  { icon: FlaskConical, title: 'Cancer Cell Detection', desc: 'ML-assisted multi-cancer bio-sensing' },
  { icon: Layers, title: 'Metamaterial Absorbers', desc: 'Multi-resonant absorber design' },
  { icon: Radar, title: 'mmWave Radar Systems', desc: 'High-frequency radar sensing' },
  { icon: Antenna, title: 'High Gain Antenna Arrays', desc: 'Patch and array antenna design' },
  { icon: Plane, title: 'Aircraft Crack Detection', desc: 'Structural health monitoring' },
  { icon: Radio, title: 'Wireless Communication', desc: 'RF and aerospace comms' },
  { icon: BrainCircuit, title: 'Explainable ML', desc: 'Interpretable models for sensing' },
]

export function Research() {
  return (
    <section id="research" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Research Interests"
          title="Areas of focus"
          description="Exploring the frontier where electromagnetics, hardware, and machine learning converge."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, i) => (
            <Reveal key={topic.title} delay={(i % 4) * 0.08}>
              <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-colors group-hover:bg-primary/20" />
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <topic.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold">
                  {topic.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {topic.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
