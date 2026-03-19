# Gold Heart Homes — Content Strategy (Repo-Specific)

## Messaging hierarchy
Global priority order:
1. Clarity of the system (what makes this different)
2. Control through planning (how decisions are handled)
3. Accountability (one team, fewer handoffs)
4. Proof (projects + testimonials)
5. Conversion (single next step, frictionless intake)

## Homepage copy intent by section (matches current component order)
1. **Hero** (`components/homepage/Hero.tsx`)
   - Goal: immediate positioning as an operating system, not a promise.
   - Headline voice: controlled and specific (scope/schedule/results).
   - Supporting copy: explains full scope capability + “one team, full accountability.”
2. **Why / What Homeowners Get** (`components/homepage/OutcomeChips.tsx`)
   - Goal: operational advantages phrased as outcomes of the process.
   - Each card must read like an answer to “what changes for me because you’re design-build?”
3. **Featured Work** (`components/homepage/FeaturedWork.tsx`)
   - Goal: show quality + thinking.
   - Each project card: title + location + one-sentence scope/transformation line.
4. **Process** (`components/homepage/Process.tsx`) — MOST IMPORTANT
   - Goal: engineered repeatability.
   - Steps must be named and described as planning/control milestones.
5. **Services / Scope** (`components/homepage/CoreBenefits.tsx`)
   - Goal: map services to the accountable team model.
   - Include framing that reinforces “one accountable design-build team.”
6. **Testimonials** (`components/homepage/SocialProof.tsx`)
   - Goal: editorial trust, not salesy language.
   - Typography hierarchy should keep name readable and quote scannable.
7. **Standards table** (`components/homepage/FlexSection.tsx`)
   - Goal: differentiate from industry norms with factual, structured comparison.
8. **Final CTA** (`components/homepage/FinalCTA.tsx`)
   - Goal: reinforce planning + clarity + control; route to `/contact`.
   - Avoid generic “ready to…” phrasing; prefer system language.

## Service page copy intent
- `app/services/page.tsx`: act as a scoped gateway. Headlines should feel specific and calm; body text should frame where design-build matters most.
- Service-specific pages (e.g., kitchen/bath/whole-home): should keep alignment with process and accountability. Avoid unrelated marketing copy.

## Testimonials rules
- Write like a client speaking, not a brand writing.
- Keep the testimonial text as the primary readability unit; name should be prominent but not louder than the quote.
- Avoid overly polished corporate phrasing.

## CTA rules
- Primary CTA: schedule a design consultation.
- CTAs always connect back to structured intake (`/contact`) and should reinforce clarity of next steps.
- Avoid “free estimate / instant quote” language unless the intake flow truly supports it.

## Voice/tone examples (do/don’t)
Do:
- “Scope and pricing are finalized before construction begins.”
- “One accountable team manages the project through completion.”
- “Defined scope, coordinated planning, documented decisions.”
Don’t:
- “We make your dream home come to life.”
- “Unlimited possibilities.”
- “No stress remodeling guaranteed.”

## Words/phrases to avoid (contextual)
- Avoid hype: “game-changing”, “transformative”, “world-class”, “best-in-class”.
- Avoid vague promises: “on-demand”, “seamless experience”, “we handle everything” without a concrete follow-up.
- Avoid stacking adjectives (keep sentences controlled).

