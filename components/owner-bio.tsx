"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ownerBio, images } from '@/data/services'

export default function OwnerBio() {
  const [showOriginal, setShowOriginal] = useState(false)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={images.owner.src}
                    alt={images.owner.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    Meet the Team
                  </h2>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {showOriginal ? ownerBio.originalBio : ownerBio.professionalBio}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant={showOriginal ? "outline" : "default"}
                      size="sm"
                      onClick={() => setShowOriginal(false)}
                    >
                      Professional
                    </Button>
                    <Button
                      variant={showOriginal ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowOriginal(true)}
                    >
                      Personal Story
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}