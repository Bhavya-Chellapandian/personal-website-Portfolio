import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Github, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Bhavya Chellapandian</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Aspiring Full-Stack Developer</p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Final-year B.Tech IT student with hands-on experience in full-stack development, passionate about creating
            innovative web solutions and exploring new technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Thanjavur</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91-63698 18153</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>bhavyachellapandian@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
