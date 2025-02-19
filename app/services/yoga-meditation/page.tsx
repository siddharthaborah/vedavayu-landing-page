import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, SpaceIcon as Yoga } from "lucide-react"

export default function YogaMeditation() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-teal-800">Yoga & Meditation (Online & Offline)</h1>

        <p className="text-lg mb-8">
          At Vedavāyu, we believe that true well-being comes from within. Our Yoga & Meditation programs are designed to
          help you reconnect with yourself, reduce stress, and cultivate a healthier, more balanced life. Whether you
          join us online or in person, our expert-led sessions offer a holistic approach to healing, combining
          time-tested techniques with modern insights.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-800">What You'll Experience</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Yoga className="w-5 h-5 text-teal-600 mr-2" />
                Guided Sessions by Experts
              </CardTitle>
            </CardHeader>
            <CardContent>
              Learn authentic yoga and meditation practices from seasoned professionals who bring years of experience in
              traditional and therapeutic techniques.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 text-teal-600 mr-2" />
                Exclusive Booklets & Resources
              </CardTitle>
            </CardHeader>
            <CardContent>Take home practical guides to help you maintain consistency in your practice.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 text-teal-600 mr-2" />
                Personalized Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              Whether you're looking for relaxation, stress relief, or improved flexibility, we tailor our sessions to
              suit your needs.
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

