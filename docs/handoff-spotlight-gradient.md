# Handoff: Mouse-Following Spotlight Gradient

## Current State

**4 issues implemented** (all unmerged, working tree has uncommitted changes):

| # | Status | Description |
|---|--------|-------------|
| #156 | Done | Prefactor: extracted `SpotlightGradient` component, replaced raw div in `layout.tsx` |
| #157 | Done | Noise texture via SVG feTurbulence inlined as base64 data URI on `::before` pseudo-element |
| #158 | Done | Mouse-following spotlight with rAF lerp, idle drift-back, touch fallback, visibility handling |
| #159 | Done | Vitest + 9 tests for `lerp()` and integration tests for the component |

## Key Files

| File | Purpose |
|------|---------|
| `src/components/spotlight/SpotlightGradient.tsx` | Client component, renders the fixed overlay div |
| `src/components/spotlight/use-spotlight-position.ts` | Hook with `lerp()` + `useSpotlightPosition()` — owns all mouse tracking, rAF, idle timer |
| `src/components/spotlight/use-spotlight-position.test.tsx` | 9 tests (4 unit + 5 integration) |
| `src/app/globals.css` | `.page-gradient-bg` with noise `::before` pseudo-element |
| `vitest.config.ts` | jsdom env, `@/` alias |
| `docs/adr/0002-mouse-following-spotlight-gradient.md` | ADR documenting the design decisions |
| `docs/UBIQUITOUS_LANGUAGE.md` | Domain glossary (spotlight, noise texture, lerp, etc.) |

## Unsolved Problem

**The spotlight is invisible on the page.** The gradient IS being set as an inline `background-image` via JS (confirmed by tests), but the user cannot see any effect. Possible causes:

1. **Too subtle** — current values: 25% opacity, 35% radius, `farthest-corner` sizing. The original design had TWO radial gradients (one at 14% accent + one at 82% near-white/dark-navy) that created visible depth. We replaced them with ONE gradient at the cursor position, which may simply be too faint.
2. **Wrong layer** — The noise `::before` sits above the gradient at `opacity: 0.035`. It shouldn't obscure it, but worth checking.
3. **Theme color mismatch** — Color is read from `document.documentElement.getAttribute("data-theme")` on each frame. If the attribute isn't set yet, it falls back to dark (correct).
4. **SSR mismatch** — CSS fallback uses `rgba(5, 150, 105, 0.25)` (light green). On first paint before JS hydrates, this shows a light-theme color on dark background. After hydration, JS corrects it.

## Suggested Next Steps

1. Open browser DevTools → inspect the `.page-gradient-bg` element → verify the inline `background-image` is actually present and check computed styles
2. Temporarily set a very bright, high-opacity color (e.g. `rgba(255, 0, 0, 0.8)`) in the JS `applyGradient()` to confirm the gradient is rendering at the right position
3. Once visibility is confirmed, dial opacity/radius back to the agreed design values (14% / 40–50%)
4. Commit + push the 4 issues, or create a PR

## Suggested Skills

- `/diagnose` — If the spotlight is still invisible, use disciplined diagnosis (reproduce → minimise → hypothesise → instrument → fix)
- `/zoom-out` — If you need a broader understanding of the theme system or page layout structure
