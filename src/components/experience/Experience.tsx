import SectionAccordion, {
  type AccordionItem,
} from "@/components/section-accordion/SectionAccordion";

type Props = {
  items: AccordionItem[];
};

const Experience = ({ items }: Props) => {
  return (
    <SectionAccordion
      id="experience"
      sectionNumber="02"
      heading="Where I've Worked"
      items={items}
    />
  );
};

export default Experience;
