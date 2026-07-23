'use client'

import { motion } from 'framer-motion'
import { Radio, CircuitBoard, Code, BarChart3 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const categories = [
  {
    icon: Radio,
    title: 'RF & Electromagnetics',
    skills: [
      { name: 'CST Studio Suite', level: 95 },
      { name: 'HFSS', level: 85 },
      { name: 'ADS', level: 80 },
      { name: 'Lumerical', level: 75 },
      { name: 'Antenna Design', level: 92 },
      { name: 'RF Engineering', level: 90 },
      { name: 'THz Sensing', level: 82 },
      { name: 'Metamaterials', level: 88 },
    ],
  },
  {
    icon: CircuitBoard,
    title: 'Hardware Design',
    skills: [
      { name: 'Altium Designer', level: 88 },
      { name: 'KiCad', level: 90 },
      { name: 'STM32', level: 85 },
      { name: 'Arduino', level: 90 },
      { name: 'PCB Design', level: 88 },
      { name: 'Hardware Prototyping', level: 86 },
    ],
  },
  {
    icon: Code,
    title: 'Programming & AI',
    skills: [
      { name: 'C Programming', level: 85 },
      { name: 'Machine Learning', level: 80 },
      { name: 'MATLAB', level: 88 },
      { name: 'Python Basics', level: 70 },
    ],
  },
  {
    icon: BarChart3,
    title: 'Research Tools',
    skills: [
      { name: 'OriginPro', level: 88 },
      { name: 'EndNote', level: 85 },
      { name: 'Mendeley', level: 85 },
      { name: 'Excel', level: 90 },
      { name: 'Power BI', level: 78 },
    ],
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-foreground/90">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical expertise"
          description="A broad toolkit spanning electromagnetic simulation, hardware design, programming, and research workflows."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 2) * 0.1}>
              <div className="glass gradient-border h-full rounded-2xl p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <cat.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">
                    {cat.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
