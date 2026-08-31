/**
 * ══════════════════════════════════════════════════════════════════════
 *  유담프로세일즈아카데미 — 사이트 콘텐츠 데이터
 *
 *  ✏️  이 파일만 수정하면 홈페이지의 모든 문구 / 이미지 / 링크가 바뀝니다.
 *      이미지는 /public/images 폴더에 넣고 "/images/파일명.jpg" 형태로 지정하세요.
 * ══════════════════════════════════════════════════════════════════════
 */

/* ─────────────── 1. 브랜드 기본 정보 ─────────────── */
export const brand = {
  name: '유담프로세일즈아카데미',
  nameEn: 'YUDAM PRO SALES ACADEMY',
  shortEn: 'YUDAM',
  representative: '윤도연',
  slogan: '상담을 바꾸면, 매출이 바뀝니다.',
  description:
    '병원 상담을 ‘감’이 아닌 ‘실력’으로 만드는 병원 상담실장 전문 세일즈 교육 아카데미입니다.',

  // 최종 폴백 주소. 배포 후에는 Vercel 환경변수 NEXT_PUBLIC_SITE_URL 이
  // 우선 적용되고, 그것도 없으면 Vercel 배포 주소가 자동으로 쓰입니다.
  // (src/lib/site-url.ts 참고)
  siteUrl: 'https://yudam-sales.co.kr', // 아직 미연결. 배포 시 Vercel 주소가 자동 사용됩니다.

  // 🔗 상담 신청 링크 — 카카오톡 채널
  contactUrl: 'https://pf.kakao.com/_yxnxliX',

  // 🔗 하단 바로가기 링크
  social: {
    // 네이버 블로그는 https 를 지원하므로 보안 연결로 지정했습니다.
    blog: 'https://blog.naver.com/funfunmind',
    instagram: 'https://www.instagram.com/richella_lab',
    youtube: 'https://www.youtube.com/@리치엘라윤도연',
  },

  // 📄 푸터 사업자 정보 — 실제 정보로 교체하세요
  company: {
    companyName: '유담프로세일즈아카데미',
    ceo: '윤도연',
    address: '경기 성남시 수정구 복정로72번길 4, 201호',
    businessNumber: '622-66-00617',
    email: 'yoondoyeon81@gmail.com',
    phone: '070-8064-4610',
  },
};

/* ─────────────── 2. 헤더 내비게이션 ─────────────── */
export const navItems = [
  { id: 'about', label: 'ABOUT' },
  { id: 'program', label: 'PROGRAM' },
  { id: 'process', label: 'PROCESS' },
  { id: 'review', label: 'REVIEW' },
  { id: 'news', label: 'NEWS' },
  { id: 'contact', label: 'CONTACT' },
] as const;

/* ─────────────── 3. 히어로 섹션 ─────────────── */
export const hero = {
  // 배경 이미지 — 강연 현장 사진
  image: '/images/hero.jpg',
  imageAlt: '유담프로세일즈아카데미 윤도연 대표가 상담실장 대상 강의를 진행하는 모습',
  // 영문 슬로건 3줄. accent: true 인 줄은 포인트 컬러로 표시됩니다.
  lines: [
    { text: 'CHANGE THE WAY', accent: false },
    { text: 'YOU CONSULT.', accent: false },
    { text: 'CHANGE THE RESULT.', accent: true },
  ],
  korean: '상담을 바꾸면, 매출이 바뀝니다.',
  ctaLabel: 'CONTACT\nNOW',
};

