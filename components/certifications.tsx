'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  ScrollText,
  Building2,
  CalendarDays,
  X,
  Eye,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const credential = {
  title: 'Industrial Technology Training',
  focus: 'Electrical Engineering & Instrumentation',
  organization:
    'Training Institute for Chemical Industries (TICI), BCIC, Polash, Narsingdi, Bangladesh',
  date: 'Completed 2025',
  description:
    'Completed industrial training on Electrical Engineering, Industrial Instrumentation, Industrial Processes, Electrical Maintenance, and Industrial Safety Practices.',
  gallery: [
    {
      src: '/certificates/tici-training.jpeg',
      alt: 'TICI training completion certificate',
      caption: 'Completion certificate',
    },
    {
      src: '/certificates/tici-training-hands-on-1.jpeg',
      alt: 'Hands-on wiring of an MCB and contactor panel during training',
      caption: 'Hands-on panel wiring',
    },
    {
      src: '/certificates/tici-training-hands-on-2.jpeg',
      alt: 'Lab session working on a motor control distribution board',
      caption: 'Motor control lab session',
    },
  ],
}

function GalleryLightbox({
  index,
  onClose,
  onNavigate,
}: {
  index: number
  onClose: () => void
  onNavigate: (next: number) => void
}) {
  const total = credential.gallery.length
  const image = credential.gallery[index]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % total)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + total) % total)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, total, onClose, onNavigate])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Certificate preview"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close preview"
        className="absolute right-4 top-4 rounded-full border border-border bg-card/80 p-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((index - 1 + total) % total)
        }}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/80 p-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((index + 1) % total)
        }}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/80 p-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div
        className="flex w-full max-w-3xl flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass gradient-border relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-card">
          <Image
            src={image.src || '/placeholder.svg'}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain p-2"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          {image.caption} ({index + 1}/{total})
        </p>
      </div>
    </div>
  )
}

export function Certifications() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section id="certifications" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Training & credentials"
        />

        <Reveal>
          <article className="glass gradient-border overflow-hidden rounded-2xl">
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:p-8">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <ScrollText className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      {credential.title}
                    </h3>
                    <p className="mt-1 text-sm text-primary">
                      {credential.focus}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5 text-primary" />
                    {credential.date}
                  </span>
                </div>

                <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {credential.organization}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {credential.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {credential.gallery.map((image, i) => (
                    <button
                      key={image.src}
                      onClick={() => setLightbox(i)}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card/50 transition-colors hover:border-primary/50"
                      aria-label={`View ${image.caption}`}
                    >
                      <Image
                        src={image.src || '/placeholder.svg'}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, 200px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100">
                        <Eye className="h-5 w-5 text-foreground" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      {lightbox !== null && (
        <GalleryLightbox
          index={lightbox}
          onClose={() => setLightbox(null)}
          onNavigate={(next) => setLightbox(next)}
        />
      )}
    </section>
  )
}
