import type { Statement } from '@/data/site';
import Reveal from './Reveal';

/**
 * 페이지 중간 전환 구간에 들어가는 문구 배너.
 * 위쪽에 포인트 컬러 선을 두어 일반 섹션과 구분됩니다.
 */
export default function StatementBand({ data }: { data: Statement }) {
  return (
    <section
      aria-label={data.headline.map((l) => l.text).join(' ')}
      className="border-t-2 border-accent bg-surface2 py-20 sm:py-24 lg:py-28"
    >
      <div className="shell text-center">
        <Reveal>
          <p className="eyebrow">{data.eyebrow}</p>
          <p className="mt-7 text-balance text-[clamp(1.7rem,5.6vw,3.6rem)] font-bold leading-[1.28] tracking-[-0.02em]">
            {data.headline.map((line) => (
              <span key={line.text} className={line.accent ? 'block text-accent' : 'block'}>
                {line.text}
              </span>
            ))}
          </p>
        </Reveal>

        {/* 원형 키워드 */}
        {data.chips ? (
          <Reveal delay={0.1}>
            <ul className="mt-11 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {data.chips.map((chip) => (
                <li
                  key={chip}
                  className="flex aspect-square w-[8.5rem] items-center justify-center rounded-full border border-accent/45 px-3 text-center text-sm font-semibold leading-snug text-white sm:w-[9.5rem] sm:text-base"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        {/* 상승 지표 */}
        {data.metrics ? (
          <Reveal delay={0.1}>
            <ul className="mx-auto mt-11 grid max-w-2xl grid-cols-3 gap-4 sm:gap-8">
              {data.metrics.map((m) => (
                <li key={m.label} className="flex flex-col items-center">
                  <span className="text-sm font-semibold text-white sm:text-base">{m.label}</span>
                  <span className="mt-2 flex items-center gap-1.5">
                    <span className="font-display text-[clamp(2.1rem,7vw,3.5rem)] font-semibold leading-none text-accent">
                      {m.value}
                    </span>
                    <span
                      className="text-[clamp(1.3rem,4vw,2rem)] leading-none text-accent"
                      aria-hidden="true"
                    >
                      ↑
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        <Reveal delay={0.16}>
          <p className="mx-auto mt-11 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {data.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
