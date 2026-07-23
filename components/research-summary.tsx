'use client'

import { motion } from 'framer-motion'
import {
  Microscope,
  BrainCircuit,
  Radar,
  Antenna,
  Layers,
  Plane,
  HeartPulse,
  SlidersHorizontal,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const focusAreas = [
  {
    icon: Microscope,
    title: 'THz Metamaterial Biosensors',
    desc: 'Terahertz metamaterial biosensors for cancer cell detection.',
  },
  {
    icon: BrainCircuit,
    title: 'Explainable ML Sensing',
    desc: 'Explainable machine learning assisted electromagnetic sensing.',
  },
  {
    icon: Radar,
    title: 'mmWave Antenna Arrays',
    desc: 'mmWave antenna arrays for radar applications.',
  },
  {
    icon: Antenna,
    title: 'High-Gain Antenna Systems',
    desc: 'High-gain antenna systems for wireless communication.',
  },
  {
    icon: Layers,
    title: 'Metamaterial Absorbers',
    desc: 'Metamaterial absorbers for RF and microwave applications.',
  },
  {
    icon: Plane,
    title: 'Structural Health Monitoring',
    desc: 'Structural health monitoring and aircraft crack detection.',
  },
  {
    icon: HeartPulse,
    title: 'Biomedical EM Sensors',
    desc: 'Biomedical electromagnetic sensors for diagnostics.',
  },
  {
    icon: SlidersHorizontal,
    title: 'RF & Microwave Optimization',
    desc: 'RF and microwave device optimization.',
  },
]

export function ResearchSummary() {
  return (
    <section id="research-summary" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Research Summary"
          title="What I'm researching"
          description="My current research focuses on advancing electromagnetic systems across biosensing, radar, and wireless communication."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass gradient-border group relative h-full overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-colors group-hover:bg-primary/25" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <area.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-4 font-heading text-base font-semibold leading-snug">
                {area.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
