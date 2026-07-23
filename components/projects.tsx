'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Images, Play } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

type GalleryItem = {
  src: string
  caption: string
  type?: 'image' | 'video'
  poster?: string
}

type Project = {
  image: string
  title: string
  desc: string
  metrics: string[]
  tags: string[]
  gallery?: GalleryItem[]
  galleryLabel?: string
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
    image: '/projects/yagi/model-3d.jpg',
    title: '433 MHz High-Gain Yagi-Uda Antenna',
    desc: 'Directional 433 MHz Yagi-Uda designed in CST Studio and validated on a NanoVNA-F V2, delivering high forward gain for long-range telemetry.',
    metrics: ['Measured: 8.68 dB', 'Zin ≈ 73 Ω'],
    tags: ['CST Studio', 'NanoVNA', 'RF Design'],
    gallery: [
      {
        src: '/projects/yagi/model-3d.jpg',
        caption:
          'CST Studio 3D model showing the reflector, driven dipole, and director elements with the parametric length list.',
      },
      {
        src: '/projects/yagi/farfield-cuts.jpg',
        caption:
          'Far-field cut setup in CST Studio with the Yagi elements inside the theta/phi radiation sphere.',
      },
      {
        src: '/projects/yagi/vna-s21.jpg',
        caption:
          'NanoVNA-F V2 measured S21 (gain) trace reading 8.68 dB at the 435.5 MHz marker.',
      },
      {
        type: 'video',
        src: '/projects/yagi/demo.mp4',
        poster: '/projects/yagi/vna-s21.jpg',
        caption:
          'Bench demonstration of the fabricated Yagi-Uda antenna during measurement.',
      },
    ],
  },
  {
    image: '/projects/dualband/array-geometry.jpeg',
    title: 'Dual-Band GPS/WLAN Antenna Array',
    desc: 'Compact U-slot microstrip array simulated in CST Studio, resonating simultaneously in the GPS L1 (1.5 GHz) and WLAN (2.4 GHz) bands.',
    metrics: ['1.5 GHz + 2.4 GHz', 'S11: −23.4 dB'],
    tags: ['CST Studio', 'Dual-Band', 'GPS', 'WLAN'],
    gallery: [
      {
        src: '/projects/dualband/element-geometry.jpeg',
        caption:
          'Single U-slot patch element on a grounded substrate with microstrip feed line.',
      },
      {
        src: '/projects/dualband/s11-element.jpeg',
        caption:
          'Single-element S1,1 showing dual resonances at 1.5 GHz (−23.4 dB) and 2.43 GHz (−10.6 dB).',
      },
      {
        src: '/projects/dualband/array-geometry.jpeg',
        caption:
          'Two-element U-slot array sharing a common ground plane and feed, with the u/v/w coordinate frame.',
      },
      {
        src: '/projects/dualband/s11-array.jpeg',
        caption:
          'Array S1,1 confirming the dual-band response at 1.5 GHz (−13.2 dB) and 2.45 GHz (−10.9 dB).',
      },
    ],
  },
  {
    image: '/projects/stm32-ble/render-3d.jpeg',
    title: 'STM32WB55 BLE Module',
    desc: 'Wireless BLE module built on a dense 4-layer PCB stackup in KiCad, integrating an STM32WB55, USB-C, and an on-board 2.4 GHz RF matching network.',
    metrics: ['4-Layer PCB', 'KiCad'],
    tags: ['STM32WB55', 'BLE', 'KiCad'],
    galleryLabel: 'View PCB gallery',
    gallery: [
      {
        src: '/projects/stm32-ble/render-3d.jpeg',
        caption:
          'KiCad 3D viewer render of the assembled BLE module with USB-C, RF section, and BOOT button.',
      },
      {
        src: '/projects/stm32-ble/layout-2d.jpeg',
        caption:
          'KiCad PCB editor layout showing the dense routing across the 4-layer stackup (233 pads, 154 vias, 265 tracks).',
      },
    ],
  },
  {
    image: '/projects/stm32-devboard/render-3d.jpeg',
    title: 'STM32 Development Board',
    desc: 'Full-featured development board designed in Altium Designer, breaking out an STM32 MCU with SWD debug header, micro-USB, and a GPIO expansion connector.',
    metrics: ['4-Layer PCB', 'Altium Designer'],
    tags: ['STM32', 'Altium', 'PCB Design'],
    galleryLabel: 'View PCB gallery',
    gallery: [
      {
        src: '/projects/stm32-devboard/render-3d.jpeg',
        caption:
          'Altium 3D render of the STM32 development board with SWD header, micro-USB, GPIO FPC connector, crystal, and AMS LDO regulator.',
      },
      {
        src: '/projects/stm32-devboard/layout-2d.jpeg',
        caption:
          'Altium 2D PCB layout showing the copper routing around the STM32, SWD, USB, and GPIO sections with mounting holes.',
      },
    ],
  },
  {
    image: '/projects/thz-biosensor/sensing-workflow.png',
    title: 'THz Metamaterial Biosensor',
    desc: 'Machine-learning-assisted terahertz metamaterial biosensor that discriminates cancerous from normal breast tissue via its terahertz spectral response.',
    metrics: ['ML Assisted', 'Cancer Detection'],
    tags: ['THz', 'Metamaterial', 'Machine Learning'],
    galleryLabel: 'View sensing concept',
    gallery: [
      {
        src: '/projects/thz-biosensor/sensing-workflow.png',
        caption:
          'Sensing workflow: a THz source illuminates the metamaterial chip (gold split-ring resonators, sample layer, coverslip) holding the tissue sample, and the optical probe feeds a spectrometric system that converts the response to an electrical signal for ML classification of normal vs. cancer cells.',
      },
    ],
  },
  {
    image: '/projects/rocket-ignition/prototype.jpg',
    title: 'Wireless Rocket Ignition System',
    desc: 'Remote wireless ignition and control system for rocket testing, built around an Arduino and RF transceiver on a custom perfboard inside a protective enclosure.',
    metrics: ['Wireless Control', 'Aerospace'],
    tags: ['Embedded', 'RF Link', 'Aerospace'],
    galleryLabel: 'View prototype',
    gallery: [
      {
        src: '/projects/rocket-ignition/prototype.jpg',
        caption:
          'Bench prototype of the wireless ignition controller: Arduino and RF transceiver on a perfboard in an enclosure, wired to the ignition leads.',
      },
    ],
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
            {current.type === 'video' ? (
              <video
                key={current.src}
                src={current.src}
                poster={current.poster}
                controls
                playsInline
                className="absolute inset-0 h-full w-full object-contain p-2"
              />
            ) : (
              <Image
                src={current.src || '/placeholder.svg'}
                alt={current.caption}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain p-2"
              />
            )}
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
                src={
                  (item.type === 'video' ? item.poster : item.src) ||
                  '/placeholder.svg'
                }
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
              {item.type === 'video' && (
                <span className="absolute inset-0 flex items-center justify-center bg-background/40">
                  <Play className="h-4 w-4 text-foreground" fill="currentColor" />
                </span>
              )}
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
                      {project.gallery.length}{' '}
                      {project.gallery.length === 1 ? 'figure' : 'figures'}
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
                        {project.galleryLabel ?? 'View simulation results'}
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
