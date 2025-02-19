import Layout from "@/components/layout"
import { CheckCircle, Droplet } from "lucide-react"

export default function LaboratoryDiagnostics() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-teal-800">Laboratory & Diagnostic Services</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">Know your health before symptoms appear!</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Home blood collection for convenience.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Early disease detection & preventive health check-ups.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Comprehensive reports for better decision-making.</span>
              </li>
            </ul>
          </div>
          <div className="bg-teal-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-teal-800">Treatments & Tests Offered:</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Droplet className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Routine Blood Tests (CBC, Sugar, Thyroid, etc.)</span>
              </li>
              <li className="flex items-start">
                <Droplet className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Hormonal & Vitamin Deficiency Tests</span>
              </li>
              <li className="flex items-start">
                <Droplet className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Liver, Kidney & Heart Function Tests</span>
              </li>
              <li className="flex items-start">
                <Droplet className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Allergy & Infection Screenings</span>
              </li>
              <li className="flex items-start">
                <Droplet className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Cancer Marker & Advanced Diagnostics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

