import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  /** 대문자 영문 섹션 라벨 */
  eyebrow: string;
  /** 오른쪽에 붙는 보조 설명 (선택) */
  aside?: ReactNode;
  className?: string;
};

/** 얇은 구분선 + 대문자 영문 섹션 타이틀 */
export default function SectionHeading({ eyebrow, aside, className = '' }: Props) {
  return (
    <Reveal className={className}>
      <div className="hairline" aria-hidden="true" />
      <div className="flex flex-wrap items-baseline justify-between gap-3 pt-5">
        <p className="eyebrow">{eyebrow}</p>
        {aside ? <div className="text-xs text-white/45 sm:text-sm">{aside}</div> : null}
      </div>
    </Reveal>
  );
}
