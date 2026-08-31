'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { brand, programCompare, programs } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Programs() {
  // 선택된 과정 (기본값: 첫 번째 과정)
  const [active, setActive] = useState(programs[0].no);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  /**
   * 카드를 눌러 과정을 바꿉니다.
   * 상세 영역이 화면 밖에 있을 때만 스크롤을 옮겨, 내용이 바뀐 것을 놓치지 않게 합니다.
   * (방향키 이동에는 적용하지 않습니다 — 포커스가 카드에 머물러야 하므로)
   */
  const selectByClick = (no: string) => {
    setActive(no);
    const el = panelRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const fullyVisible = rect.top >= 68 && rect.bottom <= window.innerHeight;
      if (fullyVisible) return;
      window.scrollTo({
        top: rect.top + window.scrollY - 88,
        behavior: reduce ? 'auto' : 'smooth',
      });
    });
  };

  /** 좌우 방향키로 과정 이동 */
  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const last = programs.length - 1;
    const next =
      e.key === 'ArrowRight' ? (index === last ? 0 : index + 1)
      : e.key === 'ArrowLeft' ? (index === 0 ? last : index - 1)
      : e.key === 'Home' ? 0
      : last;
    setActive(programs[next].no);
    document.getElementById(`tab-${programs[next].no}`)?.focus();
  };

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
            현재 나의 상담 단계에 맞는 과정을 선택하세요. 카드를 누르면 아래에 해당 과정의 상세
            내용이 바로 열립니다.
          </p>
        </Reveal>

        {/* 과정 선택 카드 */}
        <div
          role="tablist"
          aria-label="교육 과정 선택"
          className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5"
        >
          {programs.map((p, i) => {
            const selected = p.no === active;
            return (
              <Reveal key={p.no} delay={i * 0.07}>
                <button
                  type="button"
                  role="tab"
                  id={`tab-${p.no}`}
                  aria-selected={selected}
                  aria-controls={`panel-${p.no}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectByClick(p.no)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className="group block w-full text-left"
                >
                  <div
                    className={`relative aspect-[16/10] w-full overflow-hidden bg-surface2 transition-[outline-color] duration-300 outline outline-2 ${
                      selected ? 'outline-accent' : 'outline-transparent'
                    }`}
                  >
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className={`object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06] ${
                        selected ? 'scale-[1.03]' : ''
                      }`}
                    />
                    <div
                      className={`absolute inset-0 transition-colors duration-500 ${
                        selected
                          ? 'bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.86)_100%)]'
                          : 'bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.82)_100%)]'
                      }`}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                      <div>
                        <p className="font-display text-[11px] uppercase tracking-[0.22em] text-accent">
                          {p.no} &nbsp;{p.code}
                        </p>
                        <p
                          className={`mt-2 text-lg font-bold leading-snug transition-colors duration-300 sm:text-xl ${
                            selected ? 'text-accent' : 'text-white group-hover:text-accent'
                          }`}
                        >
                          {p.title}
                        </p>
                      </div>
                      {/* 선택 상태를 아이콘으로도 표시 */}
                      <span
                        className={`shrink-0 text-2xl leading-none transition-transform duration-300 ${
                          selected
                            ? 'rotate-90 text-accent'
                            : 'text-white/60 group-hover:translate-x-1 group-hover:text-white'
                        }`}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* 선택한 과정의 상세 — 카드 바로 아래에서 열립니다 */}
        <div ref={panelRef} className="mt-5 scroll-mt-24 sm:mt-6">
          {programs.map((p) => (
            <div
              key={p.no}
              role="tabpanel"
              id={`panel-${p.no}`}
              aria-labelledby={`tab-${p.no}`}
              hidden={p.no !== active}
            >
              <motion.article
                key={active}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="border border-accent/35 bg-ink p-7 sm:p-10 lg:p-12"
              >
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                  <div>
                    <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">
                      {p.no} &nbsp;{p.code}
                    </p>
                    <h3 className="mt-4 text-[clamp(1.5rem,3.6vw,2.4rem)] font-bold leading-tight tracking-[-0.02em]">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium text-white/70 sm:text-base">
                      {p.tagline}
                    </p>
                    <p className="mt-6 text-[15px] leading-[1.95] text-white/70">{p.summary}</p>

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
                  </div>

                  <div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface2">
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

                    <div className="mt-8 border-t border-line pt-7">
                      <p className="eyebrow mb-5">Curriculum</p>
                      <ul className="space-y-3">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex gap-3 text-sm leading-relaxed text-white/75">
                            <span
                              className="mt-[9px] h-0.5 w-3 shrink-0 bg-accent"
                              aria-hidden="true"
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={brand.contactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent mt-9 w-full sm:w-auto"
                    >
                      {p.title} 문의하기
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>

        {/* 과정 한눈에 비교 — 좁은 화면에서는 표만 가로 스크롤 */}
        <Reveal delay={0.1} className="mt-16 sm:mt-20">
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
                      className="whitespace-nowrap px-5 py-4 font-display text-[11px] uppercase tracking-[0.18em] text-white/60"
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
    </section>
  );
}
