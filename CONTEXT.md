# CONTEXT

## CMS Repository

A separate GitHub repository (`bestii/Portfolio_CMS`) that serves as the content management system. The repository stores JSON files at its root, each corresponding to a section of the portfolio site. The site reads these files via GitHub raw content URLs at build/request time using Next.js ISR.

- **CMS Base URL**: The root URL pointing to the CMS repository's raw content branch, configured via the `CMS_BASE_URL` environment variable.
- **CMS Module**: A logical grouping of content for one portfolio section. Each module maps to a single JSON file in the CMS repository (e.g., `experiences.json`, `education.json`).

## Portfolio Sections

Each section is a Server Component rendered on `page.tsx` that receives its data as props fetched server-side.

- **Experience**: Professional work history displayed in the tabbed accordion. Each item has a label, title, timeframe, bullets, and an optional company URL.
- **Education**: Academic history displayed in the tabbed accordion. Same shape as Experience items, with an optional institution URL.
- **Projects**: Portfolio work items. Each has a title, description, tech stack list, links (live and/or github), and a CMS-hosted image.
- **Skills**: Technologies and tools, defined as a list of skill IDs in the CMS that map to locally-stored SVG logos.
- **About Me**: Bio paragraphs and a locally-stored portrait image.
- **Links**: Social media URLs and contact email for the fixed sidebar.
- **Contact**: "Get In Touch" section with heading, description, button text, and email.
- **Introduction**: Hero section with greeting, name, tagline, and description.
