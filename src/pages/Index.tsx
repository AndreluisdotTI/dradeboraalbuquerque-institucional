import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import About from '@/components/About';
import Services from '@/components/Services';
import Differentials from '@/components/Differentials';
import Comparison from '@/components/Comparison';
import HumanApproach from '@/components/HumanApproach';
import OfficeGallery from '@/components/OfficeGallery';
import AboutFirm from '@/components/AboutFirm';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Problems />
        <Services />
        <Differentials />
        <Comparison />
        <HumanApproach />
        <OfficeGallery />
        <AboutFirm />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
