'use client';

import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { brand } from '@/data/site';

/* 각 채널 로고 (인라인 SVG — 외부 아이콘 라이브러리 불필요) */
const naverIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[17px] w-[17px]">
    <path d="M5.4 4h5.1l3.9 5.9V4h4.2v16h-5.1l-3.9-5.9V20H5.4V4Z" />
  </svg>
);

const instagramIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[20px] w-[20px]">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .49 1.4.9.42.41.69.81.91 1.4.17.42.37 1.03.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.2-.25 1.8-.42 2.23-.22.58-.49.98-.9 1.39-.42.42-.82.69-1.4.91-.43.17-1.03.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.2-.05-1.8-.25-2.23-.42a3.77 3.77 0 0 1-1.39-.9c-.42-.42-.69-.82-.91-1.4-.17-.43-.37-1.03-.42-2.23C2.21 15.6 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.2.25-1.8.42-2.23.22-.58.49-.98.9-1.39.42-.42.82-.69 1.4-.91.43-.17 1.03-.37 2.23-.42C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.66.8-.87 1.35-.16.41-.36 1.03-.41 2.17-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.14.25 1.76.4 2.17.22.55.47.94.88 1.35.41.41.8.66 1.35.87.41.16 1.03.36 2.17.41 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.25 2.17-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.87-1.35.16-.41.36-1.03.41-2.17.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.25-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.87c-.41-.16-1.03-.36-2.17-.41C15.5 4.01 15.14 4 12 4Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 8.15a3.21 3.21 0 1 0 0-6.42 3.21 3.21 0 0 0 0 6.42Zm6.29-8.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
  </svg>
);

const youtubeIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[21px] w-[21px]">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.1 26.1 0 0 0 2 12c0 1.63.13 3.25.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77c.27-1.55.4-3.17.4-4.8 0-1.63-.13-3.25-.4-4.8ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z" />
  </svg>
);

const kakaoIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[23px] w-[23px]">
    <path d="M12 3C6.98 3 2.9 6.2 2.9 10.14c0 2.53 1.7 4.76 4.26 6.02-.19.68-.68 2.47-.78 2.85-.13.48.18.47.37.34.15-.1 2.4-1.63 3.37-2.29.6.09 1.22.13 1.88.13 5.02 0 9.1-3.2 9.1-7.05S17.02 3 12 3Z" />
  </svg>
);

type Action = {
  key: string;
  label: string;
  name: string;
  href: string;
  icon: ReactNode;
  /** 원 배경 — 각 채널의 실제 브랜드 색 */
  background: string;
  /** 로고 색 */
  color: string;
  /** 맥박 링 색 */
  ring?: string;
  /** 주 버튼 여부 (조금 더 크고 맥박 효과가 붙습니다) */
  primary?: boolean;
};

const actions: Action[] = [
  {
    key: 'blog',
    label: '블로그 바로가기',
    name: '블로그',
    href: brand.social.blog,
    icon: naverIcon,
    background: '#03C75A',
    color: '#FFFFFF',
  },
  {
    key: 'instagram',
    label: '인스타그램 바로가기',
    name: '인스타그램',
    href: brand.social.instagram,
    icon: instagramIcon,
    // 인스타그램 공식 그라디언트
    background:
      'radial-gradient(circle at 30% 107%, #FDF497 0%, #FDF497 5%, #FD5949 45%, #D6249F 60%, #285AEB 90%)',
    color: '#FFFFFF',
  },
  {
    key: 'youtube',
    label: '유튜브 바로가기',
    name: '유튜브',
    href: brand.social.youtube,
    icon: youtubeIcon,
    background: '#FF0000',
    color: '#FFFFFF',
  },
  {
    key: 'kakao',
    label: '카카오톡으로 교육 문의하기',
    name: '카카오톡 상담',
    href: brand.contactUrl,
    icon: kakaoIcon,
    background: '#FEE500',
    color: '#3C1E1E',
    ring: 'rgba(254, 229, 0, 0.7)',
    primary: true,
  },
];

/** 화면 우측에 고정되는 채널 바로가기 + 상담 버튼 */
export default function FloatingActions() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    // 히어로 타이틀이 위로 밀려나기 시작하는 지점에서 바로 나타납니다.
    const onScroll = () => setShow(window.scrollY > 150);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          aria-label="채널 바로가기 및 상담"
          initial={{ opacity: 0, x: reduce ? 0 : 14 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: reduce ? 0 : 14 }}
          transition={{ duration: reduce ? 0 : 0.3 }}
          className="fixed bottom-5 right-4 z-40 sm:bottom-8 sm:right-8"
        >
          <ul className="flex flex-col items-end gap-3">
            {actions.map((a) => (
              <li key={a.key}>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={a.label}
                  className="group flex items-center gap-2.5"
                >
                  {/* 마우스를 올리면 왼쪽으로 이름이 나타납니다 */}
                  <span className="pointer-events-none hidden translate-x-2 whitespace-nowrap bg-black/85 px-2.5 py-1.5 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
                    {a.name}
                  </span>
                  <span
                    style={
                      {
                        background: a.background,
                        color: a.color,
                        '--ring': a.ring,
                      } as CSSProperties
                    }
                    className={`flex items-center justify-center rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.45)] ring-1 ring-white/25 transition-transform duration-300 group-hover:scale-110 ${
                      a.primary
                        ? 'h-[58px] w-[58px] animate-attention sm:h-[62px] sm:w-[62px]'
                        : 'h-12 w-12 sm:h-[52px] sm:w-[52px]'
                    }`}
                  >
                    {a.icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
