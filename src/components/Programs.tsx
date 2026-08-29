import Image from 'next/image';
import { brand, programCompare, programs } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Programs() {
  return (
    <section
      id="program"
      aria-labelledby="program-heading"
      className="bg-surface py-24 sm:py-32 lg:py-40"
    >
      <div className="shell">
        <SectionHeading eyebrow="Our Program" aside="교육 과정 안내" />

        <Reveal className="mt-12 sm:mt-16">
          <h2
            id="program-heading"
            className="text-balance text-[clamp(1.65rem,5.2vw,3.4rem)] font-bold leading-[1.3] tracking-[-0.02em]"
          >
            배우고 끝나는 교육이 아니라,
            <span className="block text-accent">내 상담으로 만드는 과정.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.9] text-white/60 sm:text-base">
            현재 나의 상담 단계에 맞는 과정을 선택하세요. 아래 카드를 누르면 해당 과정의 상세 내용으로 이동합니다.
          </p>
        </Reveal>

        {/* 과정 인덱스 카드 */}
        <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5">
          {programs.map((p, i) => (
            <Reveal as="li" key={p.no} delay={i * 0.07}>
              <a
                href={`#program-${p.no}`}
                className="group block focus-visible:outline-none"
                aria-label={`${p.code} ${p.title} 상세 보기`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface2">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.82)_100%)] transition-opacity duration-500 group-hover:opacity-90"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                    <div>
                      <p className="font-display text-[11px] uppercase tracking-[0.22em] text-accent">
                        {p.no} &nbsp;{p.code}
                      </p>
                      <p className="mt-2 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-accent sm:text-xl">
                        {p.title}
                      </p>
                    </div>
                    <span
                      className="shrink-0 text-2xl leading-none text-white/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>

        {/* 과정 한눈에 비교 — 좁은 화면에서는 가로 스크롤 */}
        <Reveal delay={0.1} className="mt-14 sm:mt-16">
          <p className="eyebrow mb-5">At a glance</p>
          <div className="overflow-x-auto border border-line">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">교육 과정별 핵심 내용 비교표</caption>
              <thead>
                <tr className="border-b border-line">
                  {programCompare.columns.map((c) => (
                    <th
                      key={c}
                      scope="col"
                      className="whitespace-nowrap px-5 py-4 font-display text-[11px] uppercase tracking-[0.18em] text-white/45"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {programCompare.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-line last:border-0">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={
                          ci === 0
                            ? 'whitespace-nowrap px-5 py-4 font-display text-sm uppercase tracking-[0.1em] text-accent'
                            : 'px-5 py-4 text-sm leading-relaxed text-white/70'
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>

      {/* 과정별 상세 */}
      <div className="shell mt-24 sm:mt-32">
        {programs.map((p, i) => (
          <article
            key={p.no}
            id={`program-${p.no}`}
            className="scroll-mt-24 border-t border-line py-14 sm:py-20"
            aria-labelledby={`program-${p.no}-title`}
          >
            <div
              className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>figure]:order-2' : ''
              }`}
            >
              <Reveal as="figure" className="relative lg:h-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface2 lg:aspect-auto lg:h-full lg:min-h-[460px]">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
                </div>
                <span
                  className="pointer-events-none absolute -top-6 left-2 font-display text-[clamp(3.5rem,9vw,7rem)] leading-none text-white/12 sm:-top-10"
                  aria-hidden="true"
                >
                  {p.no}
                </span>
              </Reveal>

              <div>
                <Reveal>
                  <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">
                    {p.code}
                  </p>
                  <h3
                    id={`program-${p.no}-title`}
                    className="mt-4 text-[clamp(1.5rem,3.6vw,2.4rem)] font-bold leading-tight tracking-[-0.02em]"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-white/70 sm:text-base">{p.tagline}</p>
                  <p className="mt-6 text-[15px] leading-[1.95] text-white/65">{p.summary}</p>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className="mt-9 border-t border-line pt-7">
                    <p className="eyebrow mb-5">Curriculum</p>
                    <ul className="space-y-3">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm leading-relaxed text-white/75">
                          <span className="mt-[9px] h-0.5 w-3 shrink-0 bg-accent" aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={0.14}>
                  <div className="mt-9 border-t border-line pt-7">
                    <p className="eyebrow mb-5">Recommended for</p>
                    <ul className="flex flex-wrap gap-2">
                      {p.target.map((t) => (
                        <li
                          key={t}
                          className="border border-white/20 px-3 py-2 text-xs leading-none text-white/70 sm:text-[13px]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={brand.contactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost mt-9 w-full sm:w-auto"
                  >
                    {p.title} 문의하기
                    <span aria-hidden="true">↗</span>
                  </a>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
