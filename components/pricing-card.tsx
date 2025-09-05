import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
import Link from 'next/link'

interface PricingCardProps {
  title: string
  price?: number
  priceFrom?: number
  subtitle?: string
  description?: string
  includes: string[]
  addons?: string[]
  bestFor?: string
  unit?: string
  className?: string
}

export default function PricingCard({ 
  title, 
  price, 
  priceFrom, 
  subtitle,
  description, 
  includes, 
  addons,
  bestFor,
  unit,
  className 
}: PricingCardProps) {
  const formatPrice = (amount: number) => {
    return unit ? `$${amount}/${unit}` : `$${amount}`
  }

  const displayPrice = price ? formatPrice(price) : priceFrom ? `from ${formatPrice(priceFrom)}` : ""

  return (
    <Card className={`relative h-full ${className}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            {subtitle && (
              <CardDescription className="text-sm mt-1">{subtitle}</CardDescription>
            )}
            {bestFor && (
              <Badge variant="secondary" className="mt-2">
                {bestFor}
              </Badge>
            )}
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{displayPrice}</div>
          </div>
        </div>
        {description && (
          <CardDescription className="mt-3">{description}</CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Includes:</h4>
          <ul className="space-y-2">
            {includes.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {addons && addons.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Add-ons:</h4>
            <ul className="space-y-1">
              {addons.map((addon, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  • {addon}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/contact">Book This Service</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}