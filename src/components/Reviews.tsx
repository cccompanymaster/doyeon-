'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { reviews } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Reviews() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = card ? card.clientWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section id="review" aria-labelledby="review-heading" className="bg-ink py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <SectionHeading eyebrow="Real Review" aside="수강생 후기" />

        <div className="mt-12 flex flex-wrap items-end justify-between gap-8 sm:mt-16">
          <Reveal className="max-w-2xl">
            <h2
              id="review-heading"
              className="text-balance text-[clamp(1.65rem,5.2vw,3.4rem)] font-bold leading-[1.3] tracking-[-0.02em]"
            >
              상담이 달라지면
              <span className="block text-accent">숫자가 달라집니다.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.9] text-white/60 sm:text-base">
              실제 교육을 수강한 상담실장들이 현장에서 만들어낸 변화입니다.
            </p>
          </Reveal>

          {/* 좌우 이동 버튼 */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={atStart}
              aria-label="이전 후기 보기"
              className="flex h-12 w-12 items-center justify-center border border-white/25 text-white transition-colors duration-300 enabled:hover:border-white enabled:hover:bg-white enabled:hover:text-black disabled:opacity-30"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={atEnd}
              aria-label="다음 후기 보기"
              className="flex h-12 w-12 items-center justify-center border border-white/25 text-white transition-colors duration-300 enabled:hover:border-white enabled:hover:bg-white enabled:hover:text-black disabled:opacity-30"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* 가로 스크롤 후기 카드 */}
      <div className="mt-12 sm:mt-14">
        <ul
          ref={trackRef}
          tabIndex={0}
          aria-label="수강생 후기 목록 (좌우로 스크롤하세요)"
          // 좌우 여백을 본문(shell)과 맞추고, 스냅 위치도 같은 값으로 보정합니다.
          style={{
            paddingInline: 'var(--track-pad)',
            scrollPaddingInline: 'var(--track-pad)',
          }}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [--track-pad:1.5rem] sm:[--track-pad:2rem] lg:[--track-pad:max(2.5rem,calc((100vw-1200px)/2))]"
        >
          {reviews.map((r) => (
            <li
              key={r.headline}
              className="flex w-[86vw] shrink-0 snap-start flex-col justify-between border border-white/12 bg-surface p-7 transition-colors duration-500 hover:border-accent sm:w-[420px] sm:p-9"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-[10px] uppercase tracking-[0.2em] text-accent">
                    {r.field}
                  </span>
                  {r.result ? (
                    <span className="border border-accent/50 px-2.5 py-1 text-[11px] leading-none text-accent">
                      {r.result}
                    </span>
                  ) : null}
                </div>

                <blockquote className="mt-6">
                  <p className="text-lg font-bold leading-[1.55] text-white sm:text-xl">
                    “{r.headline}”
                  </p>
                  <p className="mt-5 text-sm leading-[1.95] text-white/60">{r.body}</p>
                </blockquote>
              </div>

              <footer className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 font-display text-sm text-white/70"
                  aria-hidden="true"
                >
                  {r.name.slice(0, 1)}
                </span>
                <span className="text-sm">
                  <span className="font-semibold text-white">{r.name}</span>
                  <span className="ml-2 text-white/60">{r.role}</span>
                </span>
              </footer>
            </li>
          ))}
        </ul>
      </div>

      <p className="shell mt-6 text-xs text-white/55">
        * 후기는 수강생 동의를 받아 게재하였으며, 개인정보 보호를 위해 성함 일부를 비공개 처리했습니다.
      </p>
    </section>
  );
}
