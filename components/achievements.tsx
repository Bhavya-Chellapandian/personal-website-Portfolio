import { Card, CardContent } from "@/components/ui/card"
import { Award, Trophy, BookOpen } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      type: "Award",
      title: "3rd Prize – Paper Presentation",
      organization: "Tagore Engineering College",
      icon: Trophy,
    },
    {
      type: "Award",
      title: "1st Prize – Mini Project Expo",
      organization: "SRM Valliammai Engineering College",
      icon: Award,
    },
  ]

  const certifications = [
    {
      title: "Full Stack Development Course",
      organization: "Error Makes Clever Academy",
      icon: BookOpen,
    },
  ]

  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Achievements & Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gray-900 text-white rounded-lg">
                          <achievement.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                          <p className="text-gray-600">{achievement.organization}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gray-900 text-white rounded-lg">
                          <cert.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{cert.title}</h4>
                          <p className="text-gray-600">{cert.organization}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
