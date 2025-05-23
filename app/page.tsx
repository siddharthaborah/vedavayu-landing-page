import Layout from "@/components/layout"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Pricing from "@/components/pricing"
import CTA from "@/components/cta"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <Layout
      title="Holistic Health & Natural Healing"
      description="Vedavāyu offers natural, effective, and personalized healthcare services integrating modern science with traditional healing. Discover our range of holistic health solutions and pricing plans."
    >
      <Hero />
      <Services />
      <Pricing />
      <CTA />
      <Analytics />
      <SpeedInsights/>
    </Layout>
  )
}

