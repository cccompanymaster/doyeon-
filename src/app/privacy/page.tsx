import type { Metadata } from 'next';
import Link from 'next/link';
import { brand } from '@/data/site';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: `${brand.name} 개인정보처리방침`,
  robots: { index: false, follow: true },
};

/**
 * ✏️ 실제 운영 시에는 아래 내용을 사업자 상황에 맞게 검토 후 수정하세요.
 */
const sections = [
  {
    title: '1. 수집하는 개인정보 항목',
    body: '교육 문의 및 상담 신청 과정에서 성명, 연락처, 이메일, 소속(병원/직무), 문의 내용을 수집합니다. 서비스 이용 과정에서 접속 로그, 쿠키, 기기 정보가 자동으로 생성되어 수집될 수 있습니다.',
  },
  {
    title: '2. 개인정보의 수집 및 이용 목적',
    body: '교육 과정 안내, 상담 및 문의 응대, 수강 신청 처리와 교육 운영, 공지사항 전달을 위해 이용합니다. 수집한 정보는 명시한 목적 외의 용도로 사용하지 않습니다.',
  },
  {
    title: '3. 개인정보의 보유 및 이용 기간',
    body: '수집·이용 목적이 달성된 후에는 지체 없이 파기합니다. 다만 관계 법령에 따라 보존할 필요가 있는 경우 해당 법령이 정한 기간 동안 보관합니다.',
  },
  {
    title: '4. 개인정보의 제3자 제공',
    body: '이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 이용자가 사전에 동의한 경우 또는 법령의 규정에 의한 경우는 예외로 합니다.',
  },
  {
    title: '5. 정보주체의 권리와 행사 방법',
    body: '이용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. 아래 연락처로 요청하시면 지체 없이 조치합니다.',
  },
  {
    title: '6. 개인정보 보호책임자',
    body: `${brand.company.companyName} · 책임자 ${brand.company.ceo} · ${brand.company.email} · ${brand.company.phone}`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink py-24 sm:py-32">
      <div className="shell max-w-3xl">
        <Link
          href="/"
          className="font-display text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
        >
          ← Back to home
        </Link>

        <h1 className="mt-8 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">개인정보처리방침</h1>
        <p className="mt-4 text-sm leading-relaxed text-white/55">
          {brand.name}(이하 &lsquo;회사&rsquo;)는 이용자의 개인정보를 중요하게 생각하며, 관련 법령을 준수합니다.
        </p>

        <div className="mt-12 space-y-9 border-t border-line pt-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-base font-bold text-white sm:text-lg">{s.title}</h2>
              <p className="mt-3 text-sm leading-[1.95] text-white/65">{s.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-14 border-t border-line pt-8 text-xs text-white/55">
          본 방침은 게시일로부터 시행됩니다.
        </p>
      </div>
    </main>
  );
}
