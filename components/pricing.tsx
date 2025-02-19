import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    title: "Essential Health Checkup",
    price: "₹999",
    description: "Basic health assessment and consultation",
    features: [
      "Complete Blood Test (CBC, Sugar, Thyroid)",
      "Diet & Lifestyle Consultation",
      "Guided Meditation for Stress Relief (Online)",
    ],
  },
  {
    title: "Yoga & Detox Package",
    price: "₹1499",
    description: "Personalized yoga and detox program",
    features: [
      "Personalized Online Yoga for Detox & Digestion (2 sessions)",
      "Home Blood Test: CBC + Liver Function Test (LFT)",
      "Customized Detox & Nutrition Plan",
    ],
  },
  {
    title: "Complete Wellness Package",
    price: "₹1999",
    description: "Comprehensive health and wellness program",
    features: [
      "Home Blood Test: CBC, Thyroid, Lipid Profile",
      "1:1 Online Yoga for Immunity & Strength (3 sessions)",
      "Personalized Nutrition Plan for Weight & Energy Management",
    ],
  },
  {
    title: "Ultimate Health & Balance",
    price: "₹2499",
    description: "Advanced health assessment and personalized care",
    features: [
      "Advanced Blood Test: CBC, Sugar, Thyroid, Vitamin D, B12",
      "2 Yoga Sessions (Online) for Hormonal & Metabolic Balance",
      "1:1 Nutrition Consultation + Weekly Diet Plan",
      "Mindfulness & Stress Management Guidance",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-teal-600">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold text-gray-900 mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 rounded-full text-white">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

