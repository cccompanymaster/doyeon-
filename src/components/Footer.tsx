import { brand, navItems } from '@/data/site';

/* SNS 아이콘 (인라인 SVG — 외부 아이콘 라이브러리 불필요) */
const icons = {
  blog: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M4 4h9.5a5.5 5.5 0 0 1 0 11H8v5H4V4Zm4 3.4v4.2h5.2a2.1 2.1 0 0 0 0-4.2H8Z" />
      <circle cx="18.4" cy="17.6" r="2.4" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .49 1.4.9.42.41.69.81.91 1.4.17.42.37 1.03.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.2-.25 1.8-.42 2.23-.22.58-.49.98-.9 1.39-.42.42-.82.69-1.4.91-.43.17-1.03.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.2-.05-1.8-.25-2.23-.42a3.77 3.77 0 0 1-1.39-.9c-.42-.42-.69-.82-.91-1.4-.17-.43-.37-1.03-.42-2.23C2.21 15.6 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.2.25-1.8.42-2.23.22-.58.49-.98.9-1.39.42-.42.82-.69 1.4-.91.43-.17 1.03-.37 2.23-.42C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.66.8-.87 1.35-.16.41-.36 1.03-.41 2.17-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.14.25 1.76.4 2.17.22.55.47.94.88 1.35.41.41.8.66 1.35.87.41.16 1.03.36 2.17.41 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.25 2.17-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.87-1.35.16-.41.36-1.03.41-2.17.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.25-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.87c-.41-.16-1.03-.36-2.17-.41C15.5 4.01 15.14 4 12 4Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 8.15a3.21 3.21 0 1 0 0-6.42 3.21 3.21 0 0 0 0 6.42Zm6.29-8.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.1 26.1 0 0 0 2 12c0 1.63.13 3.25.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77c.27-1.55.4-3.17.4-4.8 0-1.63-.13-3.25-.4-4.8ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z" />
    </svg>
  ),
};

const socialLinks = [
  { key: 'blog' as const, label: '블로그 바로가기', short: 'BLOG', href: brand.social.blog },
  { key: 'instagram' as const, label: '인스타그램 바로가기', short: 'INSTAGRAM', href: brand.social.instagram },
  { key: 'youtube' as const, label: '유튜브 바로가기', short: 'YOUTUBE', href: brand.social.youtube },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink pb-12 pt-16 sm:pt-20">
      <div className="shell">
        {/* 상단: 브랜드 + 바로가기 */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-display text-3xl uppercase leading-none tracking-[0.14em] text-white sm:text-4xl">
              {brand.shortEn}
            </p>
            <p className="mt-2.5 font-display text-sm font-medium uppercase leading-none tracking-[0.2em] text-white/80 sm:text-base sm:tracking-[0.24em]">
              Pro Sales Academy
            </p>
            <p className="mt-4 text-sm text-white/55">{brand.name}</p>
            <p className="mt-1.5 text-sm text-white/60">{brand.slogan}</p>
          </div>

          {/* 🔗 SNS 바로가기 — src/data/site.ts 의 brand.social 에서 주소를 수정하세요 */}
          <nav aria-label="SNS 바로가기">
            <ul className="grid gap-2.5 sm:grid-cols-3">
              {socialLinks.map((s) => (
                <li key={s.key}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group flex items-center justify-between gap-6 border border-white/20 px-4 py-3.5 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-black"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-white/70 transition-colors group-hover:text-black">
                        {icons[s.key]}
                      </span>
                      <span className="font-display text-xs uppercase tracking-[0.18em]">
                        {s.short}
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-xs opacity-50">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* 메뉴 */}
        <nav aria-label="푸터 메뉴" className="mt-14 border-t border-line pt-8">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="font-display text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 사업자 정보 */}
        <div className="mt-10 border-t border-line pt-8">
          <dl className="flex flex-wrap gap-x-6 gap-y-2 text-xs leading-relaxed text-white/60 sm:text-[13px]">
            <div className="flex gap-2">
              <dt className="text-white/55">상호</dt>
              <dd>{brand.company.companyName}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/55">대표</dt>
              <dd>{brand.company.ceo}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/55">사업자등록번호</dt>
              <dd>{brand.company.businessNumber}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/55">주소</dt>
              <dd>{brand.company.address}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/55">문의</dt>
              <dd>
                <a href={`tel:${brand.company.phone.replace(/-/g, '')}`} className="hover:text-white">
                  {brand.company.phone}
                </a>
                <span className="px-2 text-white/20">·</span>
                <a href={`mailto:${brand.company.email}`} className="hover:text-white">
                  {brand.company.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/55">
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </p>
            <a
              href="/privacy"
              className="text-xs text-white/60 underline underline-offset-4 transition-colors hover:text-white"
            >
              개인정보처리방침
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
