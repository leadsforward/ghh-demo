# Gold Heart Homes - Premium Remodeling Website

A production-grade, conversion-optimized website prototype for Gold Heart Homes, a premium residential remodeling company in Kansas City, MO.

## Overview

This is a fully working, SEO-ready website prototype built with Next.js 14, TypeScript, and Tailwind CSS. The site is designed to balance high-end aesthetics with strict conversion logic and performance optimization.

## Features

### Conversion-Optimized Structure
- **10-Section Homepage Flow**: Exact sequence following conversion best practices
- **Service Pages**: Comprehensive templates for Kitchen, Bathroom, and Whole-Home remodeling
- **Projects/Case Studies**: Editorial case study system with detailed project narratives
- **Contact Forms**: Optimized forms with max 5 fields, inline validation, and human microcopy

### SEO & Performance
- **Structured Data**: FAQ and LocalBusiness schema markup
- **Semantic HTML**: Proper heading hierarchy and accessibility features
- **Core Web Vitals**: Optimized images (WebP/AVIF), lazy loading, and performance budgets
- **Mobile-First**: Responsive design with sticky mobile CTAs

### Design & Brand
- **Premium Aesthetics**: Editorial spacing, typography discipline, architectural feel
- **Calm & Refined**: No contractor clichés, professional and confident
- **Typography**: Playfair Display for headings, Inter for body text

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image component with WebP/AVIF optimization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── about/              # About page
│   ├── areas-served/       # Service areas page
│   ├── contact/            # Contact form page
│   ├── financing/          # Financing options page
│   ├── projects/           # Projects listing and case studies
│   ├── resources/          # Resources/blog page
│   ├── services/           # Service pages (Kitchen, Bathroom, Whole-Home)
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Homepage
├── components/
│   ├── homepage/           # Homepage section components
│   ├── services/           # Service page components
│   ├── Footer.tsx          # Site footer
│   ├── Header.tsx          # Site header/navigation
│   └── StructuredData.tsx # SEO schema components
└── public/                 # Static assets
```

## Key Pages

### Homepage (`/`)
10-section conversion-optimized flow:
1. Hero with proof
2. Outcome Chips
3. Problem + Agitation
4. Mentor Introduction
5. Core Benefits
6. Social Proof
7. Process
8. Flex Section (Comparison)
9. Feature Spec List
10. FAQ + Final CTA

### Service Pages (`/services/[service]`)
- Kitchen Remodeling
- Bathroom Remodeling
- Whole-Home Remodeling

Each includes:
- Mini-hero with proof + CTA
- Problem + risks
- Solutions (accordion)
- Before/after gallery
- Process + timeline
- Investment ranges + financing
- Warranties
- Service-specific testimonials
- FAQ
- Coverage map
- Final CTA

### Projects (`/projects`)
Editorial case study system with:
- Goal
- Constraints
- Solution
- Timeline highlights
- Materials
- Outcome
- CTA

## Conversion Features

- **Sticky Header**: Persistent navigation and phone number
- **Mobile Sticky CTA**: Bottom sticky CTA on mobile devices
- **Trust Signals**: Reviews, warranties, guarantees throughout
- **Clear CTAs**: Primary action buttons with clear value proposition
- **Frictionless Forms**: Max 5 fields, inline validation, helpful microcopy

## SEO Features

- **Structured Data**: FAQ and LocalBusiness schema
- **Meta Tags**: Comprehensive OpenGraph and Twitter cards
- **Semantic HTML**: Proper heading hierarchy (H1, H2, H3)
- **Internal Linking**: Strategic links between pages
- **Local SEO**: Area-specific content and location pages

## Performance Optimizations

- **Image Optimization**: Next.js Image with WebP/AVIF formats
- **Lazy Loading**: Below-the-fold images load on demand
- **Font Optimization**: Self-hosted fonts with display: swap
- **Code Splitting**: Automatic with Next.js App Router
- **Minimal JavaScript**: Client components only where needed

## Accessibility

- **AA Contrast**: All text meets WCAG AA standards
- **Semantic HTML**: Proper use of headings, landmarks, and ARIA
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus States**: Visible focus indicators
- **Alt Text**: Descriptive alt text for all images

## Future Expansion Points

The architecture supports future features:
- Guided project planner
- Materials/style selectors
- Interactive kitchen/bath visual map
- Blog/content management
- Review generation system
- CRM integration hooks

## Notes

- Phone numbers and contact information are placeholders
- Images use Unsplash placeholders (replace with actual project photos)
- Form submissions are simulated (integrate with your backend/CRM)
- Review data is placeholder (integrate with review platform)

## License

Proprietary - Gold Heart Homes / LeadsForward
