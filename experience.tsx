import { Rocket, FlaskConical, Calendar } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const experiences = [
  {
    icon: Rocket,
    role: 'RF & Embedded System Engineer',
    company: 'DhumketuX Defense',
    subtitle: "Bangladesh's First Rocket Company",
    date: 'Feb 2023 – Feb 2024',
    points: [
      'Designed 433 MHz high-gain Yagi-Uda antenna (~10 dB gain)',
      'CST Studio Suite simulation and optimization',
      'Antenna prototyping and VNA validation',
      'STM32, GPS, IMU, and ESC integration',
      'FPV 5.8 GHz communication systems',
      'Wireless rocket ignition systems',
      'Rocket testing and data acquisition',
      'Aerospace communication systems',
    ],
  },
  {
    icon: FlaskConical,
    role: 'Research Analyst (Remote)',
    company: 'Softsasi NextGen Research',
    subtitle: 'Remote Research Position',
    date: 'Dec 2025 – Present',
    points: [
      'THz Biosensing Research',
      'Metamaterial Design',
      'CST Simulation',
      'Machine Learning Assisted Sensing',
      'Electromagnetic Modeling',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Professional journey"
          description="Hands-on engineering across aerospace hardware and advanced electromagnetic research."
        />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.1}>
              <div className="glass gradient-border rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                      <exp.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.date}
                  </span>
                </div>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
