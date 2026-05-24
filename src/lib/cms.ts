import type { ZodType } from "zod";

export type CmsResult<T> = { ok: true; data: T } | { ok: false; error: string };

export async function fetchCmsJson<T>(
  path: string,
  schema: ZodType<T>,
): Promise<CmsResult<T>> {
  const baseUrl = process.env.CMS_BASE_URL;

  if (!baseUrl) {
    return { ok: false, error: "CMS_BASE_URL is not configured" };
  }

  try {
    const res = await fetch(`${baseUrl}${path}`, {
      next: { revalidate: 86400 },
      headers: {
        Accept: "application/vnd.github.v3.raw",
      },
    });

    if (!res.ok) {
      return {
        ok: false,
        error: `CMS returned ${res.status} for ${path}`,
      };
    }

    const json: unknown = await res.json();
    const parsed = schema.safeParse(json);

    if (!parsed.success) {
      return {
        ok: false,
        error: `Invalid data in ${path}: ${parsed.error.message}`,
      };
    }

    return { ok: true, data: parsed.data };
  } catch (err) {
    return {
      ok: false,
      error: `Failed to fetch ${path}: ${err instanceof Error ? err.message : String(err)}`,
    };
  }
}
