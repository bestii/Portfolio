import { z } from "zod";

export const accordionItemSchema = z.object({
  label: z.string(),
  title: z.string(),
  timeframe: z.string(),
  bullets: z.array(z.string()),
  url: z.url().optional(),
});

export const experiencesSchema = z.array(accordionItemSchema);

export const educationSchema = z.array(accordionItemSchema);

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  tech: z.array(z.string()),
  links: z.object({
    live: z.url().optional(),
    github: z.url().optional(),
  }),
  image: z.string(),
});

export const projectsSchema = z.array(projectSchema);

export const aboutSchema = z.object({
  paragraphs: z.array(z.string()),
  portrait: z.string().optional(),
});

export const linksSchema = z.object({
  socials: z.array(
    z.object({
      platform: z.enum([
        "facebook",
        "github",
        "instagram",
        "twitter",
        "linkedin",
      ]),
      url: z.url(),
    }),
  ),
  email: z.email(),
});

export const contactSchema = z.object({
  subheading: z.string(),
  heading: z.string(),
  description: z.string(),
  buttonText: z.string(),
  email: z.email(),
});

export const introductionSchema = z.object({
  greeting: z.string(),
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
});

export type Experience = z.infer<typeof accordionItemSchema>;
export type Education = z.infer<typeof accordionItemSchema>;
export type Project = z.infer<typeof projectSchema>;
export type About = z.infer<typeof aboutSchema>;
export type Links = z.infer<typeof linksSchema>;
export type ContactData = z.infer<typeof contactSchema>;
export type Introduction = z.infer<typeof introductionSchema>;
