import SEO from '@/components/SEO';
import Hero from '@/components/sections/Hero';
import InfoSection from '@/components/sections/InfoSection';
import RevolutionSection from '@/components/sections/RevolutionSection';
import Services from '@/components/sections/Services';
import Steps from '@/components/sections/Steps';
import Roadmap from '@/components/sections/Roadmap';
import ContactUs from '@/components/sections/ContactUs';

export default function Home() {
  return (
    <>
      <SEO
        title="Concept 44 - Blockchain & Web3 Solutions"
        description="We are a team of professionals specializing in the development and implementation of blockchain solutions. Empowering the Web3 revolution."
        image="/logo.png"
        url="https://concept44.com/"
      />
      <Hero />
      <InfoSection />
      <RevolutionSection />
      <Services />
      {/* <Cases /> */}
      <Steps />
      <Roadmap />
      <ContactUs />
    </>
  );
}
