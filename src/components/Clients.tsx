import { clientFields } from '@/data/site';
import SectionHeading from './SectionHeading';

/**
 * 교육 대상 분야 무한 슬라이더.
 * 협업 병원 로고가 준비되면 아래 span 대신 <Image> 로고로 교체하고
 * grayscale → hover:grayscale-0 클래스를 그대로 사용하면 됩니다.
 */
export default function Clients() {
  const loop = [...clientFields, ...clientFields];

  return (
    <section aria-labelledby="clients-heading" className="bg-ink pb-20 pt-4 sm:pb-28">
      <div className="shell">
        <SectionHeading eyebrow="Our Clients" aside="병원 현장에 맞춘 상담 교육을 진행합니다" />
        <h2 id="clients-heading" className="sr-only">
          주요 교육 대상 분야
        </h2>
      </div>

      <div
        className="group relative mt-12 overflow-hidden"
        // 좌우 페이드 마스크
        style={{
          maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
          WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
        }}
      >
        <ul
          className="flex w-max animate-marquee items-center gap-10 sm:gap-16 [animation-play-state:running] group-hover:[animation-play-state:paused]"
          aria-label="주요 교육 대상 분야"
        >
          {loop.map((field, i) => (
            <li
              key={`${field}-${i}`}
              aria-hidden={i >= clientFields.length ? 'true' : undefined}
              className="shrink-0 font-display text-2xl uppercase tracking-[0.12em] text-white/55 transition-colors duration-300 hover:text-white sm:text-4xl"
            >
              {field}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
