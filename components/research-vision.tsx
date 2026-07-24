'use client'

import { Zap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function ResearchVision() {
  return (
    <section id="research-vision" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Research Vision"
          title="Shaping the Future of Antennas, Radar & Electromagnetic Systems"
          description="Advancing next-generation wireless communication, structural health monitoring, aerospace applications, and intelligent sensing systems."
        />

        <Reveal>
          <div className="glass gradient-border rounded-2xl p-8 sm:p-10">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/20 to-accent/10 text-primary sm:h-14 sm:w-14">
                <Zap className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold sm:text-xl">
                  My Research Objectives
                </h3>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    My research aims to advance antenna engineering, electromagnetic sensing, radar systems, and metamaterial technologies for next-generation wireless communication, structural health monitoring, aerospace applications, and intelligent sensing systems.
                  </p>
                  <p className="leading-relaxed">
                    I am particularly interested in high-gain antenna arrays, mmWave and radar technologies, electromagnetic absorbers, aircraft crack detection, and advanced simulation-driven RF system design using CST Studio Suite.
                  </p>
                  <p className="leading-relaxed">
                    My long-term objective is to contribute to impactful interdisciplinary research that bridges electromagnetic theory, antenna innovation, and real-world engineering solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
