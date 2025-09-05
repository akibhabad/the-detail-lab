import { Metadata } from 'next'
import PricingCard from '@/components/pricing-card'
import ImageGallery from '@/components/image-gallery'
import CTABand from '@/components/cta-band'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
import { pricing, images } from '@/data/services'

export const metadata: Metadata = {
  title: 'Services & Pricing - Detail Lab Mobile Auto Detailing',
  description: 'Professional mobile auto detailing services in Connecticut. Exterior detailing from $75, interior detailing from $100, full packages from $175. Pro-grade equipment, we come to you.',
  openGraph: {
    title: 'Services & Pricing - Detail Lab Mobile Auto Detailing',
    description: 'Professional mobile auto detailing services in Connecticut. Exterior detailing from $75, interior detailing from $100, full packages from $175.',
  },
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Services & Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Professional mobile auto detailing with transparent pricing
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm font-medium text-primary">
              {pricing.notes}
            </p>
          </div>
        </div>
      </section>

      {/* Exterior Detailing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              🚗 Exterior Detailing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional exterior cleaning and protection services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {pricing.exterior.map((service, index) => (
              <PricingCard
                key={index}
                title={service.name}
                price={service.price}
                includes={service.includes}
              />
            ))}
          </div>

          <ImageGallery images={images.exterior} />
        </div>
      </section>

      {/* Interior Detailing */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              🧼 Interior Detailing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive interior cleaning and protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {pricing.interior.map((service, index) => (
              <PricingCard
                key={index}
                title={service.name}
                price={service.price}
                priceFrom={service.priceFrom}
                includes={service.includes}
                addons={service.addons}
              />
            ))}
          </div>

          <ImageGallery images={images.interior} />
        </div>
      </section>

      {/* Full Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              🚘 Full Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete interior and exterior detailing packages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pricing.packages.map((service, index) => (
              <PricingCard
                key={index}
                title={service.name}
                price={service.price}
                priceFrom={service.priceFrom}
                bestFor={service.bestFor}
                includes={index === 0 ? 
                  ["Basic Interior Detail", "Basic Exterior Wash", "Perfect for maintenance"] : 
                  ["Deep Interior Clean", "Clay & Hydro Sealant", "Maximum protection & cleanliness"]
                }
                className="border-primary/40"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Extras & Upgrades */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              🧩 Extras & Upgrades
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional services to enhance your vehicle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.extras.map((service, index) => (
              <PricingCard
                key={index}
                title={service.name}
                price={service.price}
                unit={service.unit}
                includes={[
                  index === 0 ? "Professional engine bay cleaning and dressing" :
                  index === 1 ? "Restore cloudy, yellowed headlights" :
                  "Professional trim restoration"
                ]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Equipment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              🔧 Professional Equipment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use only the highest quality equipment and top-of-the-line chemicals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-center">Interior Equipment</h3>
              <ul className="space-y-2">
                {pricing.equipment.interior.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-center">Exterior Equipment</h3>
              <ul className="space-y-2">
                {pricing.equipment.exterior.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  )
}