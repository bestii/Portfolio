# Ubiquitous Language

Glossary of domain terms used in the Portfolio project.

## Terms

| Term | Definition |
|------|------------|
| **Spotlight Gradient** | A single radial gradient (~40–50% radius) positioned at the user's cursor via `--mouse-x` / `--mouse-y` custom properties. Adds a subtle, luxurious focal point to the background. |
| **Noise Texture** | A tiny inlined SVG or WebP grain texture (~1–2 KB, base64) overlaying the background. Provides tactile depth without motion, visible on all devices. |
| **Lerp (Linear Interpolation)** | Smoothing function that gradually moves the spotlight toward the cursor position each rAF frame, preventing jarring jumps. |
| **Resting Position** | The spot where the spotlight settles when the mouse stops moving — the viewport center (50%, 50%). |
| **Touch Fallback** | On touch/pointer:coarse devices, the spotlight gradient is hidden entirely; the noise texture and solid background color remain. |
| **CSS Custom Properties (--mouse-x, --mouse-y)** | Normalized cursor position (0–1 range) written to the gradient container element each rAF frame. Used as the `radial-gradient()` origin coordinates. |
| **rAF (requestAnimationFrame)** | Browser API that synchronizes updates to the display refresh rate. Used here to throttle spotlight position updates to vsync. |
| **Layer Stack** | The compositing order: solid background → spotlight gradient (z-0) → noise texture → content (z-10). Noise sits above the spotlight so the grain is always visible. |
| **Accent Color** | The theme's primary accent (`--accent`: emerald `#059669` for light, teal `#64ffda` for dark), used as the spotlight gradient color at low opacity. |
