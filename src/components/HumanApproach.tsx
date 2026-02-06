import { CheckCircle, XCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const HumanApproach = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=5583993688733&text=Ol%C3%A1%21%20Gostaria%20de%20uma%20an%C3%A1lise%20personalizada%20do%20meu%20caso%20trabalhista.%20Aguardo%20retorno.';

  const commitments = [
    'Análise personalizada de cada detalhe do seu caso',
    'Orientação clara e responsável sobre seus direitos e possibilidades',
    'Acompanhamento próximo e humanizado em todas as etapas',
    'Comunicação transparente sobre prazos, valores e andamento do processo',
  ];

  const notOffered = [
    'Promessas de resultados sem antes analisar cuidadosamente seus documentos',
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="line-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-primary">
              Nosso <span className="text-accent-gold font-medium">Compromisso com Você</span>
            </h2>
            <p className="font-body text-xl text-foreground/70">
              Transparência e responsabilidade em cada orientação. Seu caso merece atenção individualizada.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card border border-border p-8 rounded-lg mb-8 shadow-sm">
              <h3 className="font-display text-xl font-medium mb-6 text-center text-primary">O que oferecemos</h3>
              <div className="space-y-4 mb-8">
                {commitments.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border"
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <p className="font-body text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-display text-lg font-medium mb-4 text-center text-foreground/60">O que não oferecemos</h3>
                <div className="space-y-3">
                  {notOffered.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg bg-background border border-border"
                    >
                      <XCircle className="h-5 w-5 text-foreground/40 flex-shrink-0" />
                      <p className="font-body text-foreground/60">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center" delay={200}>
            <Button 
              variant="gold" 
              size="lg" 
              className="group w-full sm:w-auto"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5 flex-shrink-0" />
                <span className="truncate">Falar com a Advogada</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0 hidden sm:block" />
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HumanApproach;
