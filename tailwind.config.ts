import type { Config } from 'tailwindcss';

/**
 * ────────────────────────────────────────────────────────────────
 *  브랜드 컬러 / 폰트 설정
 *  포인트 컬러를 바꾸고 싶으면 아래 accent 값과
 *  src/app/globals.css 의 --accent 값을 함께 수정하세요.
 * ────────────────────────────────────────────────────────────────
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',        // 기본 배경 (블랙)
        surface: '#0E0E0E',    // 보조 배경
        surface2: '#171717',   // 보조 배경 2
        line: 'rgba(255,255,255,0.14)',
        accent: {
          DEFAULT: '#FF3B7D',  // 포인트 컬러
          soft: '#FF6E9D',
          deep: '#D61F5B',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        sans: ['var(--font-pretendard)', 'system-ui', 'sans-serif'],
      },
      opacity: {
        8: '0.08',
        12: '0.12',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        72: '0.72',
        85: '0.85',
      },
      maxWidth: {
        shell: '1200px',
        wide: '1440px',
      },
      letterSpacing: {
        ultra: '0.32em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        // 상담 버튼 주목 효과 — 링이 퍼지며 살짝 커집니다.
        // 눈이 피로하지 않도록 2.4초 주기의 느린 맥박으로 설정했습니다.
        // (WCAG 2.3.1: 초당 3회 이상 점멸 금지 — 초당 0.4회라 안전)
        attention: {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(255, 59, 125, 0.55)',
          },
          '50%': {
            transform: 'scale(1.035)',
            boxShadow: '0 0 0 14px rgba(255, 59, 125, 0)',
          },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        slowZoom: 'slowZoom 18s ease-out forwards',
        attention: 'attention 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
