import type React from "react"
import Header from "./header"
import Footer from "./footer"
import Head from "next/head"
import { JsonLd } from "react-schemaorg"
import type { Organization } from "schema-dts"

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title, description }: LayoutProps) {
  const siteTitle = title ? `${title} | Vedavāyu` : "Vedavāyu: Holistic Health & Natural Healing"
  const siteDescription =
    description ||
    "Vedavāyu integrates modern science with traditional healing to offer natural, effective, and personalized healthcare services without artificial medicine."

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>
      <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vedavāyu",
          description: "Holistic Health & Natural Healing",
          url: "https://www.vedavayu.com",
          logo: "https://www.vedavayu.com/logo.png",
          sameAs: ["https://www.facebook.com/vedavayu", "https://www.instagram.com/vedavayu"],
        }}
      />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

