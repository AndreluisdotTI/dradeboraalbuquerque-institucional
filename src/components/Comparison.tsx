import { ArrowRight, MessageCircle, FileText, Calculator, Scale, Gavel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const Comparison = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=5583993688733&text=Ol%C3%A1%21%20Gostaria%20de%20uma%20an%C3%A1lise%20personalizada%20do%20meu%20caso%20trabalhista.%20Aguardo%20retorno.';

  const process = [
    {
      icon: FileText,
      step: '01',
      title: 'Envie seus Documentos',
      description: 'CTPS, contracheques, termo de rescisão. Envie o que tiver disponível para análise.',
    },
    {
      icon: Calculator,
      step: '02',
      title: 'Análise Personalizada',
      description: 'Examinamos cada detalhe para identificar seus direitos e possíveis valores devidos.',
    },
    {
      icon: Scale,
      step: '03',
      title: 'Orientação Jurídica',
      description: 'Apresentamos um parecer claro sobre as opções disponíveis e os caminhos mais adequados.',
    },
    {
      icon: Gavel,
      step: '04',
      title: 'Acompanhamento Dedicado',
      description: 'Conduzimos seu caso com atenção em cada fase, mantendo você informado sobre todo o andamento.',
    },
  ];

  return (
    <section className="py-24 bg-section-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="line-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-primary">
              4 Passos para <span className="text-accent-gold font-medium">Cuidar dos Seus Direitos</span>
            </h2>
            <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
              Um processo simples e transparente, do primeiro contato até a resolução do caso.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 100}>
                <div className="bg-card border border-border p-6 rounded-lg text-center relative hover-accent shadow-sm h-full">
                  <span className="font-display text-5xl font-bold text-primary/5 absolute top-2 right-4">
                    {item.step}
                  </span>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2 text-primary">{item.title}</h3>
                  <p className="font-body text-sm text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Button 
              variant="gold" 
              size="lg" 
              className="group w-full sm:w-auto"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5 flex-shrink-0" />
                <span className="truncate">Solicitar Análise do Caso</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0 hidden sm:block" />
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
