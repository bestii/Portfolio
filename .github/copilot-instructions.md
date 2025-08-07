# Copilot Instructions for Portfolio Project

## Architecture Overview

This is a **T3 Stack** portfolio application built with Next.js 15, tRPC, TypeScript, and Tailwind CSS v4. The app fetches portfolio data from an external CMS via tRPC and includes email functionality through Resend.

## Key Architectural Patterns

### Data Flow & API Structure

- **tRPC routers** in `src/server/api/routers/` define backend procedures
- **Portfolio service** (`src/server/api/services/portfolio.service.ts`) fetches data from external CMS using `CMS_BASE_URL`
- All portfolio data (intro, about, services, experience, contact) comes from JSON endpoints like `/data/introduction.json`
- **Server-side data fetching** in React Server Components using `api.portfolio.*()` calls

### Component Organization

- **Barrel exports** pattern: `src/app/_components/index.ts` exports all components
- **Co-location**: Components with their CSS modules (e.g., `Contact.tsx` + `Contact.module.css`)
- **Server components by default**: Use `"use client"` directive only when needed (forms, theme switching, local storage)

### Theme System

- **Multi-theme support**: system/light/dark/sepia themes defined in `src/settings/application.ts`
- **Theme context** (`src/app/_contexts/ThemeContext.tsx`) with localStorage persistence
- **CSS custom properties** for theme variables, applied via data attributes on `<body>`

### Environment & Configuration

- **Validated environment variables** using `@t3-oss/env-nextjs` in `src/env.js`
- **Required server vars**: `CMS_BASE_URL`, `RESEND_API_KEY`
- **Settings modules**: `src/settings/` for application constants and environment access

## Development Workflows

### Build & Development

```bash
pnpm dev          # Development with Turbo
pnpm build        # Production build
pnpm preview      # Build + start for testing
pnpm check        # Lint + TypeScript check
```

### Code Quality

```bash
pnpm lint:fix         # Auto-fix ESLint issues
pnpm format:write     # Format with Prettier + Tailwind plugin
pnpm typecheck        # TypeScript validation
```

## Project-Specific Conventions

### Import Patterns

- **Absolute imports** with `~/` alias for `src/` directory
- **Type imports** using `type` keyword: `import type { AppTheme } from "~/settings/application"`
- **Server-only imports** marked with `"server-only"` package

### Styling Approach

- **Tailwind-first** with CSS modules for component-specific styles
- **CSS custom properties** for theme variables
- **Responsive design** using Tailwind breakpoints
- **CSS Grid/Flexbox** for layouts

### Email System

- **React Email** templates in `src/app/_components/Emails/`
- **Resend integration** for sending emails via API route `/api/email`
- **Form validation** using React Hook Form + Zod schemas

### Type Safety

- **Strict TypeScript** configuration
- **tRPC end-to-end type safety** from server to client
- **Zod schemas** for environment validation and form validation
- **Type-only imports** to reduce bundle size

## Integration Points

### External Dependencies

- **CMS integration**: Headless CMS serving JSON data at `CMS_BASE_URL/data/*.json`
- **Email service**: Resend for contact form submissions
- **Font loading**: Google Fonts (Barlow) with proper optimization

### Key Files for Understanding

- `src/app/layout.tsx` - Root layout with theme provider and tRPC setup
- `src/server/api/root.ts` - Main tRPC router configuration
- `src/server/api/services/portfolio.service.ts` - CMS data fetching logic
- `src/app/_provider/ThemeProvider.tsx` - Theme management implementation
- `src/settings/application.ts` - Application constants and theme definitions

When working on this codebase, prioritize server-side rendering, maintain type safety throughout the data flow, and follow the established co-location patterns for components and styles.
