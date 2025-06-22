import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bhavyachellapandian@gmail.com",
      href: "mailto:bhavyachellapandian@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-63698 18153",
      href: "tel:+916369818153",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Thanjavur, Tamil Nadu",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <contact.icon className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{contact.label}</p>
                      {contact.href ? (
                        <a href={contact.href} className="text-gray-900 hover:text-gray-700 transition-colors">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-900">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
                  discuss projects, internships, or just connect!
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button key={index} variant="outline" className="bg-white text-gray-900" asChild>
                      <a href={social.href}>
                        <social.icon className="h-4 w-4 mr-2" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
