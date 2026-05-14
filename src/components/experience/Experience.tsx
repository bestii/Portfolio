import SectionAccordion, {
  type AccordionItem,
} from "@/components/section-accordion/SectionAccordion";

const experienceItems: AccordionItem[] = [
  {
    label: "Dummy Company One",
    title: "Lead Role @ Placeholder Corp",
    timeframe: "Month 20XX - Present",
    location: "Sample City, ST",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    bullets: [
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    ],
  },
  {
    label: "Dummy Company Two",
    title: "Senior Role @ Example Labs",
    timeframe: "Month 20XX - Month 20XX",
    location: "Placeholder City, ST",
    summary:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    bullets: [
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.",
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.",
    ],
  },
  {
    label: "Dummy Company Three",
    title: "Developer Role @ Sample Studio",
    timeframe: "Month 20XX - Month 20XX",
    location: "Metro Area",
    summary:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    bullets: [
      "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.",
      "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.",
      "Omnis voluptas assumenda est omnis dolor repellendus et quibusdam et aut.",
    ],
  },
  {
    label: "Dummy Company Four",
    title: "Designer Role @ Mock Startup",
    timeframe: "Month 20XX - Month 20XX",
    location: "Remote",
    summary:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.",
    bullets: [
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      "Nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit.",
    ],
  },
];

const Experience = () => {
  return (
    <SectionAccordion
      id="experience"
      sectionNumber="02"
      heading="Where I’ve Worked"
      eyebrow="Experience"
      items={experienceItems}
    />
  );
};

export default Experience;
