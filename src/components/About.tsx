import Image from 'next/image';
import { about, brand } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-ink py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <SectionHeading eyebrow="Our Value" aside={brand.nameEn} />

        {/* 핵심 메시지 */}
        <Reveal className="mt-12 sm:mt-16">
          <h2
            id="about-heading"
            className="text-balance text-[clamp(1.65rem,5.2vw,3.4rem)] font-bold leading-[1.28] tracking-[-0.02em]"
          >
            {about.headline.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
            <span className="block text-accent">{about.headlineAccent}</span>
          </h2>
          <p className="mt-6 text-sm tracking-wide text-white/55 sm:text-base">{about.role}</p>
        </Reveal>

        {/* 지표 */}
        <Reveal delay={0.08} className="mt-14 sm:mt-16">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-9 border-y border-line py-9 sm:gap-y-10 lg:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="font-display text-4xl leading-none text-white sm:text-5xl">
                    {s.value}
                  </span>
                  <span className="ml-1.5 font-display text-xs uppercase tracking-[0.16em] text-accent sm:text-sm">
                    {s.unit}
                  </span>
                  <span className="mt-2.5 block text-xs leading-relaxed text-white/55 sm:text-sm">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* 프로필 + 본문 */}
        <div className="mt-16 grid gap-10 sm:mt-20 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <figure className="relative">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface2">
                <Image
                  src={about.portrait.src}
                  alt={about.portrait.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="object-cover object-top grayscale-[15%]"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-3 border-t border-line pt-4">
                <span className="text-base font-semibold text-white">
                  {brand.representative}
                  <span className="ml-2 text-xs font-normal text-white/50">대표</span>
                </span>
                <span className="font-display text-[11px] uppercase tracking-[0.2em] text-white/60">
                  CEO
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="mb-5 text-[15px] leading-[1.95] text-white/72 last:mb-0 sm:text-base sm:leading-[2.05]">
                  {p}
                </p>
              </Reveal>
            ))}

            {/* 주요 경력 */}
            <Reveal delay={0.1}>
              <div className="mt-12 border-t border-line pt-8">
                <p className="eyebrow mb-6">{about.careerTitle}</p>
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {about.careers.map((c) => (
                    <li key={c} className="flex gap-3 text-sm leading-relaxed text-white/70">
                      <span className="mt-[9px] h-0.5 w-3 shrink-0 bg-accent" aria-hidden="true" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 활동 이미지 3장 */}
        <div className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-3 sm:gap-5">
          {about.images.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.1}>
              <div className="group relative aspect-[4/3] w-full overflow-hidden bg-surface2">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/5"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
