import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Your Healing Journey?</h2>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
          Book an appointment with our experts and take the first step towards holistic well-being.
        </p>
        <a
          href="https://wa.me/message/TV43SBJ3HAY5E1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="bg-white text-teal-600 rounded-full hover:bg-gray-100 text-lg px-6 py-3">Book Your Appointment</Button>
        </a>
      </div>
    </section>
  )
}

