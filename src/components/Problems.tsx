import { Briefcase, FileText, Clock, UserX, AlertTriangle, Scale } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Problems = () => {
  const situations = [
    {
      icon: UserX,
      title: 'Demissão sem Justa Causa',
      description: 'Se você foi dispensado sem justa causa, existem direitos específicos garantidos por lei. Podemos orientar você sobre cada um deles.',
    },
    {
      icon: FileText,
      title: 'Verbas Rescisórias Incorretas',
      description: 'Nem sempre os valores pagos na rescisão estão corretos. Uma análise detalhada pode identificar diferenças a seu favor.',
    },
    {
      icon: Clock,
      title: 'Horas Extras Não Remuneradas',
      description: 'Trabalhou além da jornada contratual? Você pode ter direito ao pagamento com os acréscimos previstos em lei.',
    },
    {
      icon: Briefcase,
      title: 'Seguro-Desemprego Retido',
      description: 'Se a empresa não forneceu os documentos necessários, podemos ajudar a viabilizar o acesso ao seguro-desemprego.',
    },
    {
      icon: AlertTriangle,
      title: 'Pedido de Demissão Forçado',
      description: 'Situações de pressão para pedir demissão podem configurar rescisão indireta, assegurando seus direitos integrais.',
    },
    {
      icon: Scale,
      title: 'FGTS Não Depositado',
      description: 'A ausência de depósitos do FGTS é uma irregularidade grave. Orientamos sobre como buscar a regularização.',
    },
  ];

  return (
    <section id="problemas" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="line-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Você se identifica com <span className="text-accent-gold font-medium">alguma dessas situações?</span>
          </h2>
          <p className="font-body text-lg text-foreground/70">
            São questões comuns enfrentadas por trabalhadores que foram desligados. 
            Entenda seus direitos e saiba como podemos ajudar.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {situations.map((item, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-card border border-border p-6 rounded-lg hover-accent group shadow-sm h-full">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium mb-2">{item.title}</h3>
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

export default Problems;
