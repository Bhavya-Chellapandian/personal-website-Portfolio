import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      type: "award",
      title: "3rd Prize – Paper Presentation",
      organization: "Tagore Engineering College",
    },
    {
      type: "award",
      title: "1st Prize – Mini Project Expo",
      organization: "SRM Valliammai Engineering College",
    },
  ]

  const certifications = [
    {
      title: "Full Stack Development Course",
      organization: "Error Makes Clever Academy",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievements & Certifications</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Achievements */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Award className="h-5 w-5 mr-2 text-yellow-600" />
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-gray-900 mb-1">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.organization}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-gray-900 mb-1">{cert.title}</h4>
                      <p className="text-sm text-gray-600">{cert.organization}</p>
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
