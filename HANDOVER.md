# 인수인계 안내서

유담프로세일즈아카데미 홈페이지 소스 코드 인수인계 문서입니다.
코드 구조와 수정 방법은 `README.md` 에 정리되어 있으니 함께 읽어주세요.
이 문서는 **인수받은 뒤 처음 해야 할 일**만 다룹니다.

---

## 1. 이 저장소에 들어 있는 것

| 항목 | 내용 |
| --- | --- |
| 소스 코드 | Next.js 15 · TypeScript · Tailwind CSS · Framer Motion |
| 이미지 | `public/images` (강의·활동 사진, 도서 표지 등 27장) |
| 문서 | `README.md` (수정·배포 방법), 이 문서 |
| 자동 검사 | `.github/workflows/ci.yml` (푸시 시 타입검사·린트·빌드·취약점검사) |

소스 전체 용량은 약 7MB이며, 파일 수는 71개입니다.
`node_modules` 와 `.next` 는 포함되지 않습니다 (설치·빌드 시 자동 생성).

---

## 2. 이 저장소에 **들어 있지 않은** 것

아래는 코드가 아니라 **배포 환경에 설정하는 값**이라 저장소에 없습니다.
인수 후 직접 설정해야 합니다.

### 환경변수 (모두 선택 사항)

| Key | 용도 | 미설정 시 동작 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 도메인 연결 후 사이트 주소 | 배포 주소가 자동 사용됨 |
| `NEXT_PUBLIC_NAVER_VERIFICATION` | 네이버 서치어드바이저 인증 | 인증 태그 미출력 |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | 구글 서치콘솔 인증 | 인증 태그 미출력 |

키 목록은 `.env.example` 에도 있습니다. **비밀키·API 키는 하나도 사용하지 않습니다.**

### 외부 계정

홈페이지가 링크로만 연결하므로 코드 수정 없이 주소만 바꾸면 됩니다.
(`src/data/site.ts` 의 `brand.social`, `brand.contactUrl`)

| 채널 | 현재 연결된 주소 |
| --- | --- |
| 카카오톡 채널 | `pf.kakao.com/_yxnxliX` |
| 블로그 | `blog.naver.com/funfunmind` |
| 인스타그램 | `instagram.com/richella_lab` |
| 유튜브 | `youtube.com/@리치엘라윤도연` |

---

## 3. 인수 후 첫 실행

Node.js 20 이상이 필요합니다.

```bash
npm ci        # 의존성 설치 (package-lock.json 기준 정확한 버전)
npm run dev   # 개발 서버 → http://localhost:3000
```

배포 전 확인용 명령

```bash
npm run typecheck   # 타입 검사
npm run lint        # 코드 검사
npm run build       # 프로덕션 빌드
npm audit           # 알려진 취약점 검사
```

네 가지 모두 통과하는 상태로 인계됩니다.

---

## 4. 배포 (Vercel)

1. https://vercel.com 에서 GitHub 계정으로 로그인
2. **Add New… → Project** → 이 저장소 선택 → **Import**
3. 설정은 **전부 기본값 그대로** 두고 **Deploy**
   (Framework Preset 이 `Next.js` 로 잡혔는지만 확인)
4. 2~3분 후 `○○○.vercel.app` 주소 발급

빌드 명령·출력 경로·Node 버전을 따로 입력할 필요가 없습니다.
이후 기본 브랜치에 푸시할 때마다 자동으로 다시 배포됩니다.

### 도메인 연결

1. Vercel 프로젝트 → **Settings → Domains** → 도메인 입력
2. 안내에 따라 도메인 등록업체(가비아 등)에서 DNS 레코드 추가
3. **Settings → Environment Variables** 에 `NEXT_PUBLIC_SITE_URL` 추가 후 재배포

> 이 값을 설정하지 않으면 카카오톡·인스타그램 공유 썸네일이 Vercel 임시 주소를
> 가리킵니다. 도메인 연결 후에는 꼭 함께 설정해 주세요.

---

## 5. 콘텐츠 수정

문구·이미지·링크는 **`src/data/site.ts` 한 파일**에서 모두 수정합니다.
항목별 위치는 `README.md` 2번 표를 참고하세요.

자주 바뀌는 것

- 수강생 후기 추가 → `reviews` 배열 (README 3번)
- 사진 교체 → `public/images` 에 넣고 경로 수정 (README 4번)
- 포인트 컬러 변경 → `tailwind.config.ts` + `src/app/globals.css` (README 5번)

---

## 6. 알아두실 점

- **사진 일부가 중복 사용 중입니다.** 최근 촬영한 강의 사진 6장을 8개 자리에
  배치하면서 `about-02 ↔ program-hospital`, `about-03 ↔ program-advanced`
  두 쌍이 같은 사진입니다. 새 촬영본이 준비되면 이 4개 파일만 교체하면 됩니다.
- **웹폰트를 외부(jsDelivr)에서 불러옵니다.** 폰트를 직접 호스팅하려면
  `src/app/layout.tsx` 의 `<link rel="stylesheet">` 를 교체하세요.
- **문의 폼을 추가하실 경우** `next.config.mjs` 의 CSP 설정에
  `script-src 'unsafe-inline'` 이 남아 있습니다. 사용자 입력을 받는 폼을
  만들게 되면 미들웨어 nonce 방식으로 전환하는 것을 권장합니다.
  (자세한 배경은 README 9번 참고)
- **개인정보처리방침**(`src/app/privacy/page.tsx`)은 일반적인 내용으로
  작성되어 있습니다. 실제 운영 상황에 맞게 검토가 필요합니다.
