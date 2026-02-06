import { AlertTriangle, Clock, FileX, Ban } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Warning = () => {
  const risks = [
    {
      icon: Clock,
      title: 'Prazos Legais Importantes',
      description: 'O prazo para ingressar com ação trabalhista é de 2 anos após o desligamento. É importante buscar orientação o quanto antes.',
    },
    {
      icon: FileX,
      title: 'Documentação é Essencial',
      description: 'Reunir os documentos certos faz toda a diferença na análise do caso. Quanto antes, mais fácil organizá-los.',
    },
    {
      icon: Ban,
      title: 'Avalie com Cuidado',
      description: 'Antes de aceitar qualquer proposta de acordo, é fundamental ter uma orientação jurídica para entender o real valor dos seus direitos.',
    },
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <AlertTriangle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Informações <span className="text-accent-gold font-medium">importantes</span>
            </h2>
            <p className="font-body text-xl text-foreground/80">
              Conhecer seus prazos e direitos é o primeiro passo para tomar decisões seguras.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {risks.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card border border-border p-6 rounded-lg text-center shadow-sm h-full">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10" delay={400}>
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="font-body text-foreground/80">
                Quanto antes buscar orientação, melhores as condições para cuidar dos seus direitos.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Warning;
