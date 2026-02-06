import { MapPin, Phone, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import joaoPessoaImg from '@/assets/joao-pessoa-skyline.jpg';
import office1 from '@/assets/office-1.jpeg';
import office2 from '@/assets/office-2.jpeg';
import office3 from '@/assets/office-3.jpeg';
import office4 from '@/assets/office-4.jpeg';

const OfficeGallery = () => {
  return (
    <section className="py-24 bg-section-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="line-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-section-light-foreground">
              Onde <span className="text-accent-gold font-medium">Estamos</span>
            </h2>
            <p className="font-body text-lg text-section-light-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Atendimento presencial em João Pessoa e online para todo o Brasil.
            </p>
          </AnimatedSection>

          {/* Single Location Card */}
          <div className="max-w-lg mx-auto mb-16">
            <AnimatedSection>
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={joaoPessoaImg}
                    alt="João Pessoa - Paraíba"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display text-xl font-medium text-white">
                      João Pessoa<span className="text-gold">/PB</span>
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <a 
                      href="tel:5583993688733"
                      className="font-body text-sm text-foreground hover:text-primary transition-colors"
                    >
                      +55 (83) 99368-8733
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <div className="font-body text-sm text-foreground/80">
                      <span className="block">Rua Presidente Nilo Peçanha, nº 791</span>
                      <span className="block">Sala 202, João Pessoa/PB</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <a 
                      href="mailto:contato@deboraalbuquerque.adv.br"
                      className="font-body text-sm text-foreground hover:text-primary transition-colors"
                    >
                      contato@deboraalbuquerque.adv.br
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Office Photos Gallery */}
          <AnimatedSection className="mt-8" delay={300}>
            <h3 className="font-display text-2xl text-center mb-8 text-primary">
              Nosso Espaço
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={office1}
                  alt="Escritório Débora Albuquerque - Sala principal"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={office2}
                  alt="Escritório - Espaço de café"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={office3}
                  alt="Escritório - Sala de trabalho"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={office4}
                  alt="Escritório - Estação de trabalho"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default OfficeGallery;
