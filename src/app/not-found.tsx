import type { Metadata } from 'next';
import Link from 'next/link';
import { brand } from '@/data/site';

export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-6 py-24">
      <div className="w-full max-w-xl text-center">
        <p className="font-display text-[clamp(4rem,16vw,9rem)] font-semibold leading-none text-accent">
          404
        </p>
        <h1 className="mt-8 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-white/65">
          주소가 바뀌었거나 삭제된 페이지입니다.
          <br />
          아래 버튼으로 처음 화면에서 다시 찾아보세요.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-accent w-full sm:w-auto">
            홈으로 돌아가기
          </Link>
          <a
            href={brand.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost w-full sm:w-auto"
          >
            교육 문의하기
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <p className="mt-12 border-t border-line pt-8 font-display text-xs uppercase tracking-[0.24em] text-white/55">
          {brand.shortEn} &nbsp;Pro Sales Academy
        </p>
      </div>
    </main>
  );
}
