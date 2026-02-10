import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AnimatedSection from './AnimatedSection';

const FAQ = () => {
  const faqs = [
    {
      question: 'Quais áreas do direito o escritório atende?',
      answer: 'Atuamos de forma multidisciplinar nas áreas Trabalhista, Cível, Empresarial, Família e Sucessões, Direito do Consumidor e Previdenciário. Oferecemos tanto consultoria preventiva quanto contencioso judicial.',
    },
    {
      question: 'O escritório atende pessoas físicas e jurídicas?',
      answer: 'Sim. Prestamos assessoria jurídica completa tanto para pessoas físicas quanto para empresas de todos os portes, com soluções personalizadas para cada perfil de cliente.',
    },
    {
      question: 'Como funciona o primeiro atendimento?',
      answer: 'O primeiro contato pode ser feito pelo WhatsApp ou formulário do site. Agendamos uma reunião (presencial ou online) para ouvir sua demanda, analisar a documentação e apresentar as opções jurídicas disponíveis.',
    },
    {
      question: 'O atendimento é apenas presencial?',
      answer: 'Não. Além do atendimento presencial em nosso escritório em João Pessoa/PB, realizamos consultas online por videoconferência para clientes de qualquer região do Brasil.',
    },
    {
      question: 'Como são definidos os honorários?',
      answer: 'Os honorários são definidos de forma transparente após a análise do caso, considerando a complexidade da demanda, o tempo estimado e a modalidade de atuação. Apresentamos uma proposta clara antes de iniciar qualquer trabalho.',
    },
    {
      question: 'O escritório oferece consultoria preventiva para empresas?',
      answer: 'Sim. Oferecemos planos de assessoria jurídica permanente para empresas, incluindo análise de contratos, consultoria trabalhista, compliance e suporte em questões do dia a dia empresarial.',
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="line-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Perguntas <span className="text-accent-gold font-medium">Frequentes</span>
            </h2>
            <p className="font-body text-lg text-foreground/70">
              Tire suas dúvidas sobre nossos serviços e forma de atuação.
            </p>
          </AnimatedSection>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 shadow-sm"
                >
                  <AccordionTrigger className="font-display text-lg text-left hover:no-underline hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/70 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
