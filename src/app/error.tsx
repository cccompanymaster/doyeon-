'use client';

import { useEffect } from 'react';
import { brand } from '@/data/site';

/**
 * 예기치 못한 오류가 났을 때 흰 화면 대신 보여줄 안내입니다.
 * 오류 내용은 화면에 노출하지 않고 콘솔에만 남깁니다.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-6 py-24">
      <div className="w-full max-w-xl text-center">
        <p className="eyebrow">Error</p>
        <h1 className="mt-7 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
          일시적인 문제가 발생했습니다
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-white/65">
          잠시 후 다시 시도해 주세요. 문제가 계속되면 아래로 문의해 주시면
          <br className="hidden sm:inline" />
          빠르게 확인해 드리겠습니다.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="btn-accent w-full sm:w-auto">
            다시 시도
          </button>
          <a
            href={brand.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost w-full sm:w-auto"
          >
            카카오톡 문의
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {error.digest ? (
          <p className="mt-10 font-display text-[11px] uppercase tracking-[0.2em] text-white/55">
            code {error.digest}
          </p>
        ) : null}
      </div>
    </main>
  );
}
