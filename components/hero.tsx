import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">BC</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Bhavya Chellapandian</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">Aspiring Full-Stack Developer</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Final-year B.Tech IT student with hands-on experience as a Full Stack Developer Intern, skilled in
              building mini full-stack applications and exploring backend scripting.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>Thanjavur</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+91-63698 18153</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <span>bhavyachellapandian@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild className="bg-gray-900 text-white hover:bg-gray-800">
              <a href="https://github.com/Bhavya-Chellapandian" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700">
              <a href="https://www.linkedin.com/in/bhavya-chellapandian/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
