import { Briefcase, Home, Users, ShoppingCart, Landmark } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import areaTrabalhista from '@/assets/area-trabalhista.jpg';
import areaFamilia from '@/assets/area-familia.jpg';
import areaCivil from '@/assets/area-civil.jpg';
import areaConsumidor from '@/assets/area-consumidor.jpg';
import areaBancario from '@/assets/area-bancario.jpg';

const Problems = () => {
  const areas = [
    {
      icon: Briefcase,
      title: 'Direito Trabalhista',
      description: 'Rescisões, verbas trabalhistas, horas extras, rescisão indireta, FGTS e defesa em reclamações para empresas e trabalhadores.',
      image: areaTrabalhista,
    },
    {
      icon: Home,
      title: 'Direito de Família',
      description: 'Divórcio, pensão alimentícia, guarda de filhos, inventário, partilha de bens e planejamento sucessório.',
      image: areaFamilia,
    },
    {
      icon: Users,
      title: 'Direito Civil',
      description: 'Responsabilidade civil, contratos, indenizações, cobranças, questões imobiliárias e direito de vizinhança.',
      image: areaCivil,
    },
    {
      icon: ShoppingCart,
      title: 'Direito do Consumidor',
      description: 'Defesa em relações de consumo, cobranças indevidas, vícios de produtos e serviços, negativação indevida.',
      image: areaConsumidor,
    },
    {
      icon: Landmark,
      title: 'Direito Bancário',
      description: 'Superendividamento, juros abusivos, fraudes bancárias, revisão de contratos e defesa do consumidor financeiro.',
      image: areaBancario,
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
              <div className="bg-card border border-border rounded-lg hover-accent group shadow-sm h-full overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-white" />
                    <h3 className="font-display text-lg font-medium text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-body text-foreground/70 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
