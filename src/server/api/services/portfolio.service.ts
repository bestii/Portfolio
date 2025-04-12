import { CMS_BASE_URL } from "~/settings/environment";
import type {
  About,
  Contact,
  Experience,
  Introduction,
  Services,
} from "../types/portfolio";

const BASE_PATH = "/data";

const fetchFromCMS = async <T>(
  filename: string,
  errorMessage: string,
): Promise<T> => {
  const response = await fetch(`${CMS_BASE_URL}${BASE_PATH}/${filename}`);

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return (await response.json()) as T;
};

export const getIntro = () =>
  fetchFromCMS<Introduction>(
    "introduction.json",
    "Failed to fetch introduction data",
  );

export const getContact = () =>
  fetchFromCMS<Contact>("contact.json", "Failed to fetch contact data");

export const getAbout = () =>
  fetchFromCMS<About>("about.json", "Failed to fetch about data");

export const getServices = () =>
  fetchFromCMS<Services>("services.json", "Failed to fetch services data");

export const getExperience = () =>
  fetchFromCMS<Experience>(
    "experience.json",
    "Failed to fetch experience data",
  );
