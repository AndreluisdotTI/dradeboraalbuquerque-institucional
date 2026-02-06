import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import About from '@/components/About';
import Services from '@/components/Services';
import Differentials from '@/components/Differentials';
import Comparison from '@/components/Comparison';
import Warning from '@/components/Warning';
import HumanApproach from '@/components/HumanApproach';
import Checklist from '@/components/Checklist';
import OfficeGallery from '@/components/OfficeGallery';
import AboutFirm from '@/components/AboutFirm';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problems />
        <About />
        <Services />
        <Differentials />
        <Comparison />
        <Warning />
        <HumanApproach />
        <Checklist />
        <OfficeGallery />
        <AboutFirm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
