import { Scale, Clock, Users, FileText, MapPin, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Differentials = () => {
  const differentials = [
    {
      icon: Scale,
      title: 'Atuação Multidisciplinar',
      description: 'Cobertura completa das principais áreas do direito, com equipe especializada em cada segmento.',
    },
    {
      icon: FileText,
      title: 'Rigor Técnico',
      description: 'Estudo aprofundado de cada caso, com fundamentação sólida e estratégias embasadas na legislação vigente.',
    },
    {
      icon: Clock,
      title: 'Agilidade e Eficiência',
      description: 'Retorno rápido e processos organizados para que você tenha orientação no menor tempo possível.',
    },
    {
      icon: Users,
      title: 'Proximidade com o Cliente',
      description: 'Comunicação direta com os advogados responsáveis, sem intermediários e com linguagem acessível.',
    },
    {
      icon: MapPin,
      title: 'Presença Local e Nacional',
      description: 'Escritório em João Pessoa com atendimento presencial e online para clientes em todo o Brasil.',
    },
    {
      icon: Shield,
      title: 'Sigilo e Confiança',
      description: 'Total confidencialidade no tratamento de informações e compromisso ético em todas as relações.',
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
            Compromisso com resultados, transparência e um atendimento que faz a diferença.
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
