# ADR 0002: Mouse-Following Spotlight Gradient with Noise Texture

## Status

Proposed

## Context

The site currently uses two static radial gradients as a background effect on `.page-gradient-bg` (fixed positions at 20%/15% and 85%/95%, theme-aware accent colors). The user wants to replace this with a mouse-following spotlight that feels more interactive and luxurious.

## Decision

Replace the static gradients with a combination of two layers:

### 1. Noise Texture (always visible)

A tiny inlined SVG or WebP noise texture (1–2 KB, base64-encoded) applied as a background layer. This adds tactile depth to the background regardless of cursor position. CSS-only noise was rejected as feeling too artificial.

### 2. Mouse-Following Spotlight Gradient

A single radial gradient spot (~40–50% radius, wide and subtle) that follows the cursor via `requestAnimationFrame` lerp using CSS custom properties (`--mouse-x`, `--mouse-y`) for the gradient origin. The gradient uses the theme's accent color at low opacity.

**Implementation details:**

- **Positioning**: Driven by `mousemove` → rAF → lerp toward cursor → update `--mouse-x` / `--mouse-y` on the container element
- **Resting state**: When the mouse stops, the spotlight lerps back to viewport center (50%/50%)
- **Performance**: rAF throttles updates to vsync, custom properties avoid excess repaint batching issues; negligible cost for a single overlay
- **Theme-aware**: Same accent colors as current (`--accent` mapped to emerald in light, teal in dark)
- **Touch devices**: The spotlight is hidden entirely (no `mousemove` on touch); the noise texture remains. An animated "breathing" alternative was considered but rejected — a solid background with noise is sufficient on touch

### Layer stacking order

```
┌─────────────────────────────┐
│ Content (z-10)              │
├─────────────────────────────┤
│ Noise texture               │
├─────────────────────────────┤
│ Spotlight gradient (z-0)    │
├─────────────────────────────┤
│ Solid background color      │
└─────────────────────────────┘
```

Noise sits above the spotlight so the spotlight illuminates *under* the grain, creating a subtle layered depth effect.

## Alternatives considered

### CSS transform-based movement
Move the gradient as a fixed shape via `transform: translate()`. Zero repaints (GPU composited), but the gradient shape itself can't change dynamically. Rejected in favor of custom properties for pixel-perfect origin positioning at negligible repaint cost.

### CSS-only noise via repeating gradients
Zero network requests, but looks artificial. Rejected in favor of an inlined asset for organic texture quality.

### Static gradient (current approach)
Simple, performant, but inert. The whole point of this change is interactivity.

### Pulsing/breathing gradient on touch
Adds life without a cursor, but felt like unnecessary complexity for a background effect. The noise texture alone provides enough depth.

## Consequences

- One-time perf cost: inlining a small SVG/WebP. No runtime network cost.
- rAF runs only while the page is visible (would use `visibilitychange` to disable when hidden).
- Spotlight automatically stops animating when the tab is backgrounded via browser rAF behavior.
- No changes needed to the existing theme toggle or ThemeProvider — the spotlight reads the same CSS custom properties.
- The existing `.page-gradient-bg` div in `layout.tsx` will be reused but its background-image will be split across two elements (or restyled as a single container with multiple layers).
