"use client";

import { useState } from "react";
import Link from "next/link";

import Reveal from "@/components/animations/Reveal";

type AccordionItem = {
  label: string;
  title: string;
  timeframe: string;
  bullets: string[];
  url?: string;
};

type SectionAccordionProps = {
  sectionNumber: string;
  heading: string;
  id: string;
  items: AccordionItem[];
};

const SectionAccordion = ({
  sectionNumber,
  heading,
  id,
  items,
}: SectionAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];

  return (
    <section id={id} className="py-32 max-w-175 mx-auto">
      <Reveal
        as="div"
        delay={60}
        className="flex items-center gap-4 text-(--color-text-primary)"
      >
        <span className="font-mono text-lg font-semibold text-(--color-accent)">
          {sectionNumber}.
        </span>
        <h2 className="text-2xl font-semibold sm:text-3xl">{heading}</h2>
        <span className="h-px flex-1 bg-(--color-bg-tertiary)" />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <div
          role="tablist"
          aria-label={heading}
          className="flex overflow-x-auto border-b border-(--color-bg-tertiary) lg:flex-col lg:border-b-0 lg:border-r"
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            const tabId = `${id}-tab-${index}`;

            return (
              <button
                key={item.label}
                type="button"
                id={tabId}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${id}-panel`}
                onClick={() => setActiveIndex(index)}
                className={`min-w-max border-b-2 px-5 py-4 text-left font-mono text-sm transition duration-300 lg:border-b-0 lg:border-l-2 lg:px-6 lg:py-5 ${
                  isActive
                    ? "border-(--color-accent) bg-(--color-bg-secondary) text-(--color-accent)"
                    : "border-transparent text-(--color-text-muted) hover:border-(--color-bg-tertiary) hover:bg-(--color-bg-secondary) hover:text-(--color-text-secondary)"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <Reveal
          as="div"
          delay={120}
          id={`${id}-panel`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${activeIndex}`}
        >
          <div>
            <h3 className="text-xl font-medium text-(--color-text-primary) mb-2">
              {activeItem.url ? (
                <Link
                  href={activeItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-(--color-accent)"
                >
                  {activeItem.title}
                </Link>
              ) : (
                activeItem.title
              )}
            </h3>
            <p className="font-mono text-sm text-(--color-text-muted)">
              {activeItem.timeframe}
            </p>
            <ul className="mt-6 space-y-4 text-base leading-8 text-(--color-text-muted)">
              {activeItem.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="font-mono text-(--color-accent)">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export type { AccordionItem };
export default SectionAccordion;
