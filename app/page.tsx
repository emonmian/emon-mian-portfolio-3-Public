import { ParticleBackground } from '@/components/particle-background'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { ResearchVision } from '@/components/research-vision'
import { ResearchSummary } from '@/components/research-summary'
import { Experience } from '@/components/experience'
import { Publications } from '@/components/publications'
import { Research } from '@/components/research'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Awards } from '@/components/awards'
import { Certifications } from '@/components/certifications'
import { AllCertificates } from '@/components/all-certificates'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ResearchVision />
        <ResearchSummary />
        <Experience />
        <Publications />
        <Research />
        <Projects />
        <Skills />
        <Awards />
        <Certifications />
        <AllCertificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
