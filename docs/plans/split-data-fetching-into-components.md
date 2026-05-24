# Implementation Plan: Split CMS Data Fetching into Components

## Overview

Remove the centralized `loadCmsData()` + `page.tsx` prop-drilling pattern. Each CMS-data component becomes an async server component that fetches its own data via a factory-generated fetcher. `cmsService.ts` becomes an extensible registry of named fetchers.

---

## Files to Change

### 1. `src/services/cmsService.ts` — Factory + Named Fetchers

Replace `loadCmsData()` and `CmsData` type with a factory that bakes in path + schema:

```ts
import { fetchCmsJson, type CmsResult } from "@/lib/cms";
import type { ZodType } from "zod";

export async function fetchCmsData<T>(path: string, schema: ZodType<T>): Promise<T | null> {
  const result: CmsResult<T> = await fetchCmsJson<T>(path, schema);
  return result.ok ? result.data : null;
}
```

Then export named fetchers using the factory:

| Exported Function       | Parameters                              |
|-------------------------|-----------------------------------------|
| `getIntroduction()`     | `"/introduction.json"`, `introductionSchema` |
| `getAbout()`            | `"/about.json"`, `aboutSchema`          |
| `getExperiences()`      | `"/experiences.json"`, `experiencesSchema` |
| `getEducation()`        | `"/education.json"`, `educationSchema`  |
| `getContact()`          | `"/contact.json"`, `contactSchema`      |
| `getLinks()`            | `"/links.json"`, `linksSchema`          |

Adding a new CMS endpoint in the future is one export line.

### 2. `src/components/introduction/Introduction.tsx`

- Make the component `async`
- Import `getIntroduction` from `@/services/cmsService`
- Call `const introduction = await getIntroduction()` internally
- If `introduction` is `null`, return `null`
- Remove props: `greeting`, `name`, `tagline`, `description` → local variables from `introduction`

### 3. `src/components/about-me/AboutMe.tsx`

- Make `async`, import `getAbout`
- Call `const about = await getAbout()` internally
- If `about` is `null`, return `null`
- Remove `paragraphs` prop → use `about.paragraphs`

### 4. `src/components/experience/Experience.tsx`

- Make `async`, import `getExperiences`
- Call `const experiences = await getExperiences()` internally
- If `experiences` is `null`, return `null`
- Remove `items` prop → pass `experiences` directly to `SectionAccordion`
- `sectionNumber`, `heading`, `id` remain internal constants

### 5. `src/components/education/Education.tsx`

- Same pattern as Experience
- Import `getEducation`, call internally, remove `items` prop
- If `education` is `null`, return `null`

### 6. `src/components/contact/Contact.tsx`

- Make `async`, import `getContact`
- Call `const contact = await getContact()` internally
- If `contact` is `null`, return `null`
- Remove all props → destructure from `contact`

### 7. `src/components/networking-links/NetworkingLinks.tsx`

- Make `async`, import `getLinks`
- Call `const links = await getLinks()` internally
- If `links` is `null`, return `null`
- Remove `socials` and `email` props → destructure from `links`

### 8. `src/app/page.tsx`

- Remove `import { loadCmsData } from "@/services/cmsService"`
- Remove `const data = await loadCmsData()` and all `data.X &&` wrappers
- Render all components unconditionally — each handles its own null case:

```tsx
const Home = async () => {
  return (
    <>
      <Introduction />
      <div className="container mx-auto px-4">
        <AboutMe />
        <Experience />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
```

### 9. `src/app/layout.tsx`

- Remove `import { fetchCmsJson } from "@/lib/cms"` and `import { linksSchema } from "@/lib/schemas"`
- Remove `const linksResult`, `const links`, and `{links && (` wrapper
- Render `<NetworkingLinks />` unconditionally

---

## Key Design Decisions

- **Factory function (`fetchCmsData`)** — centralizes the fetch → validate → null-on-error pattern. New content types need only one export line.
- **No `cache()` needed** — Next.js deduplicates identical `fetch()` calls within a single render pass. All components use the same `{ next: { revalidate: 86400 } }` options.
- **`null` on failure** — each component gracefully degrades by returning `null`, continuing the existing ADR-0001 pattern.
- **No prop drilling** — components own their data; `page.tsx` and `layout.tsx` become pure layout shells.

---

## Verification Checklist

- [ ] `npm run build` passes with no type errors
- [ ] All sections render their CMS content
- [ ] Bad `CMS_BASE_URL` → each section silently disappears (no crash)
- [ ] `NetworkingLinks` renders in layout with social links and email
- [ ] No unused imports remain (`loadCmsData`, `CmsData`, `CmsResult` in page/layout)
