'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Images, Waves, Cpu } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

type GalleryItem = {
  src: string
  caption: string
  category: 'CST Simulation' | 'Fabricated Prototype'
}

const gallery: GalleryItem[] = [
  {
    src: '/metamaterial/unit-cell.png',
    caption:
      'CST Studio 3D unit-cell model: split-ring resonator on a dielectric substrate backed by a metallic ground plane.',
    category: 'CST Simulation',
  },
  {
    src: '/metamaterial/absorption-spectrum.png',
    caption:
      'Simulated absorptivity spectrum showing multiple near-unity absorption peaks across the GHz/THz band.',
    category: 'CST Simulation',
  },
  {
    src: '/metamaterial/field-distribution.png',
    caption:
      'Surface current and E-field distribution over the resonator at the primary absorption frequency.',
    category: 'CST Simulation',
  },
  {
    src: '/metamaterial/prototype.png',
    caption:
      'Fabricated metamaterial absorber panel with an etched array of split-ring resonators.',
    category: 'Fabricated Prototype',
  },
  {
    src: '/metamaterial/array-fabricated.png',
    caption:
      'Flexible fabricated absorber array showing the periodic arrangement of resonator unit cells.',
    category: 'Fabricated Prototype',
  },
]

const tags = [
  'Metamaterials',
  'CST Studio Suite',
  'THz Sensing',
  'Electromagnetic Absorbers',
]

function Lightbox({ onClose, start }: { onClose: () => void; start: number }) {
  const [index, setIndex] = useState(start)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % gallery.length),
    [],
  )
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + gallery.length) % gallery.length),
    [],
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
      aria-label="Metamaterial absorber gallery"
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
            <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-background/70 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur-sm">
              {current.category}
            </span>
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

export function MetamaterialResearch() {
  const [open, setOpen] = useState(false)
  const [start, setStart] = useState(0)

  const openAt = (i: number) => {
    setStart(i)
    setOpen(true)
  }

  return (
    <section id="metamaterial" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Research"
          title="Metamaterial Absorber Research"
          description="Research on GHz and THz metamaterial absorbers for electromagnetic sensing and absorption applications."
        />

        <Reveal>
          <article className="glass gradient-border overflow-hidden rounded-3xl">
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Hero image */}
              <button
                onClick={() => openAt(0)}
                aria-label="Open metamaterial gallery"
                className="group relative aspect-[4/3] overflow-hidden lg:aspect-auto"
              >
                <Image
                  src="/metamaterial/unit-cell.png"
                  alt="CST Studio metamaterial absorber unit cell simulation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent lg:bg-gradient-to-r" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  <Images className="h-3.5 w-3.5 text-primary" />
                  {gallery.length} figures
                </span>
              </button>

              {/* Content */}
              <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <Waves className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">
                    GHz / THz Absorbers
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold leading-snug text-balance sm:text-2xl">
                  Multi-resonant metamaterial absorbers for electromagnetic
                  sensing
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Design and full-wave simulation of periodic metamaterial
                  absorber structures achieving near-unity absorption across
                  multiple resonant bands. The work spans unit-cell
                  optimization in CST Studio Suite, surface-current and E-field
                  analysis, and fabricated prototypes for sensing and shielding
                  applications.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-card/50 p-3">
                    <p className="font-mono text-lg font-semibold text-primary">
                      &gt; 99%
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Peak absorptivity
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card/50 p-3">
                    <p className="font-mono text-lg font-semibold text-primary">
                      GHz–THz
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Operating band
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openAt(0)}
                  className="mt-1 inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  <Images className="h-4 w-4" />
                  View simulation &amp; prototype gallery
                </button>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="border-t border-border p-4 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                <Cpu className="h-3.5 w-3.5 text-primary" />
                CST simulation images &amp; fabricated prototypes
              </div>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                {gallery.map((item, i) => (
                  <button
                    key={item.src}
                    onClick={() => openAt(i)}
                    aria-label={`View ${item.category}: ${item.caption}`}
                    className="group relative aspect-square overflow-hidden rounded-xl border border-border"
                  >
                    <Image
                      src={item.src || '/placeholder.svg'}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 640px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/20" />
                  </button>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      {open && <Lightbox start={start} onClose={() => setOpen(false)} />}
    </section>
  )
}
