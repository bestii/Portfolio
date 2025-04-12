import { createTRPCRouter, publicProcedure } from "../trpc";
import {
  getAbout,
  getContact,
  getIntro,
  getServices,
  getExperience,
} from "../services/portfolio.service";

export const portfolioRouter = createTRPCRouter({
  introduction: publicProcedure.query(async () => {
    const data = await getIntro();
    return data;
  }),
  contact: publicProcedure.query(async () => {
    const data = await getContact();
    return data;
  }),
  about: publicProcedure.query(async () => {
    const data = await getAbout();
    return data;
  }),
  services: publicProcedure.query(async () => {
    const data = await getServices();
    return data;
  }),
  experience: publicProcedure.query(async () => {
    const data = await getExperience();
    return data;
  }),
});
