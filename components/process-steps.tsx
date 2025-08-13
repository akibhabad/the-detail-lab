import { Calendar, MapPin, Sparkles, HandMetal } from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    title: "Book",
    description: "Schedule your detailing appointment online or by phone"
  },
  {
    icon: MapPin,
    title: "We Arrive",
    description: "Our team comes to your location with professional equipment"
  },
  {
    icon: Sparkles,
    title: "Detail",
    description: "We meticulously clean and protect your vehicle inside and out"
  },
  {
    icon: HandMetal,
    title: "Walk-through",
    description: "We review the completed work with you to ensure satisfaction"
  }
]

export default function ProcessSteps() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Simple Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From booking to completion, we make professional car detailing effortless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative text-center">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 transform translate-x-8 z-0" />
                )}
                
                <div className="relative bg-card rounded-lg p-6 shadow-sm border">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}