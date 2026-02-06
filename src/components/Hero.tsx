import { ArrowRight, Scale, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroDesktop from '@/assets/hero-desktop-new.png';
import heroMobile from '@/assets/hero-mobile-new.png';
import InteractiveBackground from './InteractiveBackground';
const Hero = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=5583993688733&text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.%20Aguardo%20retorno.';
  return <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block" style={{
      backgroundImage: `url(${heroDesktop})`
    }} />
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 bg-cover bg-bottom bg-no-repeat md:hidden" style={{
      backgroundImage: `url(${heroMobile})`
    }} />

      {/* Interactive Triangles */}
      <InteractiveBackground />

      {/* Text Content */}
      <div className="relative container mx-auto px-4 pt-20 md:pt-32 text-center md:text-right md:flex md:justify-end">
        <div className="max-w-3xl mx-auto md:mx-0 md:max-w-lg lg:max-w-xl">
          {/* Badge - Hidden on mobile */}
          <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8 animate-fade-up">
            <Scale className="h-4 w-4 text-gold" />
            <span className="text-sm font-body tracking-wider text-gold">
              Assessoria Jurídica Completa em João Pessoa, PB
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-4 md:mb-6 animate-fade-up delay-100 text-white drop-shadow-lg">
            Soluções jurídicas{' '}
            <span className="text-gold font-medium block md:inline">para cada fase da sua vida.</span>
          </h1>

          {/* Subtitle */}
          <p className="hidden md:block font-display text-2xl text-white/90 mb-4 animate-fade-up delay-150 drop-shadow-md">
            Advocacia multidisciplinar, estratégica e humanizada.
          </p>

          {/* Description */}
          <p className="font-body text-sm md:text-xl text-white/70 leading-relaxed max-w-xl mx-auto md:mx-0 md:ml-auto animate-fade-up delay-150 md:delay-200 drop-shadow-md font-semibold">
            Atuação completa nas áreas Trabalhista, Cível, Empresarial, Família, 
            Consumidor e Tributária. Orientação clara e responsável para pessoas e empresas.
          </p>

          {/* CTA Button - Desktop only */}
          <div className="hidden md:flex md:justify-end animate-fade-up delay-300 mt-8">
            <Button variant="gold" size="lg" className="group text-lg px-8 py-6" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5 flex-shrink-0" />
                <span className="truncate">Agende sua Consulta</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </a>
            </Button>
          </div>

        </div>
      </div>

      {/* Spacer to push CTA to bottom on mobile */}
      <div className="flex-1 md:hidden" />

      {/* CTA + Stats - Mobile only */}
      <div className="relative pb-6 md:hidden px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-up delay-300 mb-4">
              <Button variant="gold" size="lg" className="group text-base px-6 py-5 w-full sm:w-auto" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="truncate">Agende sua Consulta</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop only */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-gold" />
        </div>
      </div>
    </section>;
};
export default Hero;
