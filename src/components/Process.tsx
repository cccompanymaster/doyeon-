import { process } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Process() {
  const isLast = (i: number) => i === process.steps.length - 1;

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
            <Reveal
              as="li"
              key={step.no}
              delay={i * 0.07}
              className={isLast(i) ? 'bg-accent/10' : 'bg-ink'}
            >
              <div className="flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span
                    className={`font-display text-3xl leading-none sm:text-4xl ${
                      isLast(i) ? 'text-accent' : 'text-white/20'
                    }`}
                  >
                    {step.no}
                  </span>
                  {/* 마지막 단계는 처음으로 돌아감을 채운 배지로 강조 */}
                  {isLast(i) ? (
                    <span className="ml-auto flex items-center gap-1.5 bg-accent px-2.5 py-1.5 font-display text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-black">
                      <span aria-hidden="true">↻</span>
                      REPEAT
                    </span>
                  ) : (
                    /* Oswald 에는 화살표 글리프가 없어 본문 서체로 표시합니다 */
                    <span className="ml-auto text-xl leading-none text-accent" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
                <p className="mt-6 text-base font-bold text-white sm:text-lg">{step.title}</p>
                <p
                  className={`mt-2.5 text-sm leading-relaxed ${
                    isLast(i) ? 'text-white/75' : 'text-white/55'
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2.5 border border-accent/40 bg-accent/5 px-5 py-4 text-sm leading-relaxed text-white/70">
            <span className="flex shrink-0 items-center gap-1.5 bg-accent px-2.5 py-1.5 font-display text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-black">
              <span aria-hidden="true">↻</span>
              REPEAT
            </span>
            <span>
              <b className="font-semibold text-white">마지막 단계에서 다시 처음으로 돌아갑니다.</b>{' '}
              교육 기간 내내 이 사이클을 반복하며 오래된 상담 습관을 바꿔 나갑니다.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
