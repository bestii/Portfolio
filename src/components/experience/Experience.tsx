import SectionAccordion from "@/components/section-accordion/SectionAccordion";
import { getExperiences } from "@/services/cmsService";

const Experience = async () => {
  const experiences = await getExperiences();
  if (!experiences) return null;

  return (
    <SectionAccordion
      id="experience"
      sectionNumber="02"
      heading="Where I've Worked"
      items={experiences}
    />
  );
};

export default Experience;
