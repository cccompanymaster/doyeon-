'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { brand } from '@/data/site';

/* 각 채널 로고 (인라인 SVG — 외부 아이콘 라이브러리 불필요) */
const icons = {
  blog: (
    // 네이버 N 마크 — 작은 크기에서도 또렷하게 읽히도록 글자 대신 심벌을 사용
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[17px] w-[17px]">
      <path d="M5.4 4h5.1l3.9 5.9V4h4.2v16h-5.1l-3.9-5.9V20H5.4V4Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[18px] w-[18px]">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .49 1.4.9.42.41.69.81.91 1.4.17.42.37 1.03.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.2-.25 1.8-.42 2.23-.22.58-.49.98-.9 1.39-.42.42-.82.69-1.4.91-.43.17-1.03.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.2-.05-1.8-.25-2.23-.42a3.77 3.77 0 0 1-1.39-.9c-.42-.42-.69-.82-.91-1.4-.17-.43-.37-1.03-.42-2.23C2.21 15.6 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.2.25-1.8.42-2.23.22-.58.49-.98.9-1.39.42-.42.82-.69 1.4-.91.43-.17 1.03-.37 2.23-.42C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.66.8-.87 1.35-.16.41-.36 1.03-.41 2.17-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.14.25 1.76.4 2.17.22.55.47.94.88 1.35.41.41.8.66 1.35.87.41.16 1.03.36 2.17.41 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.25 2.17-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.87-1.35.16-.41.36-1.03.41-2.17.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.25-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.87c-.41-.16-1.03-.36-2.17-.41C15.5 4.01 15.14 4 12 4Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 8.15a3.21 3.21 0 1 0 0-6.42 3.21 3.21 0 0 0 0 6.42Zm6.29-8.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[19px] w-[19px]">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.1 26.1 0 0 0 2 12c0 1.63.13 3.25.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77c.27-1.55.4-3.17.4-4.8 0-1.63-.13-3.25-.4-4.8ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z" />
    </svg>
  ),
};

/**
 * 채널별 고유 색상.
 * 평소에는 검은 원 안에 채널 색 로고로 두고, 마우스를 올리면 원이 그 색으로 채워집니다.
 * (사이트의 블랙 톤을 지키면서도 어떤 채널인지 바로 알아볼 수 있게)
 */
const channels = [
  {
    key: 'blog' as const,
    label: '블로그 바로가기',
    name: '블로그',
    href: brand.social.blog,
    color: '#03C75A',
  },
  {
    key: 'instagram' as const,
    label: '인스타그램 바로가기',
    name: '인스타그램',
    href: brand.social.instagram,
    color: '#E4405F',
  },
  {
    key: 'youtube' as const,
    label: '유튜브 바로가기',
    name: '유튜브',
    href: brand.social.youtube,
    color: '#FF0000',
  },
];

/** 화면 우측 하단에 고정되는 채널 바로가기 + 상담 버튼 */
export default function FloatingActions() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : 16 }}
          transition={{ duration: reduce ? 0 : 0.3 }}
          className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2.5 sm:bottom-8 sm:right-8 sm:gap-3"
        >
          {/* 채널 바로가기 */}
          <nav aria-label="채널 바로가기">
            <ul className="flex flex-col items-end gap-2.5 sm:gap-3">
              {channels.map((c) => (
                <li key={c.key}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={c.label}
                    style={{ '--ch': c.color } as React.CSSProperties}
                    className="group flex items-center gap-2.5"
                  >
                    {/* 마우스를 올리면 왼쪽으로 채널명이 나타납니다 */}
                    <span className="pointer-events-none hidden translate-x-2 whitespace-nowrap bg-black/85 px-2.5 py-1.5 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
                      {c.name}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/70 text-[color:var(--ch)] backdrop-blur-sm transition-colors duration-300 group-hover:border-[color:var(--ch)] group-hover:bg-[color:var(--ch)] group-hover:text-white group-focus-visible:bg-[color:var(--ch)] group-focus-visible:text-white sm:h-12 sm:w-12">
                      {icons[c.key]}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 상담 버튼 */}
          <a
            href={brand.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex animate-attention items-center gap-2 bg-accent px-5 py-4 text-sm font-bold text-black drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)] transition-colors duration-300 hover:bg-white"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
              <path d="M12 3C6.98 3 2.9 6.2 2.9 10.14c0 2.53 1.7 4.76 4.26 6.02-.19.68-.68 2.47-.78 2.85-.13.48.18.47.37.34.15-.1 2.4-1.63 3.37-2.29.6.09 1.22.13 1.88.13 5.02 0 9.1-3.2 9.1-7.05S17.02 3 12 3Z" />
            </svg>
            카카오톡 상담
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