/* ─────────────── 4. ABOUT (OUR VALUE) ─────────────── */
export const about = {
  eyebrow: 'OUR VALUE',
  headline: [
    '병원 상담을 ‘감’이 아닌',
    '‘실력’으로 만드는 사람,',
  ],
  headlineAccent: '윤도연입니다.',
  role: '유담프로세일즈아카데미 대표 · 《끌어당기는 세일즈》 저자',
  paragraphs: [
    '저는 단순히 세일즈 이론을 가르치는 강사가 아닙니다. 2010년부터 16년간 직접 고객을 만나고, 판매하고, 조직을 만들고, 사람을 교육하며 현장에서 성과를 만들어온 세일즈 전문가입니다.',
    '메리케이 코리아에서 약 8년간 활동하며 팀빌딩 전국 1위와 연매출 3억 원을 달성했고, 전국 7개 뷰티센터에서 강의를 진행하며 서울 뷰티센터 대표강사로 리더 직급자 멘토 교육을 맡았습니다.',
    '이후 그 성과를 인정받아 성형외과·피부과 총괄실장으로 스카우트되어 직접 고객을 상담하고 매출을 만들며 억대 연봉의 총괄실장으로 근무했습니다. 그 과정에서 병원 상담 세일즈의 본질과 시스템을 깊이 경험했습니다.',
    '병원 상담의 성과는 마지막 클로징 한마디에서 만들어지지 않습니다. 고객의 마음을 읽는 질문, 신뢰를 만드는 상담의 흐름, 가격보다 먼저 전달되는 가치, 망설임을 결정으로 연결하는 클로징. 이 모든 과정이 바뀌어야 결과가 달라집니다.',
    '그래서 저는 상담 멘트를 외우게 하는 교육이 아니라, 실제 현장에서 고객을 만나고 매출을 만들어낼 수 있는 상담 실력을 가르칩니다. 경력만 쌓이는 실장이 아니라, 경력이 곧 자신의 가치가 되는 실장. 그런 상담실장을 만드는 것이 제가 병원상담실장 교육을 하는 이유입니다.',
  ],
  portrait: {
    src: '/images/profile.jpg',
    alt: '유담프로세일즈아카데미 윤도연 대표 프로필 사진',
  },
  // 가로로 배치되는 활동 이미지 3장
  images: [
    { src: '/images/about-01.jpg', alt: '상담실장 대상 소그룹 실전 코칭을 진행하는 윤도연 대표' },
    { src: '/images/about-02.jpg', alt: '‘고객의 마음을 여는 상담의 핵심’ 강의를 진행하는 윤도연 대표' },
    { src: '/images/about-03.jpg', alt: '실제 상담 녹음 파일을 함께 분석하는 상담 사례 분석 수업 현장' },
  ],
  careerTitle: '주요 경력',
  careers: [
    '메리케이 코리아 팀빌딩 전국 1위 · 연매출 3억 원 달성',
    '다수의 해외 프로모션 달성',
    '전국 7개 뷰티센터 강의 · 서울 뷰티센터 대표강사',
    '성형외과·피부과 총괄실장 · 억대 연봉',
    '온라인 위탁판매 사업 연매출 15억 원 달성',
    '다수의 방송·매거진 다이어트 전문가로 소개',
    '전 리듬체조 국가대표 신수지와 다이어트 제품 홍보 진행',
    '《끌어당기는 세일즈》 저자',
    '《말레이시아에서 다시 시작한 엄마의 자립수업》 저자',
    '현) 유담프로세일즈아카데미 대표',
  ],
  // 상단 숫자 지표
  stats: [
    { value: '16', unit: 'YEARS', label: '현장 세일즈 · 교육 경력 (2010~)' },
    { value: '1', unit: 'ST', label: '메리케이 팀빌딩 전국 1위' },
    { value: '7', unit: 'CENTERS', label: '전국 뷰티센터 강의' },
    { value: '15', unit: '억+', label: '온라인 사업 연매출' },
  ],
};

/* ─────────────── 5. VISION ─────────────── */
export const vision = {
  eyebrow: 'OUR VISION',
  image: '/images/vision.jpg',
  imageAlt: '수천 명 규모의 세일즈 컨벤션 현장',
  lines: [
    '말을 잘하는 실장이 아니라,',
    '상담을 성과로 연결하는',
  ],
  accentLine: '프로 상담실장.',
  body:
    '배우고 끝나는 교육이 아니라 배운 것을 현장에 적용하고, 피드백받으며 내 상담으로 만드는 과정. 개인의 감각에 의존하는 상담이 아니라, 반복해서 성과를 만들어내는 나만의 상담 시스템. 유담프로세일즈아카데미는 상담실장의 실력이 곧 자신의 가치가 되는 순간까지 함께합니다.',
};

