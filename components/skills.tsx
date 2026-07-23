'use client'

import {
  Radio,
  Antenna,
  Waves,
  Radar,
  Layers,
  Microscope,
  Activity,
  ScanLine,
  Sigma,
  LineChart,
  BookMarked,
  Library,
  Table2,
  BarChart3,
  Signal,
  Wifi,
  Plane,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

type Expertise = {
  icon: LucideIcon
  title: string
  description: string
}

const coreExpertise: Expertise[] = [
  {
    icon: Radio,
    title: 'RF & Microwave Engineering',
    description: 'High-frequency circuit and system design across RF and microwave bands.',
  },
  {
    icon: Antenna,
    title: 'Antenna Design & Array Antennas',
    description: 'Single-element and phased array antennas for high-gain applications.',
  },
  {
    icon: Waves,
    title: 'Electromagnetic Simulation',
    description: 'Full-wave EM modeling, parametric studies, and optimization.',
  },
  {
    icon: Radar,
    title: 'Radar & Sensing Systems',
    description: 'Radar front-ends and sensing architectures for detection systems.',
  },
  {
    icon: Layers,
    title: 'Metamaterials & EM Absorbers',
    description: 'Engineered surfaces for near-unity electromagnetic absorption.',
  },
  {
    icon: Microscope,
    title: 'THz Biosensing',
    description: 'Terahertz metamaterial sensors for label-free biological detection.',
  },
  {
    icon: Activity,
    title: 'Structural Health Monitoring',
    description: 'Non-destructive evaluation of structural integrity over time.',
  },
  {
    icon: ScanLine,
    title: 'Aircraft Crack Detection',
    description: 'Electromagnetic techniques for detecting fatigue cracks in aircraft.',
  },
]

type Tool = {
  icon: LucideIcon
  name: string
  note: string
}

const featuredTool = {
  icon: Waves,
  name: 'CST Studio Suite',
  note: 'Primary simulation platform',
  description:
    'Primary electromagnetic simulation environment for antenna, metamaterial, and absorber design — used for full-wave analysis, parametric sweeps, and field visualization across GHz and THz regimes.',
}

const tools: Tool[] = [
  { icon: Antenna, name: 'Ansys HFSS', note: 'Full-wave EM solver' },
  { icon: Signal, name: 'ADS', note: 'RF/microwave circuits' },
  { icon: Zap, name: 'Lumerical', note: 'Photonics & THz' },
  { icon: Sigma, name: 'MATLAB', note: 'Analysis & scripting' },
  { icon: LineChart, name: 'OriginPro', note: 'Scientific plotting' },
  { icon: BookMarked, name: 'EndNote', note: 'Reference management' },
  { icon: Library, name: 'Mendeley', note: 'Reference management' },
  { icon: Table2, name: 'Microsoft Excel', note: 'Data handling' },
  { icon: BarChart3, name: 'Power BI', note: 'Data visualization' },
]

const researchInterests: Expertise[] = [
  {
    icon: Antenna,
    title: 'High-Gain Antenna Arrays',
    description: 'Directive array systems for long-range links and sensing.',
  },
  {
    icon: Radar,
    title: 'Radar Antennas & Radar Sensing',
    description: 'Antenna front-ends and signal chains for radar detection.',
  },
  {
    icon: Signal,
    title: 'mmWave Communication Systems',
    description: 'Millimeter-wave links for next-generation wireless.',
  },
  {
    icon: Layers,
    title: 'Metamaterial Absorbers',
    description: 'Engineered absorbers for stealth and sensing applications.',
  },
  {
    icon: Microscope,
    title: 'THz Sensors & Biosensing',
    description: 'Terahertz sensing platforms for biomedical diagnostics.',
  },
  {
    icon: Wifi,
    title: 'Wireless Communication Systems',
    description: 'End-to-end wireless architectures and propagation studies.',
  },
  {
    icon: Plane,
    title: 'Aerospace Communication Platforms',
    description: 'Communication systems for airborne and space platforms.',
  },
  {
    icon: Waves,
    title: 'Electromagnetic Sensing',
    description: 'EM-based detection for materials and environments.',
  },
  {
    icon: Activity,
    title: 'Structural Health Monitoring',
    description: 'Continuous condition assessment of engineering structures.',
  },
  {
    icon: ScanLine,
    title: 'Aircraft Crack Detection',
    description: 'EM-based fatigue and crack detection for aircraft safety.',
  },
]

function ExpertiseCard({ item, delay }: { item: Expertise; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="glass gradient-border group h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
        <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground transition-transform duration-300 group-hover:scale-110">
          <item.icon className="h-5 w-5" />
        </span>
        <h4 className="font-heading text-base font-semibold leading-snug text-balance">
          {item.title}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
          {item.description}
        </p>
      </div>
    </Reveal>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Expertise"
          title="Technical & research profile"
          description="A research-focused overview of core competencies, simulation tools, and active areas of interest in RF, electromagnetics, and sensing."
        />

        {/* 1. Core Expertise */}
        <div className="mb-20">
          <Reveal>
            <h3 className="mb-6 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
              Core Expertise
            </h3>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreExpertise.map((item, i) => (
              <ExpertiseCard key={item.title} item={item} delay={(i % 4) * 0.08} />
            ))}
          </div>
        </div>

        {/* 2. Research Tools & Software */}
        <div className="mb-20">
          <Reveal>
            <h3 className="mb-6 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
              Research Tools &amp; Software
            </h3>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {/* Featured CST card */}
            <Reveal className="lg:row-span-2">
              <div className="glass gradient-border group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
                />
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                      <featuredTool.icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                      Primary Platform
                    </span>
                  </div>
                  <h4 className="font-heading text-2xl font-bold">
                    {featuredTool.name}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {featuredTool.description}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Other tools grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {tools.map((tool, i) => (
                <Reveal key={tool.name} delay={(i % 2) * 0.08}>
                  <div className="glass group flex h-full items-center gap-3 rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <tool.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-medium leading-tight">
                        {tool.name}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {tool.note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Research Interests */}
        <div>
          <Reveal>
            <h3 className="mb-6 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
              Research Interests
            </h3>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {researchInterests.map((item, i) => (
              <ExpertiseCard key={item.title} item={item} delay={(i % 4) * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
