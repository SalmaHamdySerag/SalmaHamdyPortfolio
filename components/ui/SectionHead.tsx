import { Reveal } from '@/components/animations/Reveal';

interface SectionHeadProps {
  num: string;
  title: string;
  sub?: string;
}

export function SectionHead({ num, title, sub }: SectionHeadProps) {
  return (
    <Reveal className="section-head">
      <span className="section-num">{num}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}
