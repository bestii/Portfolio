import { fetchCmsJson } from "@/lib/cms";
import {
  aboutSchema,
  contactSchema,
  educationSchema,
  experiencesSchema,
  introductionSchema,
  linksSchema,
} from "@/lib/schemas";
import type { ZodType } from "zod";

async function fetchCmsData<T>(path: string, schema: ZodType<T>): Promise<T | null> {
  const result = await fetchCmsJson<T>(path, schema);
  return result.ok ? result.data : null;
}

export const getIntroduction = () => fetchCmsData("/introduction.json", introductionSchema);
export const getAbout = () => fetchCmsData("/about.json", aboutSchema);
export const getExperiences = () => fetchCmsData("/experiences.json", experiencesSchema);
export const getEducation = () => fetchCmsData("/education.json", educationSchema);
export const getContact = () => fetchCmsData("/contact.json", contactSchema);
export const getLinks = () => fetchCmsData("/links.json", linksSchema);
