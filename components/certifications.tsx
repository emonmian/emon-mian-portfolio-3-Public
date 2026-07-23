'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ScrollText, Building2, CalendarDays, X, Eye } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const credential = {
  title: 'Industrial Technology Training',
  focus: 'Electrical Engineering & Instrumentation',
  organization:
    'Training Institute for Chemical Industries (TICI), BCIC, Polash, Narsingdi, Bangladesh',
  date: 'Completed 2023',
  description:
    'Completed industrial training on Electrical Engineering, Industrial Instrumentation, Industrial Processes, Electrical Maintenance, and Industrial Safety Practices.',
  certificate: '/certificates/tici-training.png',
}

function CertificatePreview({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

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
      <div
        className="glass gradient-border relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-2xl bg-card"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={credential.certificate || '/placeholder.svg'}
          alt={`${credential.title} certificate`}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-contain p-2"
        />
      </div>
    </div>
  )
}

export function Certifications() {
  const [preview, setPreview] = useState(false)

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

                <button
                  onClick={() => setPreview(true)}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  <Eye className="h-4 w-4" />
                  Certificate preview
                </button>
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      {preview && <CertificatePreview onClose={() => setPreview(false)} />}
    </section>
  )
}
