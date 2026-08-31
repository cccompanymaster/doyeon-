import Image from 'next/image';
import { brand, contact } from '@/data/site';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-ink py-28 sm:py-36 lg:py-44"
    >
      {/* 흑백 배경 이미지 + 어두운 오버레이 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={contact.image}
          alt={contact.imageAlt}
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-black/80" aria-hidden="true" />
      </div>

      <div className="shell text-center">
        <Reveal>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2
            id="contact-heading"
            className="mt-7 text-balance text-[clamp(1.75rem,5.6vw,3.6rem)] font-bold leading-[1.3] tracking-[-0.02em]"
          >
            {contact.headline.map((l, i) => (
              <span key={l} className={i === 1 ? 'block text-accent' : 'block'}>
                {l}
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-8 max-w-xl whitespace-pre-line text-[15px] leading-[1.95] text-white/70 sm:text-base">
            {contact.body}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={brand.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent w-full animate-attention sm:w-auto"
            >
              {contact.buttonLabel}
              <span aria-hidden="true">↗</span>
            </a>
            <a href={`tel:${brand.company.phone.replace(/-/g, '')}`} className="btn-ghost w-full sm:w-auto">
              {brand.company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
