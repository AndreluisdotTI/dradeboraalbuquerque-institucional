import { Briefcase, Home, Building2, Users, ShoppingCart, Receipt } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Problems = () => {
  const areas = [
    {
      icon: Briefcase,
      title: 'Direito Trabalhista',
      description: 'Rescisões, verbas trabalhistas, horas extras, rescisão indireta, FGTS e defesa em reclamações para empresas e trabalhadores.',
    },
    {
      icon: Home,
      title: 'Direito de Família',
      description: 'Divórcio, pensão alimentícia, guarda de filhos, inventário, partilha de bens e planejamento sucessório.',
    },
    {
      icon: Building2,
      title: 'Direito Empresarial',
      description: 'Contratos comerciais, constituição de empresas, recuperação de crédito, compliance e consultoria preventiva.',
    },
    {
      icon: Users,
      title: 'Direito Civil',
      description: 'Responsabilidade civil, contratos, indenizações, cobranças, questões imobiliárias e direito de vizinhança.',
    },
    {
      icon: ShoppingCart,
      title: 'Direito do Consumidor',
      description: 'Defesa em relações de consumo, cobranças indevidas, vícios de produtos e serviços, negativação indevida.',
    },
    {
      icon: Receipt,
      title: 'Direito Tributário',
      description: 'Planejamento tributário, defesa em execuções fiscais, recuperação de tributos e consultoria fiscal.',
    },
  ];

  return (
    <section id="areas" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="line-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Áreas de <span className="text-accent-gold font-medium">Atuação</span>
          </h2>
          <p className="font-body text-lg text-foreground/70">
            Assessoria jurídica completa e multidisciplinar para pessoas físicas e jurídicas, 
            cobrindo as principais demandas do direito brasileiro.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {areas.map((item, index) => (
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
