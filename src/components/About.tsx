import { Target, FileCheck, Shield, Users, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import deboraImg from '@/assets/debora-about.png';

const About = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=5583993688733&text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.%20Aguardo%20retorno.';

  const pillars = [
    {
      icon: Target,
      title: 'Visão Estratégica',
      description: 'Analisamos cada caso sob múltiplas perspectivas para encontrar a solução mais eficiente e segura.',
    },
    {
      icon: FileCheck,
      title: 'Excelência Técnica',
      description: 'Equipe em constante atualização, com domínio aprofundado das legislações e jurisprudências vigentes.',
    },
    {
      icon: Shield,
      title: 'Ética e Transparência',
      description: 'Diagnóstico honesto sobre riscos, custos e possibilidades. Sem surpresas, sem promessas vazias.',
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único. Oferecemos atenção individualizada e comunicação acessível em todas as etapas.',
    },
  ];

  return (
    <section id="sobre" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="line-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            O <span className="text-accent-gold font-medium">Escritório</span>
          </h2>
          <p className="font-body text-lg text-foreground/70">
            Somos um escritório de advocacia com atuação multidisciplinar, 
            comprometido com a excelência técnica e o atendimento humanizado.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12 items-center">
          <AnimatedSection animation="fade-right" className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 border-2 border-gold/40 rounded-lg" />
              <div className="absolute -inset-1.5 border border-gold/60 rounded-lg" />
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-gold rounded-tl-lg" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-gold rounded-tr-lg" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-gold rounded-bl-lg" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-gold rounded-br-lg" />
              <img 
                src={deboraImg} 
                alt="Débora Albuquerque Advocacia - Escritório" 
                className="relative rounded-lg shadow-elegant max-w-sm w-full object-cover"
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 100} animation="fade-left">
                <div className="bg-card border border-border p-6 rounded-lg hover-accent group text-center shadow-sm h-full">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <pillar.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2">{pillar.title}</h3>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
              <span className="truncate">Agende uma Consulta</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0 hidden sm:block" />
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
