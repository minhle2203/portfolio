import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  /**
   * When true, animates transform only (no opacity change). Use for above-the-fold
   * content so the element is visible on first paint — LCP-safe.
   */
  priority?: boolean;
  className?: string;
};

export default function FadeIn({
  children,
  delay = 0,
  priority = false,
  className,
}: Props) {
  const style: CSSProperties | undefined =
    delay > 0 ? { animationDelay: `${delay}s` } : undefined;
  const animClass = priority ? "anim-slide" : "anim-fade";

  return (
    <div style={style} className={`${animClass} ${className ?? ""}`}>
      {children}
    </div>
  );
}