/* ─────────────── 5-2. WHY (문제 제기 · 교육 방식) ─────────────── */
// 원고의 “실제 상담에서 반복되는 문제”와 “이런 교육이 아닙니다” 대목을 정리한 섹션입니다.
export const why = {
  eyebrow: 'Why Yudam',
  headline: '혹시, 이런 고민을',
  headlineAccent: '반복하고 계신가요?',
  // 상담 현장에서 반복되는 질문
  questions: [
    {
      no: 'Q1',
      text: '설명은 잘했는데\n왜 계약으로 연결되지 않았을까?',
      caption: '상담은 길었는데 결과가 남지 않는 경우',
    },
    {
      no: 'Q2',
      text: '왜 고객은 항상\n가장 낮은 금액만 선택할까?',
      caption: '가격이 가치보다 먼저 전달되는 경우',
    },
    {
      no: 'Q3',
      text: '어떻게 자연스럽게\n더 높은 프로그램을 제안해야 할까?',
      caption: '객단가 확장에서 매번 막히는 경우',
    },
  ],
  compareTitle: 'Our Method',
  // 왼쪽: 하지 않는 것 / 오른쪽: 실제로 하는 것
  notDoing: {
    label: '이런 교육이 아닙니다',
    items: [
      '상담 멘트를 통째로 외우게 하는 교육',
      '이론만 배우고 끝나는 일회성 강의',
      '누구에게나 똑같이 진행되는 일률적 커리큘럼',
      '“이 말을 이렇게 바꿔보세요”로 끝나는 화법 교정',
    ],
  },
  doing: {
    label: '이렇게 합니다',
    items: [
      '현장에서 고객을 만나고 매출을 만드는 상담 실력',
      '배운 것을 다음 상담에 바로 적용하고 피드백',
      '현재 성과와 고객 특성을 진단한 뒤 필요한 부분을 집중 설계',
      '상담 흐름 전체를 분석해 반복돼온 습관까지 교정',
    ],
  },
};

/* ─────────────── 5-3. PROCESS (교육 진행 방식) ─────────────── */
export const process = {
  eyebrow: 'How It Works',
  headline: '이 과정을 반복하며',
  headlineAccent: '나만의 상담 시스템을 완성합니다.',
  body:
    '한 번 배우고 끝나는 교육으로는 오랫동안 반복해온 상담 습관이 바뀌지 않습니다. 배우고, 현장에 적용하고, 실제 상담을 분석받고, 다시 적용하는 과정을 반복합니다.',
  steps: [
    { no: '01', title: '교육', desc: '상담 프로세스와 고객심리를 체계적으로 학습합니다.' },
    { no: '02', title: '현장 적용', desc: '배운 내용을 그 주 실제 고객 상담에 바로 적용합니다.' },
    { no: '03', title: '상담 분석', desc: '실제 상담 녹음파일을 회차별로 세밀하게 분석합니다.' },
    { no: '04', title: '1:1 피드백', desc: '놓친 구매 신호와 개인별 문제점을 찾아 교정합니다.' },
    { no: '05', title: '재적용', desc: '교정한 방식으로 다시 상담하며 내 것으로 만듭니다.' },
  ],
};

/* ─────────────── 5-4. STATEMENT (구간 전환 배너) ─────────────── */
// 페이지 중간에서 시선을 잡아주는 짧은 문구 배너입니다.
export type Statement = {
  eyebrow: string;
  /** 줄 단위 헤드라인. accent: true 인 줄만 포인트 컬러로 표시됩니다. */
  headline: { text: string; accent?: boolean }[];
  /** 원형 키워드 (선택) */
  chips?: string[];
  /** 상승 지표 (선택) */
  metrics?: { label: string; value: string }[];
  /** 마무리 한 줄 */
  footnote: string;
};

