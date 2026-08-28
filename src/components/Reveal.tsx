'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** 등장 지연 (초) */
  delay?: number;
  /** 이동 거리 (px) */
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'article' | 'span' | 'figure';
};

/**
 * 스크롤로 화면에 들어올 때 아래에서 부드럽게 나타나는 래퍼.
 * prefers-reduced-motion 이 켜져 있으면 이동 없이 즉시 표시됩니다.
 */
export default function Reveal({ children, delay = 0, y = 28, className, as = 'div' }: Props) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      // 모션 최소화 설정이면 숨김 상태 없이 즉시 표시합니다.
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}
