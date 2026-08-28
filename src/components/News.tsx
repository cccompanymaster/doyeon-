import Image from 'next/image';
import { brand, news } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function News() {
  return (
    <section id="news" aria-labelledby="news-heading" className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <SectionHeading eyebrow="Our News" aside="출간 · 미디어 · 활동 소식" />

        <Reveal className="mt-12 sm:mt-16">
          <h2
            id="news-heading"
            className="text-[clamp(1.65rem,5.2vw,3.4rem)] font-bold leading-[1.3] tracking-[-0.02em]"
          >
            현장에서 쌓은 기록
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4">
          {news.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.09}>
              <a
                href={item.href}
                className="group flex h-full flex-col focus-visible:outline-none"
                {...(item.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface2">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                  />
                  <span className="absolute left-0 top-0 bg-black/70 px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.2em] text-white">
                    {item.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col border-t border-line pt-5">
                  <h3 className="text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/60">
                    {item.excerpt}
                  </p>
                  <p className="mt-auto pt-6 font-display text-xs uppercase tracking-[0.18em] text-white/40">
                    {item.date}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            {/* 블로그가 개설되면 brand.social.blog 링크로 연결됩니다 */}
            <a
              href={brand.social.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              뉴스 더 보기
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
