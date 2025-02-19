import Layout from "@/components/layout"
import { CheckCircle, Activity } from "lucide-react"

export default function HomePhysiotherapy() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-teal-800">Home Physiotherapy & Rehabilitation</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">Restore movement, relieve pain, and recover naturally!</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Personalized treatment for mobility, pain relief & injury recovery.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Home-based physiotherapy for comfort & effectiveness.</span>
              </li>
            </ul>
          </div>
          <div className="bg-teal-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-teal-800">Treatments Offered:</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Activity className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Spine & Joint Therapy (Back pain, Neck pain, Arthritis)</span>
              </li>
              <li className="flex items-start">
                <Activity className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Post-Surgery & Injury Rehabilitation</span>
              </li>
              <li className="flex items-start">
                <Activity className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Sports Injury Management & Strength Recovery</span>
              </li>
              <li className="flex items-start">
                <Activity className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>Electrotherapy, Dry Needling, Acupuncture & Cupping Therapy</span>
              </li>
              <li className="flex items-start">
                <Activity className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                <span>IASTM (Instrument-Assisted Soft Tissue Mobilization)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