export const statements: Record<'goal' | 'skill' | 'result', Statement> = {
  // 히어로 직후
  goal: {
    eyebrow: 'Your Goal',
    headline: [
      { text: '억대 연봉,', accent: true },
      { text: '막연한 목표로 두지 마세요.' },
    ],
    footnote: '무엇을 바꿔야 하는지 알면, 목표는 계획이 됩니다.',
  },
  // WHY 섹션 다음
  skill: {
    eyebrow: 'What Decides It',
    headline: [
      { text: '상담실장의 연봉은' },
      { text: '상담 실력에서 결정됩니다.', accent: true },
    ],
    chips: ['질문 순서', '설명 타이밍', '가격 제시', '클로징 방식'],
    footnote: '작은 차이가 큰 결과를 만듭니다.',
  },
  // 후기 섹션 직전
  result: {
    eyebrow: 'What Changes',
    headline: [
      { text: '상담을 바꾸면' },
      { text: '고객 반응이 달라집니다.', accent: true },
    ],
    metrics: [
      { label: '계약률', value: 'UP' },
      { label: '객단가', value: 'UP' },
      { label: '재등록', value: 'UP' },
    ],
    footnote: '상담의 기술은 곧 매출의 기술입니다.',
  },
};

/* ─────────────── 6. PROGRAM (교육 과정) ─────────────── */
export type Program = {
  no: string;
  code: string;
  title: string;
  tagline: string;
  summary: string;
  image: string;
  imageAlt: string;
  points: string[];
  target: string[];
};

