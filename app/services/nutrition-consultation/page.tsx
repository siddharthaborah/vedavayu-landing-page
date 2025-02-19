import Layout from "@/components/layout"
import { CheckCircle, Salad } from "lucide-react"

export default function NutritionConsultation() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-teal-800">Online Nutrition & Diet Consultation</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">Heal your body with food as medicine!</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Personalized diet plans for better health & disease prevention.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Science-backed nutrition coaching for holistic well-being.</span>
              </li>
            </ul>
          </div>
          <div className="bg-teal-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-teal-800">Special Diet Plans Available:</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Salad className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Weight Management (Weight Loss/Gain)</span>
              </li>
              <li className="flex items-start">
                <Salad className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Diabetes & Heart Health Nutrition</span>
              </li>
              <li className="flex items-start">
                <Salad className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Gut Health & Detox Plans</span>
              </li>
              <li className="flex items-start">
                <Salad className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>PCOS & Women's Wellness Nutrition</span>
              </li>
              <li className="flex items-start">
                <Salad className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Immunity-Boosting & Lifestyle Disease Prevention</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

