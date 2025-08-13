import HeroVideo from '@/components/hero-video'
import TrustStrip from '@/components/trust-strip'
import PricingCard from '@/components/pricing-card'
import BeforeAfterSlider from '@/components/before-after-slider'
import ProcessSteps from '@/components/process-steps'
import OwnerBio from '@/components/owner-bio'
import CTABand from '@/components/cta-band'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { pricing, images } from '@/data/services'

export default function HomePage() {
  // Get one service from each category for the summary
  const exteriorService = pricing.exterior[0]
  const interiorService = pricing.interior[0] 
  const packageService = pricing.packages[0]

  return (
    <>
      <HeroVideo />
      
      <TrustStrip />

      {/* Services Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Professional mobile detailing with three main service categories to meet your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <PricingCard
              title="Exterior Detailing"
              price={exteriorService.price}
              description="Complete exterior cleaning and protection"
              includes={exteriorService.includes}
              className="border-primary/20"
            />
            
            <PricingCard
              title="Interior Detailing"
              price={interiorService.price}
              description="Thorough interior cleaning and protection"
              includes={interiorService.includes}
              className="border-primary/20"
            />
            
            <PricingCard
              title="Full Packages"
              price={packageService.price}
              description="Complete interior and exterior service"
              includes={["Interior + Exterior Basic", "Best for maintenance"]}
              bestFor={packageService.bestFor}
              className="border-primary/20"
            />
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/services">View All Services & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              See the Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our professional detailing services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <BeforeAfterSlider
              beforeImage={images.exterior[0].src}
              afterImage={images.exterior[1].src}
              alt="Exterior detailing transformation"
            />
            <BeforeAfterSlider
              beforeImage={images.interior[0].src}
              afterImage={images.interior[2].src}
              alt="Interior detailing transformation"
            />
          </div>
        </div>
      </section>

      <ProcessSteps />

      <OwnerBio />

      <CTABand />
    </>
  )
}