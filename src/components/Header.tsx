'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { brand, navItems } from '@/data/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const reduce = useReducedMotion();

  /* 스크롤 시 헤더 배경 전환 */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* 현재 보고 있는 섹션 하이라이트 */
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* 모바일 메뉴 열림 시 배경 스크롤 잠금 + ESC 닫기 */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  /* 부드러운 앵커 이동 (reduced-motion 존중) */
  const goTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setOpen(false);
      const el = document.getElementById(id);
      if (!el) return;
      // 모바일 메뉴가 걸어둔 스크롤 잠금을 먼저 풀어야 이동이 동작합니다.
      document.body.style.overflow = '';
      // 메뉴가 닫히며 레이아웃이 정리된 뒤 위치를 계산합니다.
      requestAnimationFrame(() => {
        const top = el.getBoundingClientRect().top + window.scrollY - 68;
        window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
        // 키보드 사용자를 위해 포커스도 함께 이동
        el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
      });
    },
    [reduce],
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'bg-black/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div
        className={`absolute inset-x-0 bottom-0 h-px transition-opacity duration-500 ${
          scrolled ? 'bg-line opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      <div className="shell-wide flex h-[68px] items-center justify-between">
        {/* 로고 */}
        <a
          href="#top"
          onClick={(e) => goTo(e, 'top')}
          className="group flex items-baseline gap-2"
          aria-label={`${brand.name} 홈으로 이동`}
        >
          <span className="font-display text-xl uppercase leading-none tracking-[0.14em] text-white sm:text-[22px]">
            {brand.shortEn}
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.28em] text-white/50 sm:inline">
            Pro Sales Academy
          </span>
        </a>

        {/* 데스크톱 메뉴 */}
        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => goTo(e, item.id)}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`relative font-display text-[13px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    active === item.id ? 'text-white' : 'text-white/65 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                      active === item.id ? 'w-full' : 'w-0'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 햄버거 버튼 (모바일) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`block h-px w-6 bg-white transition-transform duration-300 ${
              open ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-transform duration-300 ${
              open ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="모바일 메뉴"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-black/95 md:hidden"
          >
            <ul className="shell-wide flex flex-col py-3">
              {navItems.map((item) => (
                <li key={item.id} className="border-b border-white/10 last:border-0">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => goTo(e, item.id)}
                    className="flex items-center justify-between py-4 font-display text-lg uppercase tracking-[0.18em] text-white/85"
                  >
                    {item.label}
                    <span className="text-xs text-white/30">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="shell-wide pb-6">
              <a href={brand.contactUrl} target="_blank" rel="noopener noreferrer" className="btn-accent w-full">
                상담 신청하기
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
