import { FileText, Eye, Download, FolderArchive, Award } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const PDF_PATH = '/certificates/all-certificates.pdf'
const TOTAL_CERTIFICATES = 12

export function AllCertificates() {
  return (
    <section id="all-certificates" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Repository"
          title="All Certificates"
          description="Central repository of professional certificates, workshops, trainings, and academic achievements."
        />

        <Reveal>
          <article className="glass gradient-border overflow-hidden rounded-3xl">
            <div className="grid gap-0 sm:grid-cols-[minmax(0,1fr)_auto]">
              {/* Left: document info */}
              <div className="flex flex-col gap-6 p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <FolderArchive className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      Certificate Repository
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Consolidated PDF of all credentials
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-card/50 px-3 py-2">
                    <Award className="h-4 w-4 text-primary" />
                    <div className="leading-tight">
                      <p className="font-mono text-sm font-semibold text-foreground">
                        {TOTAL_CERTIFICATES}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Certificates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-card/50 px-3 py-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <div className="leading-tight">
                      <p className="font-mono text-sm font-semibold text-foreground">
                        PDF
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Single document
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  A single, downloadable PDF compiling professional
                  certificates, workshop attendances, industrial trainings, and
                  academic achievements — organized for MSc, PhD, research
                  assistantship, and scholarship applications.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={PDF_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                  >
                    <Eye className="h-4 w-4" />
                    View PDF
                  </a>
                  <a
                    href={PDF_PATH}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>

              {/* Right: PDF preview icon panel */}
              <div className="flex items-center justify-center border-t border-border bg-card/30 p-8 sm:border-l sm:border-t-0">
                <div className="relative flex aspect-[3/4] w-40 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background/60 shadow-lg shadow-black/20">
                  <span className="absolute right-2 top-2 rounded-md bg-primary/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary">
                    PDF
                  </span>
                  <FileText className="h-14 w-14 text-primary" />
                  <p className="px-3 text-center text-xs text-muted-foreground">
                    Certificates.pdf
                  </p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
