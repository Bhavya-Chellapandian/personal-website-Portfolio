import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Calendar } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Adaptive Theme Changing UI",
      period: "Jan 2025 - May 2025",
      description: "Emotion-based UI that adapts themes using Python, HTML, and CSS",
      highlights: ["Presented at college tech events", "Innovative emotion detection"],
      github: "https://github.com/Bhavya-Chellapandian",
      technologies: ["Python", "HTML", "CSS"],
    },
    {
      title: "Udemy Clone Website",
      period: "Recent Project",
      description: "Front-end clone of Udemy homepage using HTML, CSS (Flexbox/Grid)",
      highlights: ["Fully responsive design", "Deployed via GitHub Pages"],
      technologies: ["HTML", "CSS", "Flexbox", "CSS Grid"],
    },
    {
      title: "Personal Portfolio Website",
      period: "Ongoing",
      description: "Built a clean, responsive personal website to showcase skills and projects",
      highlights: ["Modern design", "Fully responsive", "Professional presentation"],
      technologies: ["HTML", "CSS", "Responsive Design"],
    },
  ]

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{project.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIndex) => (
                        <span key={tIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.github && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="bg-white text-gray-900">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
