'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { brand } from '@/data/site';

/** 스크롤 후 나타나는 고정 상담 버튼 */
export default function FloatingCta() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={brand.contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : 16 }}
          transition={{ duration: reduce ? 0 : 0.3 }}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-accent px-5 py-4 text-sm font-bold text-black shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:bg-white sm:bottom-8 sm:right-8"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
            <path d="M12 3C6.98 3 2.9 6.2 2.9 10.14c0 2.53 1.7 4.76 4.26 6.02-.19.68-.68 2.47-.78 2.85-.13.48.18.47.37.34.15-.1 2.4-1.63 3.37-2.29.6.09 1.22.13 1.88.13 5.02 0 9.1-3.2 9.1-7.05S17.02 3 12 3Z" />
          </svg>
          카카오톡 상담
        </motion.a>
      )}
    </AnimatePresence>
  );
}
