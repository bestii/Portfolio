import SectionAccordion, {
  type AccordionItem,
} from "@/components/section-accordion/SectionAccordion";

const educationItems: AccordionItem[] = [
  {
    label: "Dummy Label One",
    title: "Lorem Ipsum Program @ Example University",
    timeframe: "20XX - 20XX",
    location: "Sample City, ST",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    bullets: [
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    ],
  },
  {
    label: "Dummy Label Two",
    title: "Placeholder Course Title",
    timeframe: "20XX",
    location: "Placeholder Location",
    summary:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    bullets: [
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
    ],
  },
  {
    label: "Dummy Label Three",
    title: "Sample Training and Mock Workshops",
    timeframe: "20XX - Present",
    location: "Remote / Anywhere",
    summary:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    bullets: [
      "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.",
      "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.",
      "Omnis voluptas assumenda est omnis dolor repellendus et quibusdam et aut officiis.",
    ],
  },
];

const Education = () => {
  return (
    <SectionAccordion
      id="education"
      sectionNumber="03"
      heading="Where I Studied"
      eyebrow="Education"
      items={educationItems}
    />
  );
};

export default Education;
