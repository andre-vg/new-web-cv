import AboutSection from '@/src/components/About/aboutSection';
import HeroSection from '@/src/components/Hero/heroSection';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HeroSection />
      <AboutSection />
    </section>
  );
}
