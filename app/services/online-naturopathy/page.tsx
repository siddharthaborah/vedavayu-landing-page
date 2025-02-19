import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Activity, Zap, Heart, Moon, CheckCircle, Users } from "lucide-react"

export default function OnlineNaturopathy() {
  return (
    <Layout
      title="Online Naturopathy Services"
      description="Experience holistic healing with Vedavāyu's online naturopathy services. Personalized natural therapies and lifestyle guidance for optimal health."
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-teal-800">Online Naturopathy</h1>

        <h2 className="text-2xl font-semibold mb-4 text-teal-800">What We Offer in Online Naturopathy</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Leaf className="w-5 h-5 text-teal-600 mr-2" />
                Personalized Health Assessments
              </CardTitle>
            </CardHeader>
            <CardContent>Understand your body's needs naturally.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 text-teal-600 mr-2" />
                Diet & Lifestyle Correction
              </CardTitle>
            </CardHeader>
            <CardContent>Tailored plans for disease prevention & healing.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 text-teal-600 mr-2" />
                Detox & Cleansing Guidance
              </CardTitle>
            </CardHeader>
            <CardContent>Natural ways to remove toxins & boost immunity.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="w-5 h-5 text-teal-600 mr-2" />
                Holistic Disease Management
              </CardTitle>
            </CardHeader>
            <CardContent>Natural solutions for diabetes, PCOS, gut health, & more.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Moon className="w-5 h-5 text-teal-600 mr-2" />
                Stress & Sleep Management
              </CardTitle>
            </CardHeader>
            <CardContent>Relaxation techniques using nature's healing methods.</CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-teal-800">Treatments & Therapies We Guide You On</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { title: "Herbal & Dietary Therapy", description: "Heal with natural foods & herbs." },
            { title: "Fasting Therapy", description: "Detox your body for better metabolism & energy." },
            { title: "Hydrotherapy Guidance", description: "Water-based healing for inflammation & stress." },
            { title: "Mud Therapy", description: "Improve circulation & reduce pain naturally." },
            { title: "Lifestyle Correction Plans", description: "Natural solutions for chronic conditions." },
          ].map((therapy, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2" />
                  {therapy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{therapy.description}</CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-teal-800">Who Can Benefit?</h2>
        <ul className="grid md:grid-cols-2 gap-4 mb-12">
          {[
            "People with chronic conditions (Diabetes, PCOS, Hypertension, Digestive Issues)",
            "Anyone seeking drug-free, natural healing solutions",
            "Those looking for holistic weight management & detox",
            "People struggling with stress, anxiety, & poor sleep",
          ].map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Users className="w-5 h-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

