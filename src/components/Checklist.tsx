import { FileText, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const Checklist = () => {
  const documents = [
    {
      icon: FileText,
      title: 'Da Demissão',
      items: ['Termo de rescisão (TRCT)', 'Carteira de trabalho (física ou digital)', 'Comunicado de dispensa'],
    },
    {
      icon: Clock,
      title: 'Do Trabalho',
      items: ['Contracheques/holerites', 'Registro de ponto', 'Extrato do FGTS'],
    },
    {
      icon: AlertCircle,
      title: 'Informações Básicas',
      items: ['Data de admissão e demissão', 'Último salário', 'Motivo da demissão informado pela empresa'],
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="line-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-section-light-foreground">
              Documentos que podem <span className="text-accent-gold font-medium">ajudar na análise</span>
            </h2>
            <p className="font-body text-lg text-section-light-foreground/70">
              Reúna o que puder. Se não tiver tudo, não se preocupe, orientamos você sobre como obter cada documento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-section-light-foreground/5 border border-section-light-foreground/10 p-6 rounded-lg"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <doc.icon className="h-6 w-6 text-gold-dark" />
                </div>
                <h3 className="font-display text-lg font-medium mb-4 text-section-light-foreground">{doc.title}</h3>
                <ul className="space-y-2">
                  {doc.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-gold-dark flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-section-light-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="font-body text-center text-section-light-foreground/70">
            Faltou algum documento? Sem problema. Entre em contato e orientamos como obtê-lo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Checklist;
