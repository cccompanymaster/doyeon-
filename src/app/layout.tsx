import type { Metadata, Viewport } from 'next';
import { Oswald } from 'next/font/google';
import { brand } from '@/data/site';
import './globals.css';

// 영문 제목용 — 폭이 좁고 강한 서체
const display = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const title = `${brand.name} | ${brand.slogan}`;

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
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
    url: brand.siteUrl,
    siteName: brand.name,
    title,
    description: brand.description,
    images: [
      {
        url: '/images/hero.jpg',
        width: 1402,
        height: 1122,
        alt: `${brand.name} ${brand.representative} 대표 강의 현장`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: brand.description,
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
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
  url: brand.siteUrl,
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={display.variable}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
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
