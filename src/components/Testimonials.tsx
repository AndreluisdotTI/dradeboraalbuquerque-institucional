import { Star, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const Testimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const testimonials = [
    {
      name: 'Carlos Eduardo M.',
      role: 'Empresário',
      text: 'Profissionalismo impecável. O escritório cuidou de toda a parte trabalhista da minha empresa com muita competência e transparência. Recomendo sem hesitar.',
      rating: 5,
    },
    {
      name: 'Fernanda Oliveira',
      role: 'Servidora Pública',
      text: 'Fui muito bem atendida desde o primeiro contato. A Dra. Débora explicou tudo com clareza e me deixou segura durante todo o processo de inventário da família.',
      rating: 5,
    },
    {
      name: 'Roberto Nascimento',
      role: 'Comerciante',
      text: 'Precisei de assessoria para um contrato comercial complexo. A equipe foi extremamente atenciosa e entregou um trabalho de altíssima qualidade.',
      rating: 5,
    },
    {
      name: 'Ana Beatriz Costa',
      role: 'Professora',
      text: 'Atendimento humanizado de verdade. Me senti acolhida e bem orientada em um momento muito difícil. Gratidão pela dedicação e profissionalismo.',
      rating: 5,
    },
    {
      name: 'Marcos Vinícius S.',
      role: 'Engenheiro',
      text: 'Resolveram minha questão trabalhista de forma rápida e eficiente. A comunicação foi excelente do início ao fim. Escritório sério e confiável.',
      rating: 5,
    },
    {
      name: 'Juliana Freitas',
      role: 'Administradora',
      text: 'A consultoria preventiva para minha empresa foi essencial. Evitamos vários problemas graças à orientação estratégica do escritório.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <div className="line-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            O que nossos clientes <span className="text-accent-gold font-medium">dizem</span>
          </h2>
          <p className="font-body text-foreground/70">
            A confiança dos nossos clientes é o nosso maior reconhecimento.
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto px-12">
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((item, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card border border-border p-6 rounded-lg shadow-sm h-full flex flex-col">
                    <Quote className="h-8 w-8 text-accent-gold/30 mb-4 flex-shrink-0" />
                    <p className="font-body text-foreground/70 leading-relaxed mb-6 flex-1 italic">
                      "{item.text}"
                    </p>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent-gold text-accent-gold" />
                      ))}
                    </div>
                    <div>
                      <p className="font-display text-base font-medium">{item.name}</p>
                      <p className="font-body text-sm text-foreground/50">{item.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