export const programs: Program[] = [
  {
    no: '01',
    code: 'BASIC COURSE',
    title: '베이직 과정',
    tagline: '상담 시스템 구축 + 매출 기본기 + 실제 적용',
    summary:
      '상담의 기본부터 계약률과 객단가까지, 현장에서 바로 적용하는 실전 상담 과정입니다. 고객의 니즈를 파악하는 질문부터 신뢰 형성, 가치 전달, 가격 제시, 거절 대응, 객단가 확장, 클로징까지 실제 병원 매출과 연결되는 상담의 전체 프로세스를 체계적으로 배우고 훈련합니다.',
    image: '/images/program-basic.jpg',
    imageAlt: '베이직 과정 강의를 진행하는 모습',
    points: [
      '상담 전체 프로세스를 체계적으로 학습하고 훈련',
      '매 회차 배운 내용을 실제 상담에 즉시 적용',
      '실제 고객 상담 녹음파일 주 최대 2개 피드백',
      '반복되는 상담 문제를 함께 분석하고 교정',
      '교육기간 중 실무 상담 고민·고객 대응 질문 안내',
    ],
    target: [
      '신입·초보 상담실장',
      '상담을 체계적으로 배워본 적 없는 경력 실장',
      '계약률과 객단가를 높이고 싶은 실장',
      '실제 상담 피드백을 받으며 실력을 키우고 싶은 분',
    ],
  },
  {
    no: '02',
    code: 'ADVANCED COURSE',
    title: '심화 과정',
    tagline: '고객심리 + 고가상담 + 개인별 문제 집중교정 + 밀착관리',
    summary:
      '기본기는 갖췄지만 객단가와 계약률이 일정 수준에서 더 올라가지 않거나, 고가 프로그램 제안과 클로징에 어려움을 느끼는 상담실장을 위한 과정입니다. 정해진 멘트를 배우는 것이 아니라 고객의 구매심리와 행동을 이해하고, 반응에 따라 상담의 방향을 설계하는 방법을 배웁니다.',
    image: '/images/program-advanced.jpg',
    imageAlt: '심화 과정 상담 사례 분석 수업 모습',
    points: [
      '고객 유형별 상담 전략과 니즈를 끌어내는 질문법',
      '가격 저항·거절 대응과 고가 프로그램 제안 훈련',
      '개인별 1:1 코칭 병행 · 상담 녹음파일 주 최대 3개 분석',
      '구매 신호, 질문의 순서, 가격 제시 타이밍까지 흐름 전체 교정',
      '개인별 객단가·계약률·매출 목표 설정 후 적용–피드백 반복',
    ],
    target: [
      '경력 상담실장',
      '객단가와 계약률의 정체를 느끼는 분',
      '고가 프로그램 상담이 어려운 분',
      '고객의 심리를 읽는 상담을 배우고 싶은 분',
      '1:1 밀착 관리를 통해 빠른 성장을 원하는 분',
    ],
  },
  {
    no: '03',
    code: 'PREMIUM 1:1 COACHING',
    title: '프리미엄 일대일 코칭',
    tagline: '고단가 세일즈, 혼자 고민하지 마세요',
    summary:
      '정해진 커리큘럼을 일률적으로 배우는 과정이 아닙니다. 현재의 세일즈 방식과 성과, 고객 특성, 목표를 먼저 진단하고 개인에게 필요한 부분을 집중적으로 설계하는 맞춤형 세일즈 코칭입니다. 피부과·성형외과·비만클리닉 등 고단가 상담 직군을 위한 실전 전략을 1:1로 코칭합니다.',
    image: '/images/program-premium.jpg',
    imageAlt: '프리미엄 1:1 코칭 현장',
    points: [
      '현재 세일즈 방식·성과·고객 특성 진단 후 맞춤 설계',
      '가치를 먼저 전달하는 고단가 상품 제안 방법',
      '가격 저항과 거절에 대응하는 실전 화법',
      '결정을 이끌어내는 클로징 전략 1:1 코칭',
      '필요 시 네트워크 세일즈·리더십·팀빌딩까지 확장',
    ],
    target: [
      '피부과·성형외과·비만클리닉 고단가 상담실장',
      '고가 상품·서비스 판매자',
      '세일즈 직군 및 영업 전문가',
      '네트워크 세일즈 사업자·리더',
      '팀빌딩과 조직 성장을 고민하는 리더',
    ],
  },
  {
    no: '04',
    code: 'HOSPITAL CUSTOM TRAINING',
    title: '병원 맞춤교육 · 단체교육',
    tagline: '한 명의 상담실력이 아닌, 병원 전체의 상담 경쟁력',
    summary:
      '누가 상담하느냐에 따라 고객 경험과 상담 결과가 달라진다면, 개인의 역량을 넘어 병원 전체의 상담 시스템을 점검할 필요가 있습니다. 진료과목과 주요 시술, 고객 특성, 상담 인력의 경력과 현재 고민을 파악해 각 병원에 필요한 내용으로 교육을 맞춤 설계합니다.',
    image: '/images/program-hospital.jpg',
    imageAlt: '병원 단체교육 및 실전 롤플레이 현장',
    points: [
      '병원별 진료과목·시술·고객 특성에 맞춘 커리큘럼 설계',
      '상담 질문법 · 신뢰 형성 · 가치 전달 · 객단가 향상 교육',
      '상담실장뿐 아니라 코디네이터·CS·상담팀 단체교육 가능',
      '실전 롤플레이 · 상담 사례 분석 · 프로세스 점검 구성',
      '우리 병원만의 일관된 상담 기준 수립',
    ],
    target: [
      '피부과 / 성형외과 / 비만클리닉 / 치과 / 기타 병·의원',
      '상담실장 · 코디네이터 · CS 및 상담팀',
      '병원 맞춤형 특강 / 상담팀 단체교육',
      '실전 롤플레이 교육 / 상담 프로세스 점검',
    ],
  },
];

/* ─────────────── 6-2. 과정 한눈에 비교 ─────────────── */
export const programCompare = {
  columns: ['과정', '핵심', '상담 녹음 피드백', '1:1 코칭', '주요 대상'],
  rows: [
    ['01 BASIC', '상담 시스템 구축 · 매출 기본기', '주 최대 2개', '—', '신입 · 초보 상담실장'],
    ['02 ADVANCED', '고객심리 · 고가상담 · 문제 교정', '주 최대 3개', '개인별 1:1 병행', '경력 상담실장'],
    ['03 PREMIUM', '진단 기반 맞춤 세일즈 설계', '개인 상황에 맞춰 진행', '전 과정 1:1', '고단가 상담 · 세일즈 리더'],
    ['04 HOSPITAL', '병원 전체의 상담 기준 수립', '요청 시 사례 분석', '단체 교육 중심', '병원 · 상담팀 단위'],
  ],
};

