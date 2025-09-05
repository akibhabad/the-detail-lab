import { Metadata } from 'next'
import ContactForm from '@/components/contact-form'
import MapCard from '@/components/map-card'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import { contact } from '@/data/services'

export const metadata: Metadata = {
  title: 'Contact Us - Detail Lab Mobile Auto Detailing',
  description: 'Contact Detail Lab for professional mobile auto detailing in Connecticut. Call (860) 560-6294 or email for quotes. We serve the Greater Hartford Area with <24hr response time.',
  openGraph: {
    title: 'Contact Us - Detail Lab Mobile Auto Detailing',
    description: 'Contact Detail Lab for professional mobile auto detailing in Connecticut. Call (860) 560-6294 or email for quotes.',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your vehicle? Get in touch for a personalized quote
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 pb-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Direct Contact
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">
                        Phone (Call or Text)
                      </h4>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <Link href={`tel:${contact.phone.replace(/\D/g, '')}`} className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {contact.phone}
                        </Link>
                      </Button>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">
                        Email
                      </h4>
                      <div className="space-y-2">
                        {contact.emails.map((email, index) => (
                          <Button key={index} asChild variant="outline" className="w-full justify-start">
                            <Link href={`mailto:${email}`} className="flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              {email}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">
                        Response Time
                      </h4>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>We respond in {contact.responseTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Area Map */}
              <MapCard />

              {/* Booking Information */}
              <Card className="relative z-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Booking Information
                  </h3>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Service Hours:</strong> Monday - Sunday, 8:00 AM - 6:00 PM
                    </p>
                    <p>
                      <strong className="text-foreground">Scheduling:</strong> We typically book 1-3 days in advance
                    </p>
                    <p>
                      <strong className="text-foreground">What to expect:</strong> We'll confirm your appointment, 
                      arrive with all equipment, and provide a thorough walk-through when complete.
                    </p>
                    <p>
                      <strong className="text-foreground">Payment:</strong> Cash, Venmo, Zelle, or check accepted
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clear separation */}
      <div className="h-16 bg-background"></div>

      {/* FAQ Section */}
      <section className="py-16 pb-24 bg-muted/30 relative z-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about our mobile detailing service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How long does a detail take?</h3>
                <p className="text-sm text-muted-foreground">
                  Interior details typically take 1-2 hours, exterior details 1-1.5 hours, 
                  and full packages 2-3 hours depending on vehicle size and condition.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do I need to provide water or electricity?</h3>
                <p className="text-sm text-muted-foreground">
                  We bring our own water and equipment. We only need access to a standard 
                  electrical outlet for some of our tools.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What if it's raining?</h3>
                <p className="text-sm text-muted-foreground">
                  We can perform interior details in any weather. For exterior work, 
                  we'll reschedule if conditions aren't suitable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How do I prepare my vehicle?</h3>
                <p className="text-sm text-muted-foreground">
                  Just remove personal items from inside. We'll handle everything else, 
                  including moving your vehicle if needed for better access.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}