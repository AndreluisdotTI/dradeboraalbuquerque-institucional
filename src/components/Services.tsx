import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  const services = [
    {
      title: 'Consultoria Preventiva',
      description: 'Orientação jurídica antecipada para evitar litígios e proteger seus interesses pessoais e empresariais.',
    },
    {
      title: 'Contencioso Judicial',
      description: 'Representação completa em processos judiciais, com estratégia personalizada para cada demanda.',
    },
    {
      title: 'Mediação e Negociação',
      description: 'Busca de soluções extrajudiciais eficientes, com foco em acordos vantajosos e economia de tempo.',
    },
    {
      title: 'Contratos e Pareceres',
      description: 'Elaboração, revisão e análise de contratos, além de pareceres jurídicos para tomada de decisão segura.',
    },
    {
      title: 'Compliance e Governança',
      description: 'Estruturação de programas de conformidade legal, políticas internas e adequação regulatória.',
    },
    {
      title: 'Atendimento a Empresas',
      description: 'Assessoria jurídica permanente para pequenas, médias e grandes empresas em todas as áreas do direito.',
    },
  ];

  return (
    <section id="servicos" className="py-24 section-navy relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <div className="line-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-white">
            Nossos <span className="text-gold font-medium">Serviços</span>
          </h2>
          <p className="font-body text-white/70">
            Soluções jurídicas completas para atender às necessidades de pessoas e empresas com excelência.
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
