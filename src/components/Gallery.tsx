import Image from 'next/image';
import { gallery } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="bg-surface2 py-24 sm:py-32 lg:py-40"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Activity & Lecture"
          aside={<span id="gallery-heading">강의 · 교육 · 활동 현장</span>}
        />

        {/* 2열 이미지 갤러리 — 비율 고정으로 CLS 방지 */}
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5">
          {gallery.map((item, i) => (
            <Reveal as="li" key={item.src} delay={(i % 2) * 0.1}>
              <figure className="group relative">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_45%,rgba(0,0,0,0.78)_100%)]"
                    aria-hidden="true"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="font-display text-[10px] uppercase tracking-[0.24em] text-accent">
                    {item.category}
                  </p>
                  <p className="mt-1.5 text-base font-semibold text-white sm:text-lg">{item.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
