import { fetchCMSJson } from "@/lib/cms";
import {
  aboutSchema,
  contactSchema,
  educationSchema,
  experiencesSchema,
  introductionSchema,
  linksSchema,
} from "@/lib/schemas";
import type { ZodType } from "zod";

async function fetchCMSData<T>(
  path: string,
  schema: ZodType<T>,
): Promise<T | null> {
  const result = await fetchCMSJson<T>(path, schema);
  return result.ok ? result.data : null;
}

export const getIntroduction = () =>
  fetchCMSData("/introduction.json", introductionSchema);

export const getAbout = () => fetchCMSData("/about.json", aboutSchema);

export const getExperiences = () =>
  fetchCMSData("/experiences.json", experiencesSchema);

export const getEducation = () =>
  fetchCMSData("/education.json", educationSchema);

export const getContact = () => fetchCMSData("/contact.json", contactSchema);

export const getLinks = () => fetchCMSData("/links.json", linksSchema);
