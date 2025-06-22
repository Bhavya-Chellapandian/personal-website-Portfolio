import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Adaptive Theme Changing UI",
      period: "Jan 2025 - May 2025",
      description: "Emotion-based UI that adapts themes using Python, HTML, and CSS",
      highlights: ["Presented at college tech events"],
      github: "https://github.com/Bhavya-Chellapandian",
      technologies: ["Python", "HTML", "CSS"],
    },
    {
      title: "Udemy Clone Website",
      description: "Front-end clone of Udemy homepage using HTML, CSS (Flexbox/Grid)",
      highlights: ["Fully responsive and deployed via GitHub Pages"],
      technologies: ["HTML", "CSS", "Flexbox", "Grid"],
    },
    {
      title: "Personal Portfolio Website",
      description: "Built a clean, responsive personal website to showcase skills/projects",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ]

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  {project.period && <p className="text-sm text-gray-500 mb-3">{project.period}</p>}
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {project.highlights && (
                    <ul className="mb-4 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.github && (
                  <div className="flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="bg-gray-900 text-white border-gray-900 hover:bg-gray-800"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
