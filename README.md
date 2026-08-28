# 유담프로세일즈아카데미 · 브랜드 홈페이지

병원 상담실장 전문 세일즈 교육 브랜드 **유담프로세일즈아카데미(대표 윤도연)** 의
원페이지 반응형 홈페이지입니다.

- **Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion**
- 블랙 배경 · 강한 타이포그래피 · 넓은 여백의 에디토리얼 레이아웃
- 모든 문구·이미지·링크는 데이터 파일 한 곳에서 수정

---

## 1. 실행 방법

```bash
npm install      # 최초 1회
npm run dev      # 개발 서버 → http://localhost:3000
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
npm run typecheck
npm run lint
```

Node.js 20 이상을 권장합니다.

---

## 2. 콘텐츠 수정 — `src/data/site.ts` 한 파일만 보시면 됩니다

| 항목 | 위치 | 설명 |
| --- | --- | --- |
| 브랜드/사업자 정보 | `brand` | 상호, 대표자, 주소, 사업자등록번호, 연락처 |
| **카카오톡 상담 링크** | `brand.contactUrl` | 모든 상담 버튼이 이 주소로 연결됩니다 |
| **블로그·인스타·유튜브 링크** | `brand.social` | 푸터 “바로가기” 3개 버튼 |
| 사이트 주소 (SEO) | `brand.siteUrl` | 도메인 확정 후 반드시 수정 |
| 헤더 메뉴 | `navItems` | |
| 히어로 문구 | `hero` | 영문 슬로건 3줄 (`accent: true` 인 줄이 포인트 컬러) |
| 대표 소개 · 경력 · 지표 | `about` | |
| 비전 문구 | `vision` | |
| 교육 과정 4개 | `programs` | 과정 추가/삭제 시 배열에 항목만 넣으면 화면이 자동 확장 |
| 교육 대상 분야 (슬라이더) | `clientFields` | |
| 활동 갤러리 | `gallery` | |
| **수강생 후기** | `reviews` | 아래 3번 참고 |
| 뉴스 카드 | `news` | |
| 문의 섹션 문구 | `contact` | |

---

## 3. 수강생 후기 추가하기

후기는 카카오톡 캡처 이미지 대신 **텍스트 카드 가로 슬라이드**로 구성했습니다.
`src/data/site.ts` 의 `reviews` 배열에 아래 형식으로 추가하면 됩니다.

```ts
{
  name: '김○○ 실장',                 // 성함 (일부 비공개 표기 권장)
  role: '피부과 상담실장 · 경력 2년',  // 소속 / 경력
  course: 'BASIC COURSE',            // 수강 과정
  headline: '후기 핵심 한 줄',         // 카드에 크게 노출
  body: '후기 본문 내용...',
  result: '계약률 상승',              // (선택) 성과 배지. 없으면 생략 가능
},
```

> 현재 들어 있는 6개는 **예시 후기**입니다. 실제 후기가 전달되면 그대로 교체해 주세요.
> 카드 개수는 제한이 없으며, 개수에 맞춰 좌우 슬라이드가 자동으로 늘어납니다.

---

## 4. 이미지 교체

1. 새 이미지를 `public/images/` 에 넣습니다.
2. `src/data/site.ts` 에서 해당 항목의 `src` 를 `'/images/파일명.jpg'` 로 바꿉니다.
3. `alt` (대체 텍스트)도 함께 수정해 주세요. 접근성과 검색 노출에 사용됩니다.

권장 사양

| 용도 | 비율 | 가로 크기 |
| --- | --- | --- |
| 히어로 / CTA 배경 | 4:3 이상 가로형 | 1600–1920px |
| 대표 프로필 | 3:4 세로형 | 1000–1200px |
| 과정 · 갤러리 | 4:3 | 1200–1400px |
| 뉴스 카드 | 4:3 | 1000–1200px |

모든 이미지는 `next/image` 로 자동 최적화(WebP/AVIF 변환·지연 로딩)되며,
영역 크기가 미리 지정되어 있어 레이아웃 밀림(CLS)이 발생하지 않습니다.

---

## 5. 포인트 컬러 변경

두 곳을 같은 값으로 수정하면 사이트 전체에 반영됩니다.

- `tailwind.config.ts` → `colors.accent.DEFAULT`
- `src/app/globals.css` → `:root { --accent: ... }`

---

## 6. 협업 병원 로고를 넣고 싶을 때

현재 `OUR CLIENTS` 영역은 **교육 대상 진료과목 텍스트 슬라이더**입니다.
로고 이미지가 준비되면 `src/components/Clients.tsx` 의 `<li>` 안 텍스트를
`<Image>` 로 바꾸고 `grayscale hover:grayscale-0` 클래스를 적용하면
흑백 → 컬러 전환 효과가 그대로 동작합니다.

---

## 7. 폴더 구조

```
src/
├─ app/
│  ├─ layout.tsx        SEO 메타태그 · Open Graph · 구조화 데이터
│  ├─ page.tsx          원페이지 섹션 조립
│  ├─ globals.css       디자인 토큰 · 공통 클래스
│  ├─ privacy/page.tsx  개인정보처리방침
│  ├─ robots.ts / sitemap.ts
├─ components/
│  ├─ Header.tsx        고정 헤더 · 스크롤 배경 전환 · 모바일 햄버거
│  ├─ Hero.tsx          풀스크린 히어로 · 느린 줌 · 원형 CONTACT 버튼
│  ├─ About.tsx         OUR VALUE — 대표 소개 · 지표 · 경력
│  ├─ Vision.tsx        OUR VISION
│  ├─ Clients.tsx       무한 로고/분야 슬라이더
│  ├─ Programs.tsx      교육 과정 인덱스 카드 + 과정별 상세
│  ├─ Gallery.tsx       활동 · 강의 현장 2열 갤러리
│  ├─ Reviews.tsx       수강생 후기 가로 슬라이드
│  ├─ News.tsx          출간 · 미디어 소식
│  ├─ Contact.tsx       상담 CTA
│  ├─ Footer.tsx        사업자 정보 · SNS 바로가기
│  ├─ FloatingCta.tsx   고정 카카오톡 상담 버튼
│  ├─ Reveal.tsx        스크롤 등장 애니메이션 공통 래퍼
│  └─ SectionHeading.tsx
└─ data/site.ts         ⭐ 모든 콘텐츠
```

---

## 8. 접근성 · 성능

- 시맨틱 HTML(`header` / `main` / `section` / `article` / `figure`)과 모든 이미지 `alt` 적용
- 키보드만으로 메뉴·버튼·후기 슬라이드 조작 가능, “본문 바로가기” 링크 제공
- `prefers-reduced-motion` 설정 시 애니메이션 자동 해제
- 360px~1440px 전 구간에서 가로 스크롤이 발생하지 않도록 검증
- 히어로 이미지만 우선 로딩, 나머지는 지연 로딩

---

## 9. 배포 전 체크리스트

- [ ] `brand.contactUrl` 을 실제 카카오톡 채널 주소로 교체
- [ ] `brand.social` 의 블로그 / 인스타그램 / 유튜브 주소 입력
- [ ] `brand.siteUrl` 을 실제 도메인으로 교체 (SEO·OG 이미지 경로에 사용)
- [ ] `brand.company` 의 주소 · 사업자등록번호 · 연락처 · 이메일 입력
- [ ] `reviews` 를 실제 수강생 후기로 교체
- [ ] `src/app/privacy/page.tsx` 개인정보처리방침 내용 검토
- [ ] `public/` 에 `favicon.ico` 추가
