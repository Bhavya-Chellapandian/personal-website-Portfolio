import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Frontend Intern",
      company: "AKIMS Technologies Pvt. Ltd.",
      period: "Jun 2025 - Present",
      achievements: [
        "Developed responsive web pages that improved user experience and increased mobile engagement by 30% using HTML/CSS",
        "Improved software reliability and team collaboration by mastering debugging and version control with Git, leading to a 30% reduction in code errors",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "NSIC",
      period: "Jul 2024 - Jul 2024",
      achievements: [
        "Developed mini full-stack applications using Visual Studio Code and Python, leading to a 30% improvement in user engagement and operational efficiency",
        "Explored backend scripting and deployment processes using Linux, improving deployment efficiency and understanding of server management",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 mt-1 sm:mt-0">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
