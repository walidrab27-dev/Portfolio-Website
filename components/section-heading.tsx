import { Sparkle } from "lucide-react";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ kicker, title, copy }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <span className="section-kicker">
        <Sparkle aria-hidden className="h-4 w-4" />
        {kicker}
      </span>
      <h2 className="section-title text-balance">{title}</h2>
      {copy ? <p className="section-copy mt-5">{copy}</p> : null}
    </div>
  );
}
