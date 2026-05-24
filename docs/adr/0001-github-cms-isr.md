# ADR 0001: GitHub Raw Content CMS with ISR

## Status

Proposed

## Context

The portfolio site currently hardcodes all content (experience, education, skills, etc.) as inline constants within React components. The user wants content to be editable without deploying code.

The chosen CMS is a separate GitHub repository (`bestii/Portfolio_CMS`) storing JSON files at its root. The site reads these via GitHub's raw content URLs.

## Decision

Use **Next.js Incremental Static Regeneration (ISR)** with `fetch({ next: { revalidate: 86400 } })` to fetch CMS data server-side.

Each Server Component receives its data as props from the async `page.tsx`, which orchestrates all CMS fetches. A shared utility (`src/lib/cms.ts`) wraps `fetch()` with the CMS base URL from `CMS_BASE_URL` and applies ISR caching.

## Alternatives considered

### Static export with build-time fetch
Fetch JSON at `next build` time, embed in static HTML. CMS changes require a redeploy. Rejected because the user wants CMS updates to propagate without a rebuild.

### Client-side fetch
Components fetch JSON at page load via `useEffect`. Data is always fresh but introduces loading spinners and loses SEO/performance benefits of server rendering. Rejected to avoid client-side loading states.

### ISR with shorter revalidation
Revalidate every hour or less. Rejected because content changes infrequently, and tighter windows increase risk of hitting GitHub's 60 req/hr rate limit.

### No ISR caching (no-store)
Fetch fresh on every request. Rejected due to GitHub raw URL rate limits (60 req/hr per IP for unauthenticated requests).

## Consequences

- The site requires a Node.js runtime (`next start` or Vercel/Netlify); static export is no longer possible.
- CMS changes appear within 24 hours without a redeploy.
- Multiple JSON fetches per page load are bundled into a single request waterfall during ISR revalidation, keeping GitHub requests under rate limits.
- Malformed or unavailable CMS data triggers an error indicator in the affected section rather than failing the entire page.
