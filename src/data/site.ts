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

  // 실제 도메인이 정해지면 여기를 바꿔주세요 (SEO / Open Graph 에 사용)
  siteUrl: 'https://yudam-sales.co.kr',

  // 🔗 상담 신청 링크 — 카카오톡 채널 주소로 교체하세요
  contactUrl: 'https://pf.kakao.com/',

  // 🔗 하단 바로가기 링크 — 개설 후 주소를 넣어주세요
  social: {
    blog: 'https://blog.naver.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
  },

  // 📄 푸터 사업자 정보 — 실제 정보로 교체하세요
  company: {
    companyName: '유담프로세일즈아카데미',
    ceo: '윤도연',
    address: '서울특별시 ○○구 ○○로 00, 0층',
    businessNumber: '000-00-00000',
    email: 'contact@yudam-sales.co.kr',
    phone: '010-0000-0000',
  },
};

/* ─────────────── 2. 헤더 내비게이션 ─────────────── */
export const navItems = [
  { id: 'about', label: 'ABOUT' },
  { id: 'program', label: 'PROGRAM' },
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
    '저는 단순히 세일즈 이론을 가르치는 강사가 아닙니다. 직접 고객을 만나고, 판매하고, 조직을 만들고, 사람을 교육하며 현장에서 성과를 만들어온 세일즈 전문가입니다.',
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
    { value: '8', unit: 'YEARS', label: '현장 세일즈 · 교육 경력' },
    { value: '1', unit: 'ST', label: '메리케이 팀빌딩 전국 1위' },
    { value: '7', unit: 'CENTERS', label: '전국 뷰티센터 강의' },
    { value: '15', unit: '억+', label: '온라인 사업 연매출' },
  ],
};

/* ─────────────── 5. VISION ─────────────── */
export const vision = {
  eyebrow: 'OUR VISION',
  image: '/images/vision.jpg',
  imageAlt: '강의장에서 상담실장들과 마주 선 윤도연 대표',
  lines: [
    '말을 잘하는 실장이 아니라,',
    '상담을 성과로 연결하는',
  ],
  accentLine: '프로 상담실장.',
  body:
    '배우고 끝나는 교육이 아니라 배운 것을 현장에 적용하고, 피드백받으며 내 상담으로 만드는 과정. 개인의 감각에 의존하는 상담이 아니라, 반복해서 성과를 만들어내는 나만의 상담 시스템. 유담프로세일즈아카데미는 상담실장의 실력이 곧 자신의 가치가 되는 순간까지 함께합니다.',
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
  { src: '/images/gallery-01.jpg', category: 'LECTURE', title: '상담실장 실전 코칭', alt: '상담실장들과 소그룹으로 실전 코칭을 진행하는 모습' },
  { src: '/images/gallery-02.jpg', category: 'LECTURE', title: '성공적인 상담의 핵심', alt: '‘성공적인 상담의 핵심’ 강의 후 수강생과 대화하는 모습' },
  { src: '/images/gallery-03.jpg', category: 'WORKSHOP', title: '교육 후 개별 피드백', alt: '교육 종료 후 수강생에게 개별 피드백을 전달하는 모습' },
  { src: '/images/gallery-04.jpg', category: 'LECTURE', title: '병원 상담 세일즈 특강', alt: '마이크를 들고 병원 상담 세일즈 특강을 진행하는 모습' },
  { src: '/images/gallery-09.jpg', category: 'TRAINING', title: '뷰티센터 마스터 코스', alt: '뷰티센터에서 마스터 코스 실습 교육을 진행하는 모습' },
  { src: '/images/gallery-11.jpg', category: 'CONFERENCE', title: '세일즈 컨퍼런스 현장', alt: '세일즈 컨퍼런스 행사장에 참석한 윤도연 대표' },
  { src: '/images/gallery-06.jpg', category: 'AWARD', title: '연간 시상식 무대', alt: '연간 세일즈 시상식 무대에 오른 모습' },
  { src: '/images/gallery-10.jpg', category: 'AWARD', title: '차량 인정식', alt: '세일즈 성과로 받은 인정 차량과 함께 촬영한 기념 사진' },
];

