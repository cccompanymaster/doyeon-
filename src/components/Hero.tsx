'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { brand, hero } from '@/data/site';

export default function Hero() {
  const reduce = useReducedMotion();

  const line = (i: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 46 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0 : 0.9,
      delay: reduce ? 0 : 0.15 + i * 0.13,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="top"
      aria-label="브랜드 소개"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-ink"
    >
      {/* 배경 이미지 — 느린 줌 효과 */}
      <div className="absolute inset-0">
        <div className={`relative h-full w-full ${reduce ? '' : 'animate-slowZoom'}`}>
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
            quality={82}
            className="object-cover object-[62%_center] sm:object-center"
          />
        </div>
        {/* 어두운 오버레이 — 글자 가독성 확보 */}
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.55)_38%,rgba(0,0,0,0.88)_100%)]"
          aria-hidden="true"
        />
      </div>

      <div className="shell-wide relative z-10 pb-28 pt-32 sm:pb-32">
        <motion.p
          {...line(0)}
          className="eyebrow mb-6 text-white/70"
        >
          Hospital Consulting Sales Education
        </motion.p>

        <h1 className="display-title text-[clamp(2.05rem,9.4vw,7.5rem)] font-semibold">
          {hero.lines.map((l, i) => (
            <motion.span key={l.text} {...line(i + 1)} className="block">
              <span className={l.accent ? 'text-accent' : 'text-white'}>{l.text}</span>
            </motion.span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-10 sm:mt-12 md:flex-row md:items-end md:justify-between">
          <motion.div {...line(4)} className="max-w-xl">
            <div className="mb-5 h-px w-16 bg-accent" aria-hidden="true" />
            <p className="text-lg font-semibold leading-snug text-white sm:text-2xl">
              {hero.korean}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
              {brand.description}
            </p>
          </motion.div>

          {/* 원형 CONTACT NOW 버튼 */}
          <motion.div {...line(5)} className="shrink-0">
            <a
              href={brand.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-32 w-32 items-center justify-center rounded-full bg-white text-center transition-colors duration-300 hover:bg-accent focus-visible:bg-accent sm:h-40 sm:w-40"
            >
              <span className="whitespace-pre-line font-display text-base uppercase leading-tight tracking-[0.14em] text-black sm:text-lg">
                {hero.ctaLabel}
              </span>
              <span className="absolute inset-0 rounded-full ring-1 ring-white/40 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* 스크롤 안내 */}
      <div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden="true"
      >
        <span className="font-display text-[10px] uppercase tracking-[0.3em] text-white/45">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
