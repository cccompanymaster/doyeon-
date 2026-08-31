import Image from 'next/image';
import { brand, vision } from '@/data/site';
import Reveal from './Reveal';

export default function Vision() {
  return (
    <section
      aria-labelledby="vision-heading"
      className="relative overflow-hidden bg-ink py-32 sm:py-40 lg:py-52"
    >
      {/* 배경 이미지 — 매우 어둡게 처리 */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={vision.image}
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.95)_72%)]" />
      </div>

      <div className="shell relative z-10 text-center">
        {/* 브랜드 심벌 — YUDAM 과 PRO SALES ACADEMY 를 하나의 로고처럼 함께 노출 */}
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <span className="font-display text-[clamp(2.9rem,12vw,8rem)] font-semibold uppercase leading-[0.85] tracking-[0.04em] text-white">
              {brand.shortEn}
            </span>

            <span className="mt-5 flex w-full items-center gap-4 sm:mt-6 sm:gap-6">
              <span className="h-px flex-1 bg-white/25" aria-hidden="true" />
              <span className="font-display text-[clamp(0.95rem,3.4vw,2.05rem)] font-semibold uppercase leading-none tracking-[0.18em] text-white sm:tracking-[0.22em]">
                Pro Sales Academy
              </span>
              <span className="h-px flex-1 bg-white/25" aria-hidden="true" />
            </span>

            <span className="mt-4 text-sm font-medium tracking-wide text-accent sm:text-base">
              {brand.name}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.14} className="mt-16 sm:mt-20">
          <p className="eyebrow mb-8">{vision.eyebrow}</p>
          <h2
            id="vision-heading"
            className="text-balance text-[clamp(1.5rem,4.6vw,3rem)] font-bold leading-[1.35] tracking-[-0.02em]"
          >
            {vision.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
            <span className="block text-accent">{vision.accentLine}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mx-auto mt-10 max-w-3xl text-base leading-[1.95] text-white/80 sm:text-lg sm:leading-[2]">
            {vision.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