/* ─────────────── 7. 교육 대상 분야 (무한 슬라이더) ─────────────── */
// 협업 병원 로고가 준비되면 이 배열 대신 로고 이미지 배열로 교체하면 됩니다.
export const clientFields = [
  '피부과',
  '성형외과',
  '비만클리닉',
  '치과',
  '한의원',
  '여성의원',
  '안과',
  '모발이식',
  '재활의학과',
  '메디컬 에스테틱',
  '상담실장',
  '코디네이터',
  'CS팀',
  '세일즈 리더',
];

/* ─────────────── 8. 활동 & 강의 현장 갤러리 ─────────────── */
export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

export const gallery: GalleryItem[] = [
  { src: '/images/gallery-01.jpg', category: 'LECTURE', title: '뷰티센터 정규 강의', alt: '대형 강의장에서 수십 명의 수강생을 대상으로 강의를 진행하는 모습' },
  { src: '/images/gallery-02.jpg', category: 'LECTURE', title: '리더 대상 세일즈 교육', alt: '리더 직급자를 대상으로 세일즈 교육을 진행하는 강의 현장' },
  { src: '/images/gallery-03.jpg', category: 'WORKSHOP', title: '소그룹 실전 클래스', alt: '소그룹으로 둘러앉아 실습 중심의 클래스를 진행하는 모습' },
  { src: '/images/gallery-04.jpg', category: 'SEMINAR', title: '게스트 이벤트 강연', alt: '게스트 이벤트 무대에서 마이크를 들고 강연하는 모습' },
  { src: '/images/gallery-05.jpg', category: 'AWARD', title: '커리어 카 프로모션', alt: '커리어 카 프로모션 시상 무대에서 소감을 전하는 모습' },
  { src: '/images/gallery-06.jpg', category: 'AWARD', title: '커리어 카 수여', alt: '세일즈 성과로 받은 커리어 카와 함께 촬영한 기념 사진' },
  { src: '/images/gallery-07.jpg', category: 'CONFERENCE', title: '연간 세일즈 컨퍼런스', alt: '연간 세일즈 컨퍼런스 행사장에 참석한 모습' },
  { src: '/images/gallery-08.jpg', category: 'TRAINING', title: '메이크업 마스터 코스', alt: '뷰티센터에서 메이크업 마스터 코스 실습 교육을 진행하는 모습' },
];

/* ─────────────── 9. 수강생 후기 (가로 슬라이드) ─────────────── */
// ✏️ 실제 후기를 아래 형식에 맞춰 추가/교체하세요.
export type Review = {
  name: string;      // 예: '김○○ 실장'
  role: string;      // 경력 · 재직 병원
  field: string;     // 진료과목 (카드 상단 영문 라벨)
  headline: string;  // 후기 핵심 한 줄
  body: string;      // 후기 본문
  result?: string;   // 성과 배지 (선택)
};