/* ─────────────── 9. 수강생 후기 (가로 슬라이드) ─────────────── */
// ✏️ 실제 후기를 아래 형식에 맞춰 추가/교체하세요.
export type Review = {
  name: string;      // 예: '김○○ 실장'
  role: string;      // 예: '피부과 상담실장 · 경력 3년'
  course: string;    // 수강 과정
  headline: string;  // 후기 핵심 한 줄
  body: string;      // 후기 본문
  result?: string;   // 성과 지표 (선택)
};

export const reviews: Review[] = [
  {
    name: '김○○ 실장',
    role: '피부과 상담실장 · 경력 2년',
    course: 'BASIC COURSE',
    headline: '설명만 잘하던 상담이, 계약으로 이어지기 시작했습니다.',
    body: '상담을 체계적으로 배워본 적이 없어 늘 감으로 응대했습니다. 질문 순서와 가치 전달 방식을 바꾸고 나니 같은 고객, 같은 시술인데 결과가 달라졌습니다. 녹음 파일 피드백에서 제가 놓치던 구매 신호를 정확히 짚어주신 게 가장 큰 도움이 됐습니다.',
    result: '계약률 상승',
  },
  {
    name: '이○○ 실장',
    role: '성형외과 상담실장 · 경력 6년',
    course: 'ADVANCED COURSE',
    headline: '늘 막히던 고가 상담의 벽을 넘었습니다.',
    body: '경력은 쌓였는데 객단가가 몇 년째 제자리였습니다. 고객이 왜 망설이는지, 어떤 순간에 신뢰하는지를 배우고 나서 고가 프로그램을 제안하는 것이 더 이상 부담스럽지 않습니다. 1:1 피드백에서 제 상담 습관을 정확히 진단받은 것이 전환점이었습니다.',
    result: '객단가 상승',
  },
  {
    name: '박○○ 실장',
    role: '비만클리닉 총괄실장',
    course: 'PREMIUM 1:1 COACHING',
    headline: '제 상황에 딱 맞는 전략을 함께 설계했습니다.',
    body: '일반적인 강의는 많이 들어봤지만 제 병원, 제 고객에 맞는 답은 없었습니다. 현재 상담 방식과 성과를 먼저 진단하고 필요한 부분만 집중적으로 설계해주셔서 배운 내용을 바로 다음 상담에 적용할 수 있었습니다.',
    result: '재등록률 개선',
  },
  {
    name: '최○○ 원장',
    role: '피부과 · 병원 단체교육 담당',
    course: 'HOSPITAL CUSTOM TRAINING',
    headline: '실장마다 달랐던 상담이 하나의 기준으로 정리됐습니다.',
    body: '같은 병원인데 누가 상담하느냐에 따라 결과가 너무 달랐습니다. 저희 진료과목과 프로그램에 맞춰 교육을 설계해주셨고, 롤플레이와 사례 분석을 통해 상담팀 전체가 같은 기준으로 움직이게 됐습니다.',
    result: '상담팀 전체 교육',
  },
  {
    name: '정○○ 실장',
    role: '치과 상담실장 · 경력 4년',
    course: 'BASIC COURSE',
    headline: '거절 이후를 어떻게 다뤄야 하는지 알게 됐습니다.',
    body: '고객이 “생각해볼게요”라고 하면 그대로 상담이 끝났습니다. 이제는 그 말이 나온 이유를 질문으로 확인하고, 다시 가치로 연결하는 흐름이 생겼습니다. 배운 것을 그 주 상담에 바로 써볼 수 있다는 점이 가장 좋았습니다.',
  },
  {
    name: '한○○ 리더',
    role: '네트워크 세일즈 리더',
    course: 'PREMIUM 1:1 COACHING',
    headline: '혼자 잘 파는 것을 넘어, 팀을 성장시키는 법을 배웠습니다.',
    body: '개인 판매는 자신 있었지만 조직을 키우는 건 다른 영역이었습니다. 세일즈 코칭과 함께 팀빌딩, 구성원 동기부여까지 현재 목표에 맞춰 진행해주셔서 팀 전체의 성과 기준이 달라졌습니다.',
    result: '조직 성과 개선',
  },
];

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
  imageAlt: '교육 종료 후 수강생과 개별 상담을 진행하는 윤도연 대표',
  headline: ['어떤 부분이', '가장 고민되시나요?'],
  body: '현재의 고민과 목표를 남겨주시면 내용을 확인한 후\n가장 적합한 교육과정을 안내해드립니다.',
  buttonLabel: '교육 문의하기',
};
