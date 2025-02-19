import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Music, Users, Sparkles } from "lucide-react"

export default function PsychologyWellbeing() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-teal-800">Psychology and Well-being Department</h1>

        <p className="text-lg mb-8">
          Mental well-being is just as important as physical health. At Vedavāyu, we focus on preventive mental wellness
          through engaging workshops, interactive learning, and skill-building sessions—empowering individuals with the
          knowledge and tools to cultivate a strong and balanced mind.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-800">Our Offerings</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="w-5 h-5 text-teal-600 mr-2" />
                Psychology & Mental Health Workshops
              </CardTitle>
            </CardHeader>
            <CardContent>
              Gain insights into emotional intelligence, stress management, and holistic well-being from industry
              experts.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="w-5 h-5 text-teal-600 mr-2" />
                Life Coaching & Self-Development Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              Enhance self-awareness, goal setting, and mindful living through structured programs.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Music className="w-5 h-5 text-teal-600 mr-2" />
                Expressive Therapy
              </CardTitle>
            </CardHeader>
            <CardContent>
              Explore creativity as a tool for emotional healing through music, movement, and artistic expression.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 text-teal-600 mr-2" />
                Group Discussions & Awareness Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              Engage in meaningful conversations on mental health, lifestyle balance, and personal growth.
            </CardContent>
          </Card>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-yellow-800">Note:</h3>
          <p>
            We do not provide individual counseling or therapy. Our focus is on preventive mental well-being and
            empowering individuals through psychology-based knowledge and practices.
          </p>
        </div>
      </div>
    </Layout>
  )
}