// 실제 수강생이 보내주신 후기를 카드 분량에 맞춰 정리했습니다.
// 표현과 수치는 원문 그대로이며, 개인정보 보호를 위해 성함과 병원명은 비공개 처리했습니다.
export const reviews: Review[] = [
  {
    name: '김○○ 실장',
    role: '경력 1년 3개월 · 수원 비만클리닉 재직',
    field: 'OBESITY CLINIC',
    headline: '감으로 하던 상담에, 제 기준이 생겼어요.',
    body: '상담실장으로 일하면서 늘 잘하고 있는 건지 확신이 없었어요. 특히 클로징이 늘 어렵다고 생각했고요. 코칭을 받으면서 제가 잘하고 있는 부분과 고쳐야 할 부분을 정확히 알게 되니까 상담할 때 훨씬 덜 흔들리게 됐어요. 고객 유형에 따라 어떤 질문을 해야 하는지, 거절이 나왔을 때 어떻게 받아줘야 하는지 하나씩 연습하다 보니 예전보다 여유가 생겼습니다. 매출도 중요하지만, 상담할 때 스스로 확신이 생긴 게 가장 큰 변화예요.',
    result: '상담 자신감',
  },
  {
    name: '최○○ 실장',
    role: '경력 3년 4개월 · 석촌 ○○피부과 재직',
    field: 'DERMATOLOGY',
    headline: '정해진 스크립트를 외우게 하는 교육이 아니었어요.',
    body: '다른 곳에서도 상담 교육을 받아본 적이 있는데 이번은 달랐어요. 일하다 막히는 상황이 생기면 바로 여쭤볼 수 있고, 그 상황에 맞게 어떻게 풀어가야 하는지 알려주세요. 똑같은 스크립트를 외우는 방식이 아니라 제 말투와 상담 스타일에 맞는 스크립트를 함께 만들고, 롤플레이로 실제 고객에게 말하듯 연습하며 어색한 부분을 그 자리에서 고쳤습니다. 실제 상담 녹음파일도 같이 들으면서 제가 어떤 상담 습관이 있는지 처음 알게 됐어요.',
    result: '1:1 밀착 코칭',
  },
  {
    name: '이○○ 실장',
    role: '경력 1년 8개월 · 의정부 ○○피부과 재직',
    field: 'DERMATOLOGY',
    headline: '객단가는 더 파는 게 아니라, 제대로 찾아주는 것이었어요.',
    body: '객단가를 올려야 한다는 건 알았지만 상담에서 자연스럽게 푸는 방법이 제일 어려웠어요. 리프팅 때문에 왔다고 하면 리프팅만, 피부 때문에 왔다고 하면 피부만 설명하는 식이었거든요. 배운 대로 질문을 조금씩 바꿔보니 고객이 처음에는 말하지 않았던 고민들이 나오더라고요. “저 같은 경우에는 이것도 같이 하는 게 좋아요?” 하고 고객이 먼저 물어보는 상황도 생겼어요. 원하는 결과를 기준으로 전체 플랜을 잡다 보니 객단가도 전보다 확실히 좋아졌습니다.',
    result: '객단가 상승',
  },
  {
    name: '이○○ 실장',
    role: '경력 3년 · 비만클리닉 재직',
    field: 'OBESITY CLINIC',
    headline: '교육이 끝나기도 전에 일매출이 1,800만 원까지 올랐어요.',
    body: '월평균 매출이 1억 후반대는 나오고 있었는데 2억을 넘기는 게 쉽지 않았어요. 오래 해왔으니 잘하고 있다고 생각했는데, 습관적으로 쓰던 말과 놓치던 부분이 생각보다 많았습니다. 정해진 스크립트가 아니라 제가 실제로 하는 상담을 기준으로 말습관을 하나하나 교정해주셔서 바로 적용할 수 있었어요. 일매출이 1,000만 원에서 1,200만, 1,360만, 그리고 1,800만 원까지 올라갔고 회원권도 3건 계약했습니다. 그것도 교육이 다 끝난 뒤가 아니라 받는 중간부터 나오기 시작했어요.',
    result: '일매출 1,800만 원',
  },
];

/* ─────────────── 9-2. MEDIA (방송 · 매거진 · 협업) ─────────────── */
export type MediaItem = {
  src: string;
  alt: string;
  title: string;
  category: string;
  year?: string;
  /** 4:3 으로 잘릴 때 보여줄 초점 위치 (세로 사진에서 인물이 잘리지 않게) */
  position?: string;
};

