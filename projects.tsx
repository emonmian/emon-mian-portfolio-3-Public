'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

type GalleryItem = { src: string; caption: string }

type Project = {
  image: string
  title: string
  desc: string
  metrics: string[]
  tags: string[]
  gallery?: GalleryItem[]
}

const projects: Project[] = [
  {
    image: '/projects/mmwave/geometry.jpeg',
    title: '77 GHz mmWave 1×4 Patch Antenna Array',
    desc: 'High-frequency automotive radar array engineered in CST Studio and applied to sub-millimeter crack detection on aluminium plates.',
    metrics: ['Gain: 12.4 dBi', 'S11: −41.97 dB'],
    tags: ['CST Studio', 'mmWave', 'Antenna Array'],
    gallery: [
      {
        src: '/projects/mmwave/geometry.jpeg',
        caption: '1×4 microstrip patch array with corporate feed network.',
      },
      {
        src: '/projects/mmwave/radiation-3d.png',
        caption: '3D far-field radiation pattern peaking at 12.4 dBi gain.',
      },
      {
        src: '/projects/mmwave/s11-deep.jpeg',
        caption: 'S-parameter resonance dip of −41.97 dB at 77.08 GHz.',
      },
      {
        src: '/projects/mmwave/s11-resonance.jpeg',
        caption: 'S1,1 return loss of −28.5 dB at 77.95 GHz over the plate.',
      },
      {
        src: '/projects/mmwave/efield-pristine.png',
        caption: '2D E-field distribution over a pristine aluminium plate.',
      },
      {
        src: '/projects/mmwave/efield-crack.png',
        caption: 'E-field response disrupted by a sub-millimeter crack.',
      },
      {
        src: '/projects/mmwave/s11-sensitivity.png',
        caption: 'S11 sensitivity shift across 0.2 mm and 1 mm crack widths.',
      },
    ],
  },
  {
    image: '/projects/yagi-antenna.png',
    title: '433 MHz High-Gain Yagi-Uda Antenna',
    desc: 'Directional antenna designed and validated for long-range telemetry.',
    metrics: ['Gain: ~10 dB'],
    tags: ['CST Studio', 'VNA', 'RF Design'],
  },
  {
    image: '/projects/dualband-antenna.png',
    title: 'Dual-Band GPS/WLAN Antenna Array',
    desc: 'Compact dual-resonant array covering navigation and WLAN bands.',
    metrics: ['1.5 GHz + 2.4 GHz'],
    tags: ['Dual-Band', 'GPS', 'WLAN'],
  },
  {
    image: '/projects/stm32-ble.png',
    title: 'STM32WB55 BLE Module',
    desc: 'Wireless BLE module built on a dense 4-layer PCB stackup.',
    metrics: ['4-Layer PCB', 'KiCad 10'],
    tags: ['STM32WB55', 'BLE', 'KiCad'],
  },
  {
    image: '/projects/stm32-devboard.png',
    title: 'STM32 Development Board',
    desc: 'Full-featured development board designed in Altium Designer.',
    metrics: ['4-Layer PCB', 'Altium Designer'],
    tags: ['STM32', 'Altium', 'PCB Design'],
  },
  {
    image: '/projects/thz-biosensor.png',
    title: 'THz Metamaterial Biosensor',
    desc: 'Machine-learning-assisted terahertz biosensor for cancer detection.',
    metrics: ['ML Assisted', 'Cancer Detection'],
    tags: ['THz', 'Metamaterial', 'Machine Learning'],
  },
  {
    image: '/projects/rocket-ignition.png',
    title: 'Wireless Rocket Ignition System',
    desc: 'Remote wireless ignition and control system for rocket testing.',
    metrics: ['Wireless Control', 'Aerospace'],
    tags: ['Embedded', 'RF Link', 'Aerospace'],
  },
]

function Lightbox({
  gallery,
  title,
  onClose,
}: {
  gallery: GalleryItem[]
  title: string
  onClose: () => void
}) {
  const [index, setIndex] = useState(0)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % gallery.length),
    [gallery.length],
  )
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + gallery.length) % gallery.length),
    [gallery.length],
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

  const current = gallery[index]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} simulation results`}
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
            aria-label="Previous image"
            className="absolute left-0 z-10 -translate-x-1 rounded-full border border-border bg-card/80 p-2 text-muted-foreground transition-colors hover:text-foreground sm:-translate-x-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="glass gradient-border relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-card">
            <Image
              src={current.src || '/placeholder.svg'}
              alt={current.caption}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain p-2"
            />
          </div>

          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-0 z-10 translate-x-1 rounded-full border border-border bg-card/80 p-2 text-muted-foreground transition-colors hover:text-foreground sm:translate-x-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-4 max-w-2xl text-center text-sm text-pretty text-muted-foreground">
          <span className="font-mono text-xs text-primary">
            {index + 1} / {gallery.length}
          </span>{' '}
          — {current.caption}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {gallery.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setIndex(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative h-12 w-16 overflow-hidden rounded-md border transition-colors ${
                i === index
                  ? 'border-primary'
                  : 'border-border opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const [activeGallery, setActiveGallery] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Engineering portfolio"
          description="Selected hardware, antenna, and simulation projects spanning RF, embedded systems, and biosensing."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.1}>
              <article className="glass gradient-border group flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  {project.gallery && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                      <Images className="h-3.5 w-3.5 text-primary" />
                      {project.gallery.length} figures
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-base font-semibold leading-snug text-balance">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-lg bg-primary/15 px-2.5 py-1 font-mono text-xs text-primary"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-col gap-3 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-card/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.gallery && (
                      <button
                        onClick={() => setActiveGallery(project)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      >
                        <Images className="h-4 w-4" />
                        View simulation results
                      </button>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {activeGallery?.gallery && (
        <Lightbox
          gallery={activeGallery.gallery}
          title={activeGallery.title}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </section>
  )
}
