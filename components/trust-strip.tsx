import { MapPin, Wrench, Clock, Users } from 'lucide-react'

const trustItems = [
  {
    icon: MapPin,
    text: "We come to you"
  },
  {
    icon: Wrench,
    text: "Pro-grade equipment"
  },
  {
    icon: Clock,
    text: "<24 hr reply"
  },
  {
    icon: Users,
    text: "Greater Hartford Area"
  }
]

export default function TrustStrip() {
  return (
    <section className="py-12 bg-card border-t border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}