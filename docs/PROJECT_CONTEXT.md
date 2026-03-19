# Gold Heart Homes — Project Context (Source of Truth)

## Ownership & intent
- `goldhearthomes.com` is client-owned. LeadsForward may optimize and rebuild; it must not “rewrite ownership intent” or introduce strategy that conflicts with the brand.
- Call tracking / CRM / reviews / reporting considerations matter structurally: every conversion path should funnel to the same primary intake (`/contact`) and be instrumentable via predictable UI affordances (CTA buttons, form submit, phone link).

## Brand positioning (most important)
Gold Heart Homes is **not** selling remodeling.
It is selling **clarity, control, and accountability through a design-build system**.

Everything on the site must reinforce:
- defined scope before construction begins
- one team responsible for design, permitting, construction, and project management
- no handoffs, fewer decision risks, and fewer surprises
- a calm, structured, repeatable delivery experience

## Visual direction (keep calm and premium)
- Tone: engineered, calm, precise, confident; not loud, not marketing-heavy.
- Headline voice: serif authority (`Playfair Display`) with clear hierarchy.
- Body voice: readable sans (`Inter`) with grounded, factual language.
- Color: use the existing Tailwind palette as the source of truth:
  - `primary` = architectural blue family (`text-primary-*`), used sparingly for accents and primary CTAs
  - `neutral` = grayscale for backgrounds, borders, and body text
  - minimal “warm accent” (current trust UI uses yellow stars) only for trust signals

## Tone of voice (copy rules)
- clarity beats cleverness
- outcome-first messaging
- frictionless CTAs/forms
- trust layered throughout the page (not in one big pitch)
- mobile-first conversion paths (CTAs remain reachable; navigation doesn’t trap users)
- grounded specificity (avoid hype; prefer operational details)

## UX strategy (homepage + internal pages)
### Homepage section order (do not change)
1. Hero (positioning + clarity)
2. Trust / Why Homeowners Choose (operational advantages)
3. Proof / Featured Work (quality + thinking, with short scope lines)
4. Process (control via a structured delivery system)
5. Services (scope framing + single accountable team reinforcement)
6. Testimonials (validation in editorial typography hierarchy)
7. Standards (comparison table vs industry norms)
8. Service Areas (geography confirmation + next step routing)
9. FAQ (decision-blocker removal)
10. Final CTA (clarity → planning → control → next step)

Note: The homepage currently does not include the prior “Interactive Explorer” section.

### Internal page strategy
- `Projects` pages: emphasize browseability and outcome clarity; support conversion with a consistent CTA (`FinalCTA`).
- `Services` pages: reinforce “what you get” and map service intent to the design-build operating model.
- `About / Financing / Areas Served / Resources / Contact`: each should answer one conversion question cleanly and route users back to structured intake.

## Component philosophy
- Modular, reusable components: each section is its own component with internal data constants (arrays) that can be exported into CMS later.
- Keep the structure flat and semantic (`section`, headings, lists, tables). Avoid extra wrappers.
- Prefer mapping over arrays for repeated content (cards, steps, FAQs, table rows).

## WordPress / Oxygen readiness rules
Plan for an easy migration by ensuring:
- content is centralized in small arrays/objects per component (hero copy, cards, steps, testimonials)
- section boundaries are clear and independent (Hero component, OutcomeChips component, etc.)
- semantic HTML is preserved and content can be edited independently
- no dependency on runtime-only styling for the core information (animations are progressive enhancement)
- avoid inline styling for layout/spacing; allow inline only for dynamic computed transforms (e.g., parallax) and animation delays.

## What NOT to do
- Do not redesign layout / section structure.
- Do not introduce new sections, new navigation patterns, or additional UI complexity.
- Do not replace “system/process” language with generic contractor marketing.
- Do not add buzzwords or fluff; do not stack adjectives.

