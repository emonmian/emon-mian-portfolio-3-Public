'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import {
  Trophy,
  Medal,
  Beaker,
  Users,
  PenTool,
  Megaphone,
  HeartHandshake,
  Calendar,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const leadership = [
  { icon: Trophy, title: 'NASA Space Apps Challenge 2024', detail: '2nd Runner-Up', highlight: true },
  { icon: Medal, title: 'Walton National Science Fest 2023', detail: '1st Runner-Up', highlight: true },
  { icon: Beaker, title: 'Alpha Science Lab', detail: 'Researcher' },
  { icon: Users, title: 'BASIS Student Forum', detail: 'Executive' },
  { icon: PenTool, title: 'MEC Research Community', detail: 'Editor' },
  { icon: Megaphone, title: 'ICT Olympiad Bangladesh', detail: 'Campus Ambassador' },
  { icon: HeartHandshake, title: 'Devsphere Hackathon', detail: 'Volunteer' },
]

type Activity = {
  image: string
  title: string
  date?: string
  location?: string
  category?: string
  desc: string
}

const activities: Activity[] = [
  {
    image: '/activities/student-movement.png',
    title: 'Anti-Discrimination Student Movement 2024',
    date: 'July 2024',
    location: 'Bangladesh',
    desc: "Participant in the Anti-Discrimination Student Movement and July 2024 People's Uprising, contributing to awareness initiatives against inequality and social justice.",
  },
  {
    image: '/activities/flood-relief.png',
    title: 'Flood Relief Operations, Feni',
    date: '25 Aug 2024 – 30 Aug 2024',
    location: 'Feni District, Bangladesh',
    desc: 'Participated in flood relief operations across affected areas of Feni District, assisting with food distribution, drinking water supply, and emergency relief support.',
  },
  {
    image: '/activities/semiconductor-seminar.png',
    title: 'Hybrid Seminar on Semiconductor Devices',
    date: '24 April 2025',
    location: 'Mymensingh Engineering College',
    desc: 'Attended a hybrid seminar hosted by MEC Research Community featuring Dr. Nadim Chowdhury (BUET, MIT PhD), focusing on semiconductor devices and emerging technologies.',
  },
  {
    image: '/activities/plant-propagation.png',
    title: 'Tree Care & Plant Propagation',
    category: 'Hobby & Personal Interest',
    desc: 'Passionate about tree care and plant propagation through air layering, cutting, and grafting techniques, promoting environmental sustainability.',
  },
  {
    image: '/activities/devsphere-hackathon.png',
    title: 'Devsphere Hackathon 2025',
    date: '2025',
    location: 'Mymensingh Engineering College',
    desc: 'Volunteered in organizing and supporting innovation-driven student activities and technical collaboration during Devsphere Hackathon 2025.',
  },
]

function ActivityLightbox({
  activities,
  index,
  onClose,
  onNavigate,
}: {
  activities: Activity[]
  index: number
  onClose: () => void
  onNavigate: (i: number) => void
}) {
  const next = useCallback(
    () => onNavigate((index + 1) % activities.length),
    [index, activities.length, onNavigate],
  )
  const prev = useCallback(
    () => onNavigate((index - 1 + activities.length) % activities.length),
    [index, activities.length, onNavigate],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [next, prev, onClose])

  const current = activities[index]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${current.title} photo`}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 rounded-full border border-border bg-card/80 p-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="flex w-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex w-full items-center justify-center">
          <button
            onClick={prev}
            aria-label="Previous activity"
            className="absolute left-0 z-10 -translate-x-1 rounded-full border border-border bg-card/80 p-2 text-muted-foreground transition-colors hover:text-foreground sm:-translate-x-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="glass gradient-border relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-card">
            <Image
              src={current.image || '/placeholder.svg'}
              alt={current.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain p-2"
            />
          </div>

          <button
            onClick={next}
            aria-label="Next activity"
            className="absolute right-0 z-10 translate-x-1 rounded-full border border-border bg-card/80 p-2 text-muted-foreground transition-colors hover:text-foreground sm:translate-x-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 max-w-2xl text-center">
          <h3 className="font-heading text-base font-semibold text-balance">
            {current.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-xs text-primary">
            {current.date && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {current.date}
              </span>
            )}
            {current.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {current.location}
              </span>
            )}
            {current.category && (
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                {current.category}
              </span>
            )}
          </div>
          <p className="mt-3 text-sm text-pretty leading-relaxed text-muted-foreground">
            {current.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Awards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="awards" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Awards & Activities"
          title="Recognition & involvement"
          description="Competition honors and leadership across research, community, and outreach."
        />

        {/* Subsection 1: Leadership & Professional Involvement */}
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
            <Trophy className="h-4 w-4" />
          </span>
          <h3 className="font-heading text-lg font-semibold">
            Leadership &amp; Professional Involvement
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div
                className={`glass group flex h-full items-start gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1 ${
                  item.highlight ? 'gradient-border' : ''
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    item.highlight
                      ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground'
                      : 'border border-primary/30 bg-primary/10 text-primary'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-sm font-semibold leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-1 font-mono text-xs text-primary">
                    {item.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Subsection 2: Activities & Community Engagement */}
        <div className="mb-6 mt-16 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
            <HeartHandshake className="h-4 w-4" />
          </span>
          <h3 className="font-heading text-lg font-semibold">
            Activities &amp; Community Engagement
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, i) => (
            <Reveal key={activity.title} delay={(i % 3) * 0.1}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="glass gradient-border group flex h-full w-full flex-col overflow-hidden rounded-2xl text-left transition-transform hover:-translate-y-1"
                aria-label={`View ${activity.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={activity.image || '/placeholder.svg'}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="font-heading text-base font-semibold leading-snug text-balance">
                    {activity.title}
                  </h4>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-primary">
                    {activity.date && (
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {activity.date}
                      </span>
                    )}
                    {activity.location && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {activity.location}
                      </span>
                    )}
                    {activity.category && (
                      <span className="inline-flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5" />
                        {activity.category}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {activity.desc}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <ActivityLightbox
          activities={activities}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  )
}
