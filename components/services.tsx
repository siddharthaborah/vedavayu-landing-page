import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, FlaskRoundIcon as Flask, Home, Salad, SpaceIcon as Yoga, Leaf } from "lucide-react"

const services = [
  {
    title: "Laboratory & Diagnostic Services",
    description: "Know your health before symptoms appear with our comprehensive tests and diagnostics.",
    icon: Flask,
    link: "/services/laboratory-diagnostics",
  },
  {
    title: "Home Physiotherapy & Rehabilitation",
    description: "Restore movement, relieve pain, and recover naturally with personalized home-based treatments.",
    icon: Home,
    link: "/services/home-physiotherapy",
  },
  {
    title: "Yoga & Meditation",
    description: "Reconnect with yourself, reduce stress, and cultivate a healthier, more balanced life.",
    icon: Yoga,
    link: "/services/yoga-meditation",
  },
  {
    title: "Online Nutrition & Diet Consultation",
    description: "Heal your body with food as medicine through personalized diet plans and nutrition coaching.",
    icon: Salad,
    link: "/services/nutrition-consultation",
  },
  {
    title: "Psychology and Well-being",
    description: "Empower yourself with knowledge and tools to cultivate a strong and balanced mind.",
    icon: Brain,
    link: "/services/psychology-wellbeing",
  },
  {
    title: "Online Naturopathy",
    description: "Experience holistic healing with personalized natural therapies and lifestyle guidance.",
    icon: Leaf,
    link: "/services/online-naturopathy",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-none cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

