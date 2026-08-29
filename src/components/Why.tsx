import { why } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Why() {
  return (
    <section aria-labelledby="why-heading" className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <SectionHeading eyebrow={why.eyebrow} aside="상담 현장에서 반복되는 문제" />

        <Reveal className="mt-12 sm:mt-16">
          <h2
            id="why-heading"
            className="text-balance text-[clamp(1.65rem,5.2vw,3.4rem)] font-bold leading-[1.3] tracking-[-0.02em]"
          >
            {why.headline}
            <span className="block text-accent">{why.headlineAccent}</span>
          </h2>
        </Reveal>

        {/* 반복되는 질문 3가지 */}
        <ul className="mt-12 grid gap-px border border-line bg-line sm:mt-16 lg:grid-cols-3">
          {why.questions.map((q, i) => (
            <Reveal as="li" key={q.no} delay={i * 0.08} className="bg-surface">
              <div className="flex h-full flex-col p-7 sm:p-9">
                <span className="font-display text-xs uppercase tracking-[0.24em] text-accent">
                  {q.no}
                </span>
                <p className="mt-6 whitespace-pre-line text-lg font-bold leading-[1.55] text-white sm:text-xl">
                  “{q.text}”
                </p>
                <p className="mt-auto pt-7 text-sm leading-relaxed text-white/50">{q.caption}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* 하지 않는 것 / 하는 것 대조 */}
        <Reveal delay={0.1} className="mt-16 sm:mt-20">
          <p className="eyebrow mb-8">{why.compareTitle}</p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal>
            <div className="h-full border border-white/12 p-7 sm:p-9">
              <p className="text-sm font-semibold text-white/45">{why.notDoing.label}</p>
              <ul className="mt-6 space-y-4">
                {why.notDoing.items.map((t) => (
                  <li key={t} className="flex gap-3.5 text-[15px] leading-relaxed text-white/45">
                    <span
                      className="mt-[3px] shrink-0 font-display text-base leading-none text-white/30"
                      aria-hidden="true"
                    >
                      ✕
                    </span>
                    <span className="line-through decoration-white/20">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full border border-accent/60 bg-accent/5 p-7 sm:p-9">
              <p className="text-sm font-semibold text-accent">{why.doing.label}</p>
              <ul className="mt-6 space-y-4">
                {why.doing.items.map((t) => (
                  <li key={t} className="flex gap-3.5 text-[15px] leading-relaxed text-white/85">
                    <span
                      className="mt-[3px] shrink-0 font-display text-base leading-none text-accent"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
