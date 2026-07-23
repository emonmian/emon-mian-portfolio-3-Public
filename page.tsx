import { ParticleBackground } from '@/components/particle-background'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Publications } from '@/components/publications'
import { Research } from '@/components/research'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Awards } from '@/components/awards'
import { Certifications } from '@/components/certifications'
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
        <Experience />
        <Publications />
        <Research />
        <Projects />
        <Skills />
        <Awards />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
