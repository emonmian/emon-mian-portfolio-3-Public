import {
  Antenna,
  Radio,
  Layers,
  Microscope,
  CircuitBoard,
  Waves,
  Plane,
  BrainCircuit,
  GraduationCap,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const interests = [
  { icon: Radio, label: 'RF & Microwave Engineering' },
  { icon: Antenna, label: 'Antenna Design' },
  { icon: Layers, label: 'Metamaterials' },
  { icon: Microscope, label: 'THz Biosensing' },
  { icon: CircuitBoard, label: 'PCB Design' },
  { icon: Waves, label: 'Electromagnetic Simulation' },
  { icon: Plane, label: 'Aerospace Communication' },
  { icon: BrainCircuit, label: 'ML Assisted Sensing' },
]

const education = [
  {
    degree: 'B.Sc. in Electrical & Electronic Engineering',
    place: 'Mymensingh Engineering College, University of Dhaka',
    detail: 'CGPA: 3.27 / 4.00',
    date: 'Graduated August 2025',
  },
  {
    degree: 'Higher Secondary Certificate',
    place: 'Gazipur Presidency College',
    detail: 'GPA: 3.75 / 5.00',
    date: '',
  },
  {
    degree: 'Secondary School Certificate',
    place: 'Kamarjuri Yousuf Ali High School',
    detail: 'GPA: 5.00 / 5.00',
    date: '',
  },
]

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering meets research"
          description="EEE graduate from Mymensingh Engineering College, University of Dhaka — driven by a passion for advancing electromagnetic systems from theory to hardware."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass gradient-border h-full rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold">
                Passionate about advancing RF systems
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                I specialize in designing and simulating high-performance
                antennas, metamaterial absorbers, and terahertz biosensors,
                combining rigorous electromagnetic modeling with hands-on
                hardware prototyping. My work spans from aerospace communication
                systems to machine-learning-assisted cancer cell detection.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {interests.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card/40 p-4 text-center transition-colors hover:border-primary/40"
                  >
                    <item.icon className="h-6 w-6 text-primary" />
                    <span className="text-xs leading-tight text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="glass h-full rounded-2xl p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-xl font-semibold">Education</h3>
              </div>
              <ol className="relative space-y-6 border-l border-border pl-6">
                {education.map((edu) => (
                  <li key={edu.degree} className="relative">
                    <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                    <h4 className="text-sm font-semibold leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {edu.place}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-xs text-primary">
                        {edu.detail}
                      </span>
                      {edu.date ? (
                        <span className="font-mono text-xs text-muted-foreground">
                          {edu.date}
                        </span>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
