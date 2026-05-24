import { fetchCmsJson } from "@/lib/cms";
import {
  aboutSchema,
  contactSchema,
  educationSchema,
  experiencesSchema,
  introductionSchema,
  linksSchema,
  type About,
  type ContactData,
  type Education,
  type Experience,
  type Introduction,
  type Links,
} from "@/lib/schemas";

export type CmsData = {
  experiences: Experience[] | null;
  education: Education[] | null;
  about: About | null;
  links: Links | null;
  contact: ContactData | null;
  introduction: Introduction | null;
};

export const loadCmsData = async (): Promise<CmsData> => {
  const [
    experiencesResult,
    educationResult,
    aboutResult,
    linksResult,
    contactResult,
    introductionResult,
  ] = await Promise.all([
    fetchCmsJson("/experiences.json", experiencesSchema),
    fetchCmsJson("/education.json", educationSchema),
    fetchCmsJson("/about.json", aboutSchema),
    fetchCmsJson("/links.json", linksSchema),
    fetchCmsJson("/contact.json", contactSchema),
    fetchCmsJson("/introduction.json", introductionSchema),
  ]);

  return {
    experiences: experiencesResult.ok ? experiencesResult.data : null,
    education: educationResult.ok ? educationResult.data : null,
    about: aboutResult.ok ? aboutResult.data : null,
    links: linksResult.ok ? linksResult.data : null,
    contact: contactResult.ok ? contactResult.data : null,
    introduction: introductionResult.ok ? introductionResult.data : null,
  };
};
