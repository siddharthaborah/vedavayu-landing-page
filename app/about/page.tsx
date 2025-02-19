import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Smile, Users } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-teal-800">About Vedavāyu</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              At Vedavāyu, we believe in the power of holistic healing that goes beyond conventional medicine. Our name,
              derived from ancient wisdom, embodies our commitment to harmonizing modern science with traditional
              healing practices.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              We understand that true well-being encompasses not just the physical body, but also the mind and spirit.
              That's why our approach is rooted in the principle of treating the whole person, not just symptoms.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/pebble.jpg?height=400&width=600"
              alt="Vedavāyu Healing Center"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-teal-700">Our Philosophy</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Leaf,
              title: "Natural Healing",
              description: "We harness the power of nature and traditional wisdom for sustainable health.",
            },
            {
              icon: Heart,
              title: "Compassionate Care",
              description: "Our team is dedicated to providing empathetic and personalized care to every individual.",
            },
            {
              icon: Smile,
              title: "Holistic Wellness",
              description: "We focus on nurturing the mind, body, and spirit for complete well-being.",
            },
            {
              icon: Users,
              title: "Community Health",
              description: "We believe in empowering communities through health education and preventive care.",
            },
          ].map((item, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-none">
              <CardContent className="p-6">
                <item.icon className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-teal-700">Our Journey</h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Founded by a team of passionate healthcare professionals, Vedavāyu emerged from a vision to bridge the gap
            between traditional wisdom and modern science. Our journey began with a simple yet powerful idea: to provide
            accessible, natural, and effective healthcare solutions that empower individuals to take charge of their
            well-being.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Over the years, we've grown into a comprehensive wellness center, offering a wide range of services from
            diagnostic tests to yoga and mental health workshops. Our team of experts, including physicians,
            nutritionists, physiotherapists, and yoga instructors, work collaboratively to provide integrated care
            tailored to each individual's needs.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            At Vedavāyu, we're not just treating ailments; we're nurturing lifelong health and wellness. Join us on this
            journey of healing, discovery, and transformation.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-teal-700">Experience the Vedavāyu Difference</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Step into a world where ancient wisdom meets modern science, and where your journey to holistic well-being
            begins.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Start Your Healing Journey
          </button>
        </div>
      </main>
    </div>
  )
}

