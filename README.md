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
| 문제 제기 · 교육 방식 | `why` | 반복되는 상담 고민 3가지 / “이런 교육이 아닙니다 ↔ 이렇게 합니다” |
| 교육 진행 5단계 | `process` | 교육 → 현장 적용 → 상담 분석 → 1:1 피드백 → 재적용 |
| 중간 문구 배너 | `statements` | 히어로 뒤 / WHY 뒤 / 후기 앞, 3곳에 들어가는 짧은 카피 |
| 교육 과정 4개 | `programs` | 과정 추가/삭제 시 배열에 항목만 넣으면 화면이 자동 확장 |
| 과정 비교표 | `programCompare` | 열 이름과 행을 배열로 수정 |
| 교육 대상 분야 (슬라이더) | `clientFields` | |
| 활동 갤러리 | `gallery` | |
| 방송 · 협업 | `media` | 세로 사진은 `position` 으로 잘리는 초점 위치 조정 |
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

> **사진 사용 현황** — 히어로 / ABOUT / PROGRAM 은 최근 촬영한 강의 사진 6장을 사용합니다.
> 6장으로 8개 자리를 채우다 보니 `about-02 ↔ program-hospital`,
> `about-03 ↔ program-advanced` 두 쌍이 같은 사진입니다.
> 새 촬영본이 준비되면 이 4개 파일만 교체하면 중복이 사라집니다.
> ACTIVITY 갤러리 8장은 모두 서로 다른 실제 활동 사진입니다.

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
│  ├─ Why.tsx          반복되는 상담 고민 + 교육 방식 대조
│  ├─ Clients.tsx       무한 로고/분야 슬라이더
│  ├─ Programs.tsx     과정 카드(탭) + 선택 시 상세 열림 + 비교표
│  ├─ StatementBand.tsx 구간 전환 문구 배너
│  ├─ Process.tsx      교육 진행 5단계 사이클
│  ├─ Gallery.tsx       활동 · 강의 현장 2열 갤러리
│  ├─ Media.tsx         방송 · 매거진 · 협업 이미지
│  ├─ Reviews.tsx       수강생 후기 가로 슬라이드
│  ├─ News.tsx          출간 · 미디어 소식
│  ├─ Contact.tsx       상담 CTA
│  ├─ Footer.tsx        사업자 정보 · SNS 바로가기
│  ├─ FloatingCta.tsx   고정 카카오톡 상담 버튼
│  ├─ Reveal.tsx        스크롤 등장 애니메이션 공통 래퍼
│  └─ SectionHeading.tsx
├─ lib/site-url.ts      배포 주소 결정 (SEO · OG 썸네일)
└─ data/site.ts         ⭐ 모든 콘텐츠
```

---

## 8. 배포 (Vercel)

Next.js 를 만든 회사의 서비스라 별도 설정 없이 그대로 올라갑니다.

### 최초 배포

1. https://vercel.com 접속 → **Continue with GitHub** 으로 로그인
2. **Add New… → Project** → `cccompanymaster/doyeon-` 선택 → **Import**
3. 설정 화면은 **전부 기본값 그대로** 두고 **Deploy**
   (Framework Preset 이 `Next.js` 로 잡혀 있는지만 확인)
4. 2~3분 뒤 `○○○.vercel.app` 주소가 발급됩니다

빌드 명령·출력 경로·Node 버전을 따로 입력할 필요가 없습니다.
이후 이 브랜치에 푸시할 때마다 자동으로 다시 배포됩니다.

### 실제 도메인 연결

1. Vercel 프로젝트 → **Settings → Domains** → 도메인 입력
2. 안내에 따라 도메인 등록업체(가비아 등)에서 DNS 레코드 추가
3. **Settings → Environment Variables** 에서 아래 값을 추가하고 재배포

   | Key | Value | 용도 |
   | --- | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | `https://실제도메인.co.kr` | SEO · 공유 썸네일 주소 |
   | `NEXT_PUBLIC_NAVER_VERIFICATION` | 네이버에서 발급받은 코드 | 네이버 서치어드바이저 |
   | `NEXT_PUBLIC_GOOGLE_VERIFICATION` | 구글에서 발급받은 코드 | 구글 서치콘솔 |

   설정할 키 목록은 `.env.example` 에 정리해 두었습니다.

### 사이트 주소가 정해지는 순서

`src/lib/site-url.ts` 가 아래 순서로 주소를 찾습니다.
카카오톡·인스타그램에 링크를 공유할 때 뜨는 썸네일이 이 주소를 사용하므로,
도메인 연결 전에도 썸네일이 깨지지 않습니다.

