import { ArrowRight, MessageCircle, FileText, Calculator, Scale, Gavel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const Comparison = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=5583993688733&text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.%20Aguardo%20retorno.';

  const process = [
    {
      icon: FileText,
      step: '01',
      title: 'Primeiro Contato',
      description: 'Entre em contato pelo WhatsApp ou formulário. Ouviremos sua demanda e agendaremos uma reunião.',
    },
    {
      icon: Calculator,
      step: '02',
      title: 'Análise do Caso',
      description: 'Estudamos os documentos e detalhes da situação para compreender o cenário completo.',
    },
    {
      icon: Scale,
      step: '03',
      title: 'Estratégia Jurídica',
      description: 'Apresentamos um plano de ação claro, com opções, prazos, custos e expectativas realistas.',
    },
    {
      icon: Gavel,
      step: '04',
      title: 'Execução e Acompanhamento',
      description: 'Conduzimos o caso com dedicação, mantendo você informado sobre cada etapa do processo.',
    },
  ];

  return (
    <section className="py-24 section-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="line-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-white">
              Como <span className="text-accent-gold font-medium">Funciona</span>
            </h2>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
              Um processo transparente e organizado, do primeiro contato à resolução da sua demanda.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 100}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-lg text-center relative hover:border-gold/40 transition-all duration-300 shadow-sm h-full">
                  <span className="font-display text-5xl font-bold text-white/5 absolute top-2 right-4">
                    {item.step}
                  </span>
                  <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2 text-white">{item.title}</h3>
                  <p className="font-body text-sm text-white/60">
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
                <span className="truncate">Agende sua Consulta</span>
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
