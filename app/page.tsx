import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Stack } from '@/components/home/Stack';
import { Experience } from '@/components/home/Experience';
import { Projects } from '@/components/home/Projects';
import { Contact } from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
