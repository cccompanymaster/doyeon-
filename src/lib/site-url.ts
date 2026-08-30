import { brand } from '@/data/site';

/**
 * 사이트의 실제 접속 주소를 결정합니다.
 *
 * SEO 메타태그와 Open Graph 이미지(카카오톡·인스타 공유 시 뜨는 썸네일)는
 * 절대 주소가 필요합니다. 아직 없는 도메인이 박혀 있으면 썸네일이 깨지므로
 * 아래 순서로 사용 가능한 주소를 찾습니다.
 *
 *   1) NEXT_PUBLIC_SITE_URL      — 실제 도메인 연결 후 Vercel 환경변수로 지정
 *   2) Vercel 이 부여한 배포 주소 — 도메인 연결 전 자동으로 사용됨
 *   3) src/data/site.ts 의 siteUrl — 로컬 개발 및 최종 폴백
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return stripTrailingSlash(explicit);

  // Vercel 프로덕션 배포 주소 (예: yudam.vercel.app)
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${stripTrailingSlash(production)}`;

  // 프리뷰 배포 주소 (브랜치별 임시 주소)
  const preview = process.env.VERCEL_URL?.trim();
  if (preview) return `https://${stripTrailingSlash(preview)}`;

  return stripTrailingSlash(brand.siteUrl);
}

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, '');
}
