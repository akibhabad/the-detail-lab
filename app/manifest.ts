import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Detail Lab - Professional Mobile Auto Detailing',
    short_name: 'Detail Lab',
    description: 'Professional mobile auto detailing services across Connecticut. We come to you with pro-grade equipment.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#023e8a',
    icons: [
      {
        src: '/images/logo192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}