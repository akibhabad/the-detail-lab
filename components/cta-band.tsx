import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import { contact } from '@/data/services'

export default function CTABand() {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-2">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Questions? Text or call {contact.phone}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              variant="secondary" 
              size="lg"
              className="text-lg px-8"
            >
              <Link href="/contact">Book Now</Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href={`tel:${contact.phone.replace(/\D/g, '')}`} className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call {contact.phone}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}