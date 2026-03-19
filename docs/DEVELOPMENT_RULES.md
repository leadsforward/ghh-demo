# Gold Heart Homes — Development Rules (Repo Standard)

## Semantic structure guidance
- Keep sections flat and logical: use `section` blocks with a single main heading per section.
- Use semantic elements where they exist:
  - `h1` / `h2` / `h3` hierarchy (no skipped levels without reason)
  - `ul` / `li` for repeated lists
  - `table` elements for comparison tables
- Avoid excessive wrapper div nesting when not needed for layout.

## Component modularity (CMS-ready)
Each major homepage block is already implemented as a standalone component:
- `Hero`
- `OutcomeChips`
- `FeaturedWork`
- `Process`
- `CoreBenefits`
- `InteractiveExplorer`
- `SocialProof`
- `FlexSection`
- `ServiceAreas`
- `FAQ`
- `FinalCTA`

Rules for future edits:
- Keep all content in small local constants (arrays/objects) inside each component.
- Ensure each component can be moved into a CMS as one block by replacing the constants with CMS fields.
- Avoid cross-component coupling (no imports of sibling content constants).

## Reusable patterns
Preferred patterns already present in the repo:
- section container pattern: `max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8`
- “text-center” framing block: centered heading + constrained supporting paragraph
- maps over arrays for cards/steps/testimonials/table rows
- IntersectionObserver for subtle progressive reveals (optional, never blocking content)

## Class naming standards (BEM-style guidance)
The repo primarily uses Tailwind utility classes today. For future CMS portability and WordPress/Oxygen rebuilds:
- Add a semantic “block” class in addition to utilities (examples):
  - `hero`
  - `hero__headline`
  - `section-intro`
  - `comparison-table`
- Keep Tailwind utilities for spacing/visuals; use semantic classes to identify meaning.

Constraint:
- Do not refactor existing production code purely to rename classes.
Only add semantic class hooks when you touch a block.

## No inline styles (with an explicit exception)
Rule:
- Avoid inline styles for layout/spacing/typography.
Exception:
- Inline styles are acceptable for dynamic computed values, such as:
  - parallax transform styles
  - `transitionDelay` values derived from indexes

## WordPress / Oxygen Builder conversion readiness
For easy rebuild:
- Keep images referenced as URLs (or stable media field keys in CMS).
- Ensure the content structure is deterministic:
  - arrays of differentiators
  - arrays of steps
  - arrays of testimonials
  - comparison table rows
- Avoid runtime dependency on external scripts for core content.

## Oxygen Builder compatibility considerations
- Build each block so it can be re-used as a single page module.
- Ensure CTA buttons link directly to `/contact` or relevant routes.

## What not to do
- Do not introduce new sections, restructure the homepage order, or change page hierarchy.
- Do not change spacing systems drastically.
- Do not add hardcoded random typography sizes.

