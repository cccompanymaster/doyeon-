import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Vision from '@/components/Vision';
import Why from '@/components/Why';
import Process from '@/components/Process';
import Clients from '@/components/Clients';
import Programs from '@/components/Programs';
import Gallery from '@/components/Gallery';
import Media from '@/components/Media';
import Reviews from '@/components/Reviews';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingCta from '@/components/FloatingCta';

export default function Home() {
  return (
    <>
      {/* 키보드 사용자를 위한 본문 바로가기 */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-black"
      >
        본문 바로가기
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Vision />
        <Why />
        <Clients />
        <Programs />
        <Process />
        <Gallery />
        <Media />
        <Reviews />
        <News />
        <Contact />
      </main>

      <Footer />
      <FloatingCta />
    </>
  );
}
