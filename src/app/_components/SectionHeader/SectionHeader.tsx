import type { FC } from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
  maxWidth?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  description,
  className = "",
  maxWidth = "17.5rem",
}) => {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="text-white">{title}</h2>
      <div
        className="line line-horizontal line-heading"
        aria-hidden="true"
      ></div>
      <p className={`mt-4 text-base`} style={{ maxWidth: maxWidth }}>
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