1. `NEXT_PUBLIC_SITE_URL` 환경변수 — 도메인 연결 후
2. Vercel 이 부여한 배포 주소 — 도메인 연결 전 자동
3. `src/data/site.ts` 의 `brand.siteUrl` — 로컬 개발용 폴백

---

## 9. 보안 · 성능

### 적용된 보안 설정

`next.config.mjs` 에서 모든 응답에 아래 헤더를 붙입니다.

| 헤더 | 역할 |
| --- | --- |
| `Content-Security-Policy` | 외부 스크립트 주입, 외부로의 폼 전송, 객체 삽입 차단 |
| `X-Frame-Options: DENY` | 다른 사이트가 iframe 으로 감싸는 클릭재킹 차단 |
| `X-Content-Type-Options` | 브라우저의 MIME 타입 임의 추측 차단 |
| `Referrer-Policy` | 외부 이동 시 전체 주소 대신 도메인만 전달 |
| `Permissions-Policy` | 카메라·마이크·위치 등 미사용 기능 차단 |
| `Strict-Transport-Security` | https 접속 강제 (도메인 연결 후 적용) |

그 외
- 서버 정보를 노출하는 `X-Powered-By` 헤더 제거
- 외부 링크 전체에 `rel="noopener noreferrer"` 적용
- `npm audit` 취약점 0건 (`postcss` 는 패치 버전으로 강제 고정)
- 저장소에 키·비밀번호 없음, `.env` 계열은 커밋 대상에서 제외

> **문의 폼을 추가하실 때** — 현재 CSP 의 `script-src` 에는 `'unsafe-inline'` 이
> 들어 있습니다. 입력을 받는 곳이 없어 지금은 문제가 없지만, 사용자 입력을
> 받는 폼을 만들게 되면 미들웨어 nonce 방식으로 바꾸는 것을 권장합니다.

### 성능 측정값 (모바일 390px 기준)

| 항목 | 값 | 기준 |
| --- | --- | --- |
| LCP (가장 큰 요소 표시) | 약 2.0초 | 2.5초 이하 양호 |
| CLS (화면 밀림) | 0 | 0.1 이하 양호 |
| FCP (첫 화면 표시) | 약 0.5초 | |

- 이미지는 AVIF 로 자동 변환되어 첫 화면 기준 약 30KB 만 전송됩니다
- 모든 이미지에 영역 크기가 지정되어 있어 레이아웃 밀림이 없습니다
- 웹폰트는 `@import` 대신 `<link>` 로 병렬 로드합니다

### 접근성

- 본문 텍스트 전체가 WCAG AA 대비 기준(4.5:1)을 통과합니다
- 시맨틱 HTML(`header` / `main` / `section` / `article` / `figure`)과 모든 이미지 `alt` 적용
- 키보드만으로 메뉴·버튼·과정 탭·후기 슬라이드 조작 가능, “본문 바로가기” 링크 제공
- 교육 과정은 표준 탭 패턴(방향키·Home·End 이동)으로 구현했습니다
- 모션 최소화(`prefers-reduced-motion`) 설정 시 애니메이션이 자동으로 꺼집니다
- 360px~1440px 전 구간에서 가로 스크롤이 발생하지 않습니다

---

## 10. 자동 검사 (GitHub Actions)

`.github/workflows/ci.yml` 이 푸시할 때마다 아래를 자동 실행합니다.

- 타입 검사 → 린트 → 빌드 → 취약점 검사

하나라도 실패하면 GitHub 에 빨간 표시가 뜨므로, 깨진 코드가 배포로
넘어가기 전에 알 수 있습니다.

---

## 11. 배포 전 체크리스트

- [x] `brand.contactUrl` 카카오톡 채널 (`pf.kakao.com/_yxnxliX`)
- [ ] `brand.social` 의 블로그 / 인스타그램 / 유튜브 주소 입력
- [ ] 도메인 연결 후 Vercel 환경변수 `NEXT_PUBLIC_SITE_URL` 설정 (8번 참고)
- [x] 교육 문의 전화 (070-8064-4610)
- [ ] `brand.company` 의 주소 · 사업자등록번호 · 이메일 입력
- [ ] `reviews` 를 실제 수강생 후기로 교체
- [ ] `src/app/privacy/page.tsx` 개인정보처리방침 내용 검토
- [ ] 탭 아이콘 확인 (`src/app/icon.svg` — 필요 시 교체)
- [ ] 네이버 서치어드바이저 · 구글 서치콘솔 등록 후 인증코드 입력
- [ ] 카카오톡에 링크를 한 번 보내 썸네일이 뜨는지 확인
