# Gold Heart Homes — Design System (Implementation Guide)

## Source of truth
This document is aligned to the repo’s current Tailwind setup:
- `primary` color family: `text-primary-*` (architectural blue)
- `neutral` grayscale: `bg-neutral-*`, `text-neutral-*`, `border-neutral-*`
- typography from `next/font/google`:
  - serif headlines: `font-serif` (Playfair Display)
  - body text: `font-sans`/`Inter` (via `globals.css` + Tailwind config)

## Color palette (use as-is)
- Primary (CTAs + accents): `primary.600` / `primary.700` (`bg-primary-600`, `hover:bg-primary-700`)
- Surfaces: `bg-white`, `bg-neutral-50`, `bg-neutral-900`
- Text: `text-neutral-900` (headlines), `text-neutral-700/600` (body), `text-neutral-500` (supporting)
- Borders: `border-neutral-200/300/100`
- Minimal warm accent:
  - used for trust signals (e.g., rating stars currently use yellow)

## Typography hierarchy (keep consistent)
Use the existing “scale” already present in components:
- `h1`: hero headline uses `text-4xl sm:text-5xl lg:text-6xl font-serif font-bold`
- `h2`: section headers commonly use `text-3xl lg:text-4xl font-serif font-bold`
- `h3`: card/testimonial names use `text-xl/larger font-serif font-semibold` depending on context
- Body:
  - standard: `text-lg text-neutral-600/700`
  - supporting: `text-sm text-neutral-600`

Rules:
- do not introduce random font sizes; reuse the patterns already present in existing components
- keep line-length reasonable (Tailwind typography config sets max width)

## Spacing system (vertical rhythm)
Reuse the repo’s section containers:
- section padding: commonly `py-20 lg:py-32` or `py-16 lg:py-24`
- internal max width container: `max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8`
- centered text blocks: `text-center` with `mb-12 lg:mb-16`

Rules:
- avoid hardcoded spacing outside existing utility patterns
- keep section-to-section rhythm consistent

## Button system
Use two primary button styles:
1. Filled primary CTA
   - `bg-primary-600 text-white`
   - hover: `hover:bg-primary-700`
   - shape: `rounded-md` or `rounded-lg`
   - minimum height: `min-h-[44px]`
2. Outline / light CTA
   - border: `border-2 border-primary-600` or similar
   - text: `text-primary-600`

Rules:
- avoid new button variants unless they’re necessary

## Card system
Common card patterns in the repo:
- light cards: `bg-white border border-neutral-200 rounded-[12px]`
- larger project cards: `rounded-[16px] overflow-hidden bg-white shadow-sm`
- subtle hover: `hover:shadow-lg` and small border/overlay shifts

## Section rules
Each section component should:
- be a single semantic `section` root
- include a predictable inner container (`max-w-[1280px] ...`)
- contain one clear primary heading (`h2`/`h1` inside component)

## Icon/image usage rules
- icons: use lucide-react and keep sizing consistent (`w-4 h-4` or `w-5 h-5`)
- images:
  - use `next/image` with `fill` and `className="object-cover"`
  - prefer calm residential imagery
  - avoid heavy overlays that introduce visual noise

## Hover / interactivity rules
Keep interactivity subtle:
- cards: small shadow elevation
- text: small color transitions
- avoid complex animations that distract from content clarity

## Consistency rules
- keep CTAs and headings aligned with the conversion intent (clarity → control → next step)
- don’t add new UI patterns without updating docs