export const media = {
  eyebrow: 'Media & Collaboration',
  headline: '방송과 미디어에서',
  headlineAccent: '다이어트 · 세일즈 전문가로.',
  body:
    '다수의 방송과 매거진에 다이어트 전문가로 소개되었고, 온라인 위탁판매를 진행하며 전 리듬체조 국가대표 신수지 선수와 함께 다이어트 제품 홍보를 진행했습니다.',
  items: [
    {
      src: '/images/media-01.jpg',
      category: 'BROADCAST',
      title: '노블레스TV 출연',
      alt: '노블레스TV 스튜디오에서 진행자와 인터뷰하는 윤도연 대표',
    },
    {
      src: '/images/media-02.jpg',
      category: 'BROADCAST',
      title: '방송 촬영 현장',
      alt: '카메라 앞에서 다이어트 제품 관련 방송 촬영을 진행하는 모습',
      position: 'center 55%',
    },
    {
      src: '/images/media-03.jpg',
      category: 'COLLABORATION',
      title: '신수지 선수와 제품 홍보',
      alt: '전 리듬체조 국가대표 신수지 선수와 함께 다이어트 제품을 들고 촬영한 사진',
      year: '2018–2019',
      position: 'center 20%',
    },
    {
      src: '/images/media-04.jpg',
      category: 'COLLABORATION',
      title: '제품 홍보 촬영',
      alt: '다이어트 제품 홍보 콘텐츠를 촬영하는 현장',
      year: '2018–2019',
    },
    {
      src: '/images/media-05.jpg',
      category: 'MAGAZINE',
      title: '매거진 인터뷰',
      alt: '매거진에 실린 뷰티 · 세일즈 전문가 인터뷰 지면',
      position: 'center top',
    },
    {
      src: '/images/media-06.jpg',
      category: 'BROADCAST',
      title: '촬영 세팅 현장',
      alt: '방송 촬영을 위해 카메라와 조명을 세팅한 현장',
    },
  ] as MediaItem[],
};

/* ─────────────── 10. NEWS ─────────────── */
export type NewsItem = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  href: string; // 상세 페이지 / 외부 링크 주소
};

export const news: NewsItem[] = [
  {
    title: '《끌어당기는 세일즈》 출간',
    excerpt:
      'SNS로 억대 매출을 만든 워킹맘의 실전 전략. 고객의 구매심리를 이해하고 가치를 전달하는 세일즈의 본질을 담았습니다.',
    date: '2025.05',
    category: 'BOOK',
    image: '/images/news-book-sales.jpg',
    imageAlt: '윤도연 저 《끌어당기는 세일즈》 도서 표지',
    href: '#contact',
  },
  {
    title: '《말레이시아에서 다시 시작한 엄마의 자립수업》 출간',
    excerpt:
      '숨 막히는 일상 안에서 작은 결심 하나로 완전히 다른 삶의 문을 연 이야기. 자립과 성장에 대한 기록입니다.',
    date: '2025.10',
    category: 'BOOK',
    image: '/images/news-book-mom.jpg',
    imageAlt: '윤도연 저 《말레이시아에서 다시 시작한 엄마의 자립수업》 도서 표지',
    href: '#contact',
  },
  {
    title: '방송·매거진 다이어트 전문가 소개',
    excerpt:
      '다수의 방송과 매거진에서 다이어트·뷰티 전문가로 소개되며 현장 세일즈와 교육 노하우를 전했습니다.',
    date: 'ARCHIVE',
    category: 'MEDIA',
    image: '/images/news-media.jpg',
    imageAlt: '매거진에 소개된 인터뷰 지면',
    href: '#contact',
  },
  {
    title: '전 리듬체조 국가대표 신수지 제품 홍보 협업',
    excerpt:
      '2018–2019년 전 리듬체조 국가대표 신수지 선수와 함께 다이어트 제품 홍보 프로젝트를 진행했습니다.',
    date: '2018–2019',
    category: 'COLLAB',
    image: '/images/news-collab.jpg',
    imageAlt: '전 리듬체조 국가대표 신수지 선수와 함께 촬영한 제품 홍보 사진',
    href: '#contact',
  },
];

/* ─────────────── 11. CONTACT ─────────────── */
export const contact = {
  eyebrow: 'CONTACT',
  image: '/images/cta.jpg',
  imageAlt: '세일즈 시상식이 열리는 무대 전경',
  headline: ['어떤 부분이', '가장 고민되시나요?'],
  body: '현재의 고민과 목표를 남겨주시면 내용을 확인한 후\n가장 적합한 교육과정을 안내해드립니다.',
  buttonLabel: '교육 문의하기',
};
