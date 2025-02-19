import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">Holistic Health & Natural Healing</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Vedavāyu integrates modern science with traditional healing to offer natural, effective, and personalized
          healthcare services without artificial medicine.
        </p>
        <Button className="bg-white text-teal-600 hover:bg-gray-100 rounded-full text-lg px-6 py-3">Discover Our Services</Button>
      </div>
    </section>
  )
}

