import SectionAccordion from "@/components/section-accordion/SectionAccordion";
import { getEducation } from "@/services/cmsService";

const Education = async () => {
  const education = await getEducation();
  if (!education) return null;

  return (
    <SectionAccordion
      id="education"
      sectionNumber="03"
      heading="Where I Studied"
      items={education}
    />
  );
};

export default Education;
