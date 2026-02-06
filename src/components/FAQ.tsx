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
      question: 'Fui demitido sem justa causa. Quais são meus direitos?',
      answer: 'Na demissão sem justa causa, você pode ter direito a: saldo de salário, aviso prévio (trabalhado ou indenizado), férias proporcionais + 1/3, 13º proporcional, multa de 40% do FGTS, saque do FGTS e guias para seguro-desemprego. Uma análise individual pode esclarecer cada item do seu caso.',
    },
    {
      question: 'Acho que minha rescisão foi calculada incorretamente. O que fazer?',
      answer: 'Reúna seus documentos (CTPS, contracheques, TRCT, extrato do FGTS) e agende uma análise. Faremos uma conferência detalhada de cada valor e, se houver diferenças, orientaremos sobre as medidas cabíveis.',
    },
    {
      question: 'Qual o prazo para buscar meus direitos após a demissão?',
      answer: 'O prazo para ingressar com ação trabalhista é de até 2 anos após o desligamento, podendo pleitear direitos dos últimos 5 anos de trabalho. Por isso, é importante buscar orientação jurídica o quanto antes.',
    },
    {
      question: 'Me senti pressionado a pedir demissão. Tenho algum direito?',
      answer: 'Situações de pressão ou condições inadequadas de trabalho podem, em determinados casos, configurar rescisão indireta. Nessa hipótese, os direitos podem ser equiparados aos de uma demissão sem justa causa. Cada caso precisa ser analisado individualmente.',
    },
    {
      question: 'Como funciona o atendimento?',
      answer: 'O primeiro contato é feito pelo WhatsApp, onde agendamos uma conversa para entender sua situação. Após a análise dos documentos, apresentamos um parecer claro sobre seus direitos e as opções disponíveis. O atendimento pode ser presencial em João Pessoa ou online.',
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
              Esclarecimentos sobre os direitos trabalhistas mais comuns em casos de demissão.
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
