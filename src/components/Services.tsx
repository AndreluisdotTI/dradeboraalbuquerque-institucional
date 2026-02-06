import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  const services = [
    {
      title: 'Verbas Rescisórias',
      description: 'Análise completa dos valores devidos na rescisão: FGTS, multa de 40%, aviso prévio, férias e 13º salário.',
    },
    {
      title: 'Rescisão Indireta',
      description: 'Orientação para situações em que o trabalhador é levado a pedir demissão por condições inadequadas de trabalho.',
    },
    {
      title: 'Horas Extras e Adicionais',
      description: 'Cálculo técnico das horas trabalhadas além da jornada, com os acréscimos legais e reflexos devidos.',
    },
    {
      title: 'Revisão de Cálculos',
      description: 'Conferência minuciosa de cada valor da rescisão para identificar possíveis diferenças a seu favor.',
    },
    {
      title: 'Seguro-Desemprego',
      description: 'Auxílio na obtenção das guias e documentos necessários quando a empresa não os forneceu corretamente.',
    },
    {
      title: 'Acompanhamento Processual',
      description: 'Acompanhamento dedicado de todo o processo, com atualização constante sobre cada etapa ao cliente.',
    },
  ];

  return (
    <section id="servicos" className="py-24 section-navy relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <div className="line-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-white">
            Áreas de <span className="text-gold font-medium">Atuação</span>
          </h2>
          <p className="font-body text-white/70">
            Atendimento jurídico especializado nas principais demandas trabalhistas.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <Card className="group border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold/40 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <CardTitle className="font-display text-xl font-medium text-white">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
