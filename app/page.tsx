import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
