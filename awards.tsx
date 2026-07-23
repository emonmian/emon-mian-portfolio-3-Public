import { Trophy, Medal, Beaker, Users, PenTool, Megaphone, HeartHandshake } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const awards = [
  { icon: Trophy, title: 'NASA Space Apps Challenge 2024', detail: '2nd Runner-Up', highlight: true },
  { icon: Medal, title: 'Walton National Science Fest 2023', detail: '1st Runner-Up', highlight: true },
  { icon: Beaker, title: 'Alpha Science Lab', detail: 'Researcher' },
  { icon: Users, title: 'BASIS Student Forum', detail: 'Executive' },
  { icon: PenTool, title: 'MEC Research Community', detail: 'Editor' },
  { icon: Megaphone, title: 'ICT Olympiad Bangladesh', detail: 'Campus Ambassador' },
  { icon: HeartHandshake, title: 'Devsphere Hackathon', detail: 'Volunteer' },
]

export function Awards() {
  return (
    <section id="awards" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Awards & Activities"
          title="Recognition & involvement"
          description="Competition honors and leadership across research, community, and outreach."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, i) => (
            <Reveal key={award.title} delay={(i % 3) * 0.08}>
              <div
                className={`glass group flex h-full items-start gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1 ${
                  award.highlight ? 'gradient-border' : ''
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    award.highlight
                      ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground'
                      : 'border border-primary/30 bg-primary/10 text-primary'
                  }`}
                >
                  <award.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold leading-snug">
                    {award.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-primary">
                    {award.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
