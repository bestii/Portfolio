import type {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  delay?: number;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

type RevealStyle = CSSProperties & {
  "--reveal-delay"?: string;
};

const Reveal = <T extends ElementType = "div">({
  as,
  delay = 0,
  className = "",
  children,
  ...props
}: RevealProps<T>) => {
  const Component = (as ?? "div") as ElementType;
  const style: RevealStyle = {
    "--reveal-delay": `${delay}ms`,
    animationName: "reveal-up",
    animationDuration: "1000ms",
    animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    animationFillMode: "both",
    animationDelay: `${delay}ms`,
  };

  return (
    <Component
      className={`reveal-up ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
