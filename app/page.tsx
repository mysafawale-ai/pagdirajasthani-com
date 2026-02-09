import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { DynamicContactForm } from "@/components/dynamic-contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicServicesSection } from "@/components/dynamic-services-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"

// Domain: pagdirajasthani.com
// Brand: Rajasthani Safa
// Location: Rajasthan

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DynamicHeroSlider location="Rajasthan" />
      <DynamicAboutSection location="Rajasthan" />
      <DynamicContactForm location="Rajasthan" domain="pagdirajasthani.com" />
      <GallerySection />
      <DynamicServicesSection location="Rajasthan" domain="pagdirajasthani.com" />
      <DynamicFooter location="Rajasthan" domain="pagdirajasthani.com" />
      <WhatsAppFloat />
    </main>
  )
}
