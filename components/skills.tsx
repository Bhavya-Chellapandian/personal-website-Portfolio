import { Card, CardContent } from "@/components/ui/card"
import { Code, Monitor, Settings, Server } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "HTML", "CSS"],
    },
    {
      title: "Frontend",
      icon: Monitor,
      skills: ["Responsive Design", "Flexbox", "CSS Grid", "Media Queries"],
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: ["GitHub", "Visual Studio Code", "Git"],
    },
    {
      title: "Operating Systems",
      icon: Server,
      skills: ["Windows", "Linux (Basic)"],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <category.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-gray-600 text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
