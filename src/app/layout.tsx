import type { Metadata, Viewport } from 'next';
import { Oswald } from 'next/font/google';
import { brand, programs } from '@/data/site';
import { getSiteUrl } from '@/lib/site-url';
import './globals.css';

// 영문 제목용 — 폭이 좁고 강한 서체
const display = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const siteUrl = getSiteUrl();
const title = `${brand.name} | ${brand.slogan}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    '병원상담실장 교육',
    '상담실장 세일즈 교육',
    '병원 상담 교육',
    '피부과 상담실장',
    '성형외과 상담실장',
    '객단가 상승',
    '계약률 상승',
    '세일즈 코칭',
    '윤도연',
    '유담프로세일즈아카데미',
  ],
  authors: [{ name: brand.representative }],
  creator: brand.representative,
  publisher: brand.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    siteName: brand.name,
    title,
    description: brand.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${brand.name} — ${brand.slogan}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: brand.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  // 검색엔진 소유 확인 — 발급받은 코드를 Vercel 환경변수에 넣으면 자동 적용됩니다.
  //   NEXT_PUBLIC_NAVER_VERIFICATION  (네이버 서치어드바이저)
  //   NEXT_PUBLIC_GOOGLE_VERIFICATION (구글 서치콘솔)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_NAVER_VERIFICATION
      ? { 'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_VERIFICATION }
      : {},
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

// 검색엔진용 구조화 데이터
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: brand.name,
  alternateName: brand.nameEn,
  url: siteUrl,
  description: brand.description,
  slogan: brand.slogan,
  founder: { '@type': 'Person', name: brand.representative },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
    streetAddress: brand.company.address,
  },
  email: brand.company.email,
  telephone: brand.company.phone,
  // 제공 교육 과정 — 검색 결과에 과정 목록이 함께 노출될 수 있습니다.
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '교육 과정',
    itemListElement: programs.map((p) => ({
      '@type': 'Course',
      name: p.title,
      description: p.summary,
      provider: { '@type': 'Organization', name: brand.name, url: siteUrl },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={display.variable}>
      <head>
        {/*
          Pretendard 웹폰트.
          globals.css 안에서 @import 로 부르면 CSS 를 받은 뒤에야 폰트 CSS 를 다시
          요청해 대기 시간이 두 배가 되므로, head 에서 바로 병렬로 내려받습니다.
        */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
