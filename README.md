# Detail Lab - Mobile Auto Detailing Website

A modern, responsive website for Detail Lab's mobile auto detailing services in Connecticut. Built with Next.js 14+, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Mobile-First Design**: Optimized for all devices with responsive layout
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **SEO Friendly**: Structured data, meta tags, and sitemap for search engines
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui + custom components
- **Fonts**: Inter (body) + Sora (headings) from Google Fonts
- **Icons**: Lucide React
- **Forms**: Custom form handling with validation

## 📱 Pages

- **Home (/)**: Hero video, services overview, before/after gallery, process steps, owner bio
- **Services (/services)**: Detailed pricing, image galleries, equipment information
- **Contact (/contact)**: Contact form, direct contact info, FAQ, service area map

## 🎨 Design System

### Colors (CSS Variables)
- **Primary**: `hsl(211 100% 27%)` - Detail Lab blue
- **Background**: `hsl(0 0% 0%)` - Black
- **Foreground**: `hsl(0 0% 100%)` - White
- **Muted**: `hsl(0 0% 11%)` - Dark gray
- **Accent**: Primary blue for highlights

### Typography
- **Headings**: Sora font family
- **Body**: Inter font family
- **Scale**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl

### Spacing
8pt grid system: 4, 8, 12, 16, 24, 32, 48, 64px

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading UI
│   ├── not-found.tsx      # 404 page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── sitemap.ts         # XML sitemap
│   ├── robots.ts          # Robots.txt
│   └── manifest.ts        # Web app manifest
├── components/            # React components
│   ├── ui/               # shadcn/ui base components
│   ├── navbar.tsx        # Site navigation
│   ├── hero-video.tsx    # Video hero section
│   ├── pricing-card.tsx  # Service pricing cards
│   └── ...               # Other custom components
├── data/                 # Data and content
│   └── services.ts       # Pricing, services, contact info
├── lib/                  # Utilities
│   └── utils.ts          # Tailwind class merging
└── public/               # Static assets
    ├── images/           # Photos and logos
    └── videos/           # Hero video
```

## 🔧 Configuration

### Updating Services & Pricing

Edit `/data/services.ts` to modify:
- Service prices and descriptions
- Contact information
- Equipment lists
- Image paths

### Adding Images

1. Add images to `/public/images/`
2. Update image references in `/data/services.ts`
3. Ensure proper alt text for accessibility

### SEO Configuration

- Metadata is configured in each page's `metadata` export
- JSON-LD structured data is in `app/layout.tsx`
- Update base URL in `app/sitemap.ts` and schema data

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📊 Performance Targets

- **Performance**: ≥95 (Lighthouse)
- **Accessibility**: ≥95 (Lighthouse)
- **Best Practices**: ≥95 (Lighthouse)
- **SEO**: ≥95 (Lighthouse)

## 🔍 SEO Features

- Semantic HTML structure
- Open Graph and Twitter Card meta tags
- JSON-LD structured data for LocalBusiness
- XML sitemap and robots.txt
- Optimized images with proper alt text
- Fast loading and Core Web Vitals optimization

## 📞 Contact Information

**Current Contact Details:**
- Phone: (860) 560-6294
- Email: efagin19@gmail.com, akibhabad7@gmail.com
- Service Area: Greater Hartford Area, Connecticut
- Response Time: <24 hours

## 🔄 Future Enhancements

- Online booking calendar integration
- Customer testimonials section
- Blog for SEO and customer education
- Gallery with before/after comparisons
- Service area expansion tracking

## 📝 License

Private project for Detail Lab mobile auto detailing service.
