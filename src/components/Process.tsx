import { process } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-ink py-24 sm:py-32 lg:py-40"
    >
      <div className="shell">
        <SectionHeading eyebrow={process.eyebrow} aside="교육 진행 방식" />

        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <h2
              id="process-heading"
              className="text-balance text-[clamp(1.65rem,5.2vw,3.4rem)] font-bold leading-[1.3] tracking-[-0.02em]"
            >
              {process.headline}
              <span className="block text-accent">{process.headlineAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[15px] leading-[2] text-white/65 lg:pt-3">{process.body}</p>
          </Reveal>
        </div>

        {/* 5단계 순환 */}
        <ol className="mt-14 grid gap-px border border-line bg-line sm:mt-20 sm:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.no} delay={i * 0.07} className="bg-ink">
              <div className="flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl leading-none text-white/20 sm:text-4xl">
                    {step.no}
                  </span>
                  {/* 마지막 단계는 처음으로 되돌아감을 표시 */}
                  {/* Oswald 에는 화살표 글리프가 없어 본문 서체로 표시합니다 */}
                  {i === process.steps.length - 1 ? (
                    <span
                      className="ml-auto font-display text-[11px] uppercase leading-none tracking-[0.16em] text-accent"
                      aria-hidden="true"
                    >
                      REPEAT
                    </span>
                  ) : (
                    <span className="ml-auto text-xl leading-none text-accent" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
                <p className="mt-6 text-base font-bold text-white sm:text-lg">{step.title}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <p className="mt-7 text-sm leading-relaxed text-white/40">
            <span className="font-display text-[11px] uppercase tracking-[0.16em] text-accent">Repeat</span>
            <span className="px-2 text-white/20" aria-hidden="true">·</span>
            마지막 단계에서 다시 처음으로 돌아가며, 교육 기간 내내 이 사이클을 반복합니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
