"use client"

import { Card, CardContent } from '@/components/ui/card'
import { MapPin } from 'lucide-react'

export default function MapCard() {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Service Area
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">
              Primary Coverage
            </h4>
            <p className="text-lg font-semibold">Greater Hartford Area</p>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">
              Service Counties
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Hartford County</li>
              <li>• Parts of Fairfield County</li>
              <li>• Middlesex County (select areas)</li>
              <li>• New Haven County (select areas)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">
              Mobile Service
            </h4>
            <p className="text-sm text-muted-foreground">
              We bring our professional equipment directly to your location—whether 
              it's your home, office, or anywhere convenient for you.
            </p>
          </div>

          {/* Simple visual representation */}
          <div className="bg-muted/30 rounded-lg p-4 mt-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-medium">Connecticut Mobile Service</p>
              <p className="text-xs text-muted-foreground">Professional detailing at your location</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}