import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Settings, Monitor } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "HTML", "CSS"],
    },
    {
      title: "Frontend",
      icon: Palette,
      skills: ["Responsive Design", "Flexbox", "CSS Grid", "Media Queries"],
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: ["GitHub", "Visual Studio Code", "Git"],
    },
    {
      title: "Operating Systems",
      icon: Monitor,
      skills: ["Windows", "Linux (Basic)"],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-gray-900 text-white rounded-lg w-fit mb-4">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-600 text-center">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
