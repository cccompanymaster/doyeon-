import Image from 'next/image';
import { media } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Media() {
  return (
    <section aria-labelledby="media-heading" className="bg-ink py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <SectionHeading eyebrow={media.eyebrow} aside="방송 · 매거진 · 협업" />

        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <h2
              id="media-heading"
              className="text-balance text-[clamp(1.65rem,5.2vw,3.4rem)] font-bold leading-[1.3] tracking-[-0.02em]"
            >
              {media.headline}
              <span className="block text-accent">{media.headlineAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[15px] leading-[2] text-white/65 lg:pt-3">{media.body}</p>
          </Reveal>
        </div>

        {/* 방송 · 협업 이미지 그리드 */}
        <ul className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {media.items.map((item, i) => (
            <Reveal as="li" key={item.src} delay={(i % 3) * 0.08}>
              <figure className="group relative">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface2">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    // 세로 사진은 데이터에 지정한 초점 위치로 잘라 인물이 잘리지 않게 함
                    style={{ objectPosition: item.position ?? 'center' }}
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_40%,rgba(0,0,0,0.92)_100%)]"
                    aria-hidden="true"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-[10px] uppercase tracking-[0.22em] text-accent">
                      {item.category}
                    </span>
                    {item.year ? (
                      <span className="font-display text-[10px] tracking-[0.1em] text-white/45">
                        {item.year}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 text-base font-semibold text-white">{item.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
