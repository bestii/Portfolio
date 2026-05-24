import SectionAccordion, {
  type AccordionItem,
} from "@/components/section-accordion/SectionAccordion";

type Props = {
  items: AccordionItem[];
};

const Education = ({ items }: Props) => {
  return (
    <SectionAccordion
      id="education"
      sectionNumber="03"
      heading="Where I Studied"
      items={items}
    />
  );
};

export default Education;
