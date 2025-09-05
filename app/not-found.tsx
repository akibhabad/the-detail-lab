import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl font-heading font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-heading font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. 
            Let's get you back to our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}