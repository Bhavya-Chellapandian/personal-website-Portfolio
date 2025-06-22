import { Card, CardContent } from "@/components/ui/card"
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
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Bhavya-Chellapandian",
      color: "bg-gray-900 hover:bg-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bhavya-chellapandian/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
  ]

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Feel free to reach out if you'd
            like to connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <contact.icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{contact.label}</p>
                          {contact.href ? (
                            <a href={contact.href} className="text-gray-900 hover:text-blue-600 transition-colors">
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-gray-900">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <Button key={index} asChild className={`w-full justify-start text-white ${social.color}`}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-4 w-4 mr-3" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>

              <Card className="mt-6">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Ready to collaborate?</h4>
                  <p className="text-gray-600 mb-4">Let's discuss how we can work together on your next project.</p>
                  <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                    <a href="mailto:bhavyachellapandian@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
