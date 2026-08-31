/**
 * 보안 응답 헤더
 *
 * 이 사이트는 입력 폼·로그인·쿠키가 없는 정적 소개 페이지입니다.
 * 따라서 아래 헤더로 외부 스크립트 주입, 클릭재킹, MIME 스니핑,
 * 폼 탈취, 혼합 콘텐츠를 차단하는 데 초점을 맞췄습니다.
 *
 * script-src 에 'unsafe-inline' 이 남아 있는 이유:
 *   Next.js 가 하이드레이션을 위해 인라인 스크립트를 넣습니다.
 *   이를 없애려면 미들웨어로 요청마다 nonce 를 발급해야 하는데,
 *   그러면 모든 페이지가 동적 렌더링으로 바뀌어 정적 캐싱 이점을 잃습니다.
 *   사용자 입력을 받는 곳이 없어 XSS 유입 경로가 사실상 없으므로,
 *   캐싱을 유지하고 나머지를 엄격히 막는 쪽을 선택했습니다.
 *   (문의 폼 등 입력을 추가하게 되면 nonce 방식으로 전환하세요.)
 */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  // 외부로 폼 전송이 나가지 않도록 차단
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline'",
  // Pretendard 웹폰트 CSS (jsDelivr) + Tailwind 인라인 스타일
  "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
  "font-src 'self' https://cdn.jsdelivr.net data:",
  // next/image 최적화 결과와 인라인 SVG
  "img-src 'self' data: blob:",
  "connect-src 'self' https://cdn.jsdelivr.net",
  "manifest-src 'self'",
  "media-src 'self'",
  // http 리소스를 https 로 자동 승격
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  // 다른 사이트가 iframe 으로 감싸 클릭재킹하는 것을 차단
  { key: 'X-Frame-Options', value: 'DENY' },
  // 선언한 Content-Type 을 브라우저가 임의로 추측하지 않도록
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // 외부로 나갈 때 전체 URL 대신 도메인만 전달
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // 쓰지 않는 브라우저 기능 차단
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  },
  // https 접속 강제 (도메인 연결 후 유효)
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 서버 종류를 알려주는 X-Powered-By 헤더 제거
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // 최적화된 이미지를 오래 캐시 (사진 교체 시 파일명이 바뀌므로 안전)
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        // 해시가 붙은 정적 자산은 영구 캐시
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, must-revalidate' }],
      },
    ];
  },
};

export default nextConfig;
