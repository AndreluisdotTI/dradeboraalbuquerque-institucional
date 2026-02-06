import { Scale, Clock, Users, FileText, MapPin, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Differentials = () => {
  const differentials = [
    {
      icon: Scale,
      title: 'Especialização Trabalhista',
      description: 'Atuação focada exclusivamente em direito do trabalho, o que permite um conhecimento aprofundado da área.',
    },
    {
      icon: FileText,
      title: 'Análise Criteriosa',
      description: 'Examinamos contracheques, registros de ponto, TRCT e cada documento para uma avaliação precisa do caso.',
    },
    {
      icon: Clock,
      title: 'Retorno Ágil',
      description: 'Valorizamos seu tempo. A análise inicial é realizada com agilidade para que você tenha orientação o quanto antes.',
    },
    {
      icon: Users,
      title: 'Atendimento Próximo',
      description: 'Advogada acessível, que acompanha pessoalmente cada caso com dedicação e empatia.',
    },
    {
      icon: MapPin,
      title: 'Presença em João Pessoa',
      description: 'Escritório físico na capital paraibana, com atendimento presencial e online para sua comodidade.',
    },
    {
      icon: Shield,
      title: 'Sigilo e Ética',
      description: 'Seu caso é tratado com total confidencialidade e respeito aos princípios éticos da advocacia.',
    },
  ];

  return (
    <section id="diferenciais" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <div className="line-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Por que <span className="text-accent-gold font-medium">nos escolher</span>
          </h2>
          <p className="font-body text-foreground/70">
            Compromisso com a qualidade técnica, o atendimento humanizado e a transparência em cada etapa.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100}>
              <div className="bg-card border border-border p-6 rounded-lg hover-accent group shadow-sm h-full">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                <p className="font-body text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
