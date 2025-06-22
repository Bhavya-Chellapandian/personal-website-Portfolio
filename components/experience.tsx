import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Frontend Intern",
      company: "AKIMS Technologies Pvt. Ltd.",
      period: "Jun 2025 - Present",
      location: "Current Position",
      achievements: [
        "Developed responsive web pages that improved user experience and increased mobile engagement by 30% using HTML/CSS",
        "Improved software reliability and team collaboration by mastering debugging and version control with Git, leading to a 30% reduction in code errors",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "NSIC",
      period: "Jul 2024 - Jul 2024",
      location: "1 Month Internship",
      achievements: [
        "Developed mini full-stack applications using Visual Studio Code and Python, leading to a 30% improvement in user engagement and operational efficiency",
        "Explored backend scripting and deployment processes using Linux, improving deployment efficiency and understanding of server management",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-900 text-white rounded-lg">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <p className="text-lg font-semibold text-gray-700 mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{achievement}</span>
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
