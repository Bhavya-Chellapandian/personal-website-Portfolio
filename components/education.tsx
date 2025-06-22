import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Bachelor of Technology - Information Technology
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">SRM Valliammai Engineering College, Chennai</p>
                  <p className="text-gray-600 mb-2">Kattankulathur</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500">
                    <span>2022 - May 2026</span>
                    <span className="font-medium">GPA: 8.0</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
