import { useState } from 'react';
import { ArrowRight, Calendar, X } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const BlogNews = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const posts = [
    {
      title: 'Nova Lei Trabalhista: o que muda para empresas e empregados em 2025',
      excerpt: 'Entenda as principais alterações na legislação trabalhista e como elas impactam contratos de trabalho, jornadas e benefícios.',
      date: '28 Jan 2025',
      category: 'Trabalhista',
      readTime: '5 min',
      content: `A legislação trabalhista brasileira passou por importantes atualizações em 2025, trazendo mudanças significativas tanto para empregadores quanto para trabalhadores.

**Principais alterações:**

**1. Jornada de trabalho flexível**
A nova lei amplia as possibilidades de jornadas flexíveis, permitindo que empresas e empregados negociem horários de trabalho de forma mais dinâmica, respeitando o limite de 44 horas semanais. Modelos híbridos e remotos ganharam regulamentação mais clara.

**2. Banco de horas**
O banco de horas agora pode ser compensado em até 12 meses por acordo individual escrito, desde que haja concordância expressa do trabalhador. Horas extras acumuladas além de 60 dias sem compensação deverão ser pagas com acréscimo de 50%.

**3. Benefícios e vale-alimentação**
O vale-alimentação e vale-refeição passam a ter regras mais rígidas, com proibição de descontos e taxas abusivas por parte das operadoras. As empresas devem garantir que o benefício seja utilizado exclusivamente para alimentação.

**4. Contratos intermitentes**
A modalidade de trabalho intermitente foi regulamentada com maior detalhamento, garantindo direitos como férias proporcionais, 13º salário e FGTS calculados sobre cada período trabalhado.

**5. Proteção ao trabalhador de aplicativos**
Uma das inovações mais aguardadas: trabalhadores de plataformas digitais agora contam com garantias mínimas, incluindo seguro contra acidentes, contribuição previdenciária e limite de jornada diária.

**O que as empresas devem fazer:**
- Revisar contratos de trabalho existentes
- Atualizar políticas internas de RH
- Adequar sistemas de controle de jornada
- Consultar assessoria jurídica para garantir conformidade

**Recomendação:** Caso tenha dúvidas sobre como essas mudanças afetam sua empresa ou seus direitos como trabalhador, entre em contato conosco para uma orientação personalizada.`,
    },
    {
      title: 'Planejamento sucessório: proteja seu patrimônio e sua família',
      excerpt: 'Saiba como um planejamento sucessório bem estruturado pode evitar conflitos familiares e reduzir custos com inventário.',
      date: '15 Jan 2025',
      category: 'Família',
      readTime: '4 min',
      content: `O planejamento sucessório é uma das ferramentas jurídicas mais importantes para garantir a proteção do patrimônio e a harmonia familiar após o falecimento de uma pessoa.

**Por que planejar a sucessão?**

Sem um planejamento adequado, a partilha de bens pode se transformar em um processo longo, caro e desgastante emocionalmente. O inventário judicial pode levar anos e consumir até 20% do valor total do patrimônio em custos processuais, impostos e honorários.

**Instrumentos disponíveis:**

**1. Testamento**
Permite ao titular do patrimônio determinar como seus bens serão distribuídos, respeitando a legítima (50% destinada aos herdeiros necessários). É possível incluir cláusulas de inalienabilidade, impenhorabilidade e incomunicabilidade.

**2. Doação em vida**
A transferência de bens ainda em vida, com reserva de usufruto, permite que o doador continue usufruindo do patrimônio enquanto vivo, mas já determine a destinação após seu falecimento.

**3. Holding familiar**
A criação de uma empresa familiar para administrar o patrimônio permite planejamento tributário, proteção patrimonial e facilita a sucessão, evitando o inventário judicial.

**4. Seguro de vida**
Valores recebidos por meio de seguro de vida não entram no inventário e são pagos diretamente aos beneficiários, garantindo liquidez imediata à família.

**Vantagens do planejamento:**
- Redução significativa de impostos (ITCMD)
- Agilidade na transferência de bens
- Prevenção de conflitos familiares
- Proteção patrimonial contra credores
- Manutenção do padrão de vida da família

**Quando começar?** O momento ideal é agora. Quanto antes o planejamento for feito, maiores são as opções disponíveis e menores os custos envolvidos.`,
    },
    {
      title: 'Compliance empresarial: por que sua empresa precisa investir agora',
      excerpt: 'Programas de conformidade são cada vez mais essenciais para evitar riscos jurídicos e fortalecer a governança corporativa.',
      date: '05 Jan 2025',
      category: 'Empresarial',
      readTime: '6 min',
      content: `Em um cenário de fiscalização cada vez mais rigorosa, o compliance empresarial deixou de ser um diferencial para se tornar uma necessidade. Empresas que investem em programas de conformidade reduzem riscos jurídicos e fortalecem sua reputação no mercado.

**O que é compliance?**

Compliance, do inglês "to comply" (cumprir), refere-se ao conjunto de práticas adotadas por uma empresa para garantir que suas operações estejam em conformidade com leis, regulamentos e políticas internas.

**Pilares de um programa eficaz:**

**1. Código de Conduta**
Documento que estabelece os valores, princípios e padrões de comportamento esperados de todos os colaboradores, fornecedores e parceiros.

**2. Canal de Denúncias**
Mecanismo seguro e confidencial para que colaboradores possam reportar irregularidades sem medo de retaliação.

**3. Due Diligence**
Processo de investigação e verificação de parceiros comerciais, fornecedores e clientes para mitigar riscos de associação com práticas ilegais.

**4. Treinamentos**
Capacitação periódica de todos os colaboradores sobre temas como anticorrupção, proteção de dados (LGPD), assédio e discriminação.

**5. Monitoramento e Auditoria**
Avaliação contínua da efetividade do programa, com revisões periódicas e ajustes conforme necessário.

**Benefícios para sua empresa:**
- Redução de multas e penalidades
- Proteção contra responsabilização de sócios e gestores
- Maior confiança de investidores e parceiros
- Ambiente de trabalho mais ético e transparente
- Vantagem competitiva em licitações e contratos

**Nossa equipe pode ajudar** na estruturação completa do seu programa de compliance, desde o diagnóstico inicial até a implementação e monitoramento contínuo.`,
    },
    {
      title: 'Seus direitos como consumidor em compras online',
      excerpt: 'Conheça as garantias legais para compras pela internet: direito de arrependimento, trocas, devoluções e muito mais.',
      date: '20 Dez 2024',
      category: 'Consumidor',
      readTime: '3 min',
      content: `O comércio eletrônico cresce a cada ano no Brasil, mas muitos consumidores ainda desconhecem seus direitos em compras realizadas pela internet. O Código de Defesa do Consumidor (CDC) oferece proteções específicas para essas transações.

**Seus principais direitos:**

**1. Direito de Arrependimento (Art. 49 do CDC)**
Você tem até 7 dias corridos após o recebimento do produto para desistir da compra, sem necessidade de justificativa. O vendedor deve devolver o valor integral, incluindo o frete.

**2. Garantia Legal**
Todo produto possui garantia legal de 30 dias (produtos não duráveis) ou 90 dias (produtos duráveis), contados a partir do recebimento. Defeitos identificados neste período devem ser reparados pelo fornecedor.

**3. Informações claras e adequadas**
O fornecedor é obrigado a fornecer informações precisas sobre o produto, incluindo preço, características, riscos, prazo de entrega e condições de pagamento.

**4. Proteção contra publicidade enganosa**
Ofertas e promoções devem ser cumpridas exatamente como anunciadas. Se o produto entregue não corresponder ao que foi apresentado, o consumidor pode exigir o cumprimento da oferta ou a devolução do valor pago.

**5. Segurança de dados**
Com a LGPD em vigor, as empresas devem proteger seus dados pessoais e utilizá-los apenas para as finalidades informadas no momento da coleta.

**O que fazer quando seus direitos são violados:**
- Registre reclamação no SAC da empresa
- Utilize plataformas como o Consumidor.gov.br
- Procure o Procon de sua cidade
- Busque orientação jurídica para casos mais complexos

**Dica:** Sempre guarde comprovantes de compra, prints de ofertas e conversas com o vendedor. Essas provas são essenciais caso você precise buscar seus direitos.`,
    },
    {
      title: 'Superendividamento: conheça seus direitos e saiba como renegociar',
      excerpt: 'A Lei do Superendividamento protege consumidores em situação financeira crítica. Saiba como funciona e quais são seus direitos.',
      date: '10 Dez 2024',
      category: 'Bancário',
      readTime: '7 min',
      content: `A Lei 14.181/2021, conhecida como Lei do Superendividamento, trouxe mecanismos importantes para proteger consumidores que se encontram em situação de endividamento excessivo, garantindo a preservação do mínimo existencial.

**O que é superendividamento?**

Considera-se superendividado o consumidor pessoa natural, de boa-fé, que não consegue pagar a totalidade de suas dívidas de consumo sem comprometer seu sustento e de sua família.

**Seus direitos pela nova lei:**

**1. Preservação do mínimo existencial**
As parcelas de dívidas renegociadas não podem comprometer o valor necessário para a sobrevivência do consumidor e sua família, garantindo recursos para alimentação, moradia, saúde e educação.

**2. Renegociação coletiva**
O consumidor pode solicitar judicialmente a reunião de todos os seus credores para uma audiência de conciliação, buscando um plano de pagamento global que respeite sua capacidade financeira.

**3. Proteção contra práticas abusivas**
A lei proíbe oferta de crédito a consumidores já endividados sem avaliação prévia da capacidade de pagamento, além de vedar publicidade de crédito enganosa ou abusiva.

**4. Revisão de juros abusivos**
Contratos com taxas de juros muito acima da média de mercado podem ser revisados judicialmente, reduzindo o valor total da dívida.

**Fraudes bancárias:**
Se você foi vítima de fraude bancária (clonagem de cartão, empréstimos não autorizados, golpes via PIX), a instituição financeira pode ser responsabilizada. Você tem direito à devolução dos valores indevidamente debitados, além de possível indenização por danos morais.

**Como podemos ajudar:**
- Análise completa da sua situação financeira
- Revisão de contratos bancários
- Negociação com credores
- Ação judicial quando necessário
- Defesa contra cobranças indevidas

**Não espere a situação piorar.** Quanto antes buscar orientação jurídica, maiores são as chances de uma solução favorável.`,
    },
    {
      title: 'Contratos imobiliários: cuidados essenciais antes de assinar',
      excerpt: 'Dicas práticas para analisar cláusulas, evitar armadilhas e garantir segurança jurídica em negociações imobiliárias.',
      date: '01 Dez 2024',
      category: 'Cível',
      readTime: '4 min',
      content: `A aquisição de um imóvel é, para a maioria das pessoas, o maior investimento de uma vida. Por isso, a análise cuidadosa do contrato imobiliário é essencial para evitar prejuízos e garantir segurança jurídica.

**Cuidados essenciais:**

**1. Verifique a documentação do imóvel**
Antes de assinar qualquer contrato, solicite a matrícula atualizada do imóvel no Cartório de Registro de Imóveis. Verifique se há ônus, penhoras, hipotecas ou outras restrições que possam comprometer a negociação.

**2. Analise a situação do vendedor**
Certifique-se de que o vendedor é realmente o proprietário do imóvel e que não há ações judiciais que possam afetar a venda. A certidão negativa de débitos é fundamental.

**3. Cláusulas de pagamento**
Atenção especial às condições de pagamento: valores, prazos, índice de correção monetária, juros e penalidades por atraso. Em financiamentos, verifique o CET (Custo Efetivo Total) e compare entre diferentes instituições.

**4. Prazo de entrega (imóveis na planta)**
Para imóveis em construção, o contrato deve prever prazo claro de entrega, tolerância (geralmente 180 dias) e penalidades para a construtora em caso de atraso, incluindo direito à rescisão e devolução integral dos valores pagos.

**5. Vícios e defeitos**
Imóveis novos possuem garantia de 5 anos contra defeitos estruturais. Imóveis usados devem ser vistoriados antes da compra, e quaisquer problemas identificados devem ser documentados no contrato.

**6. Escritura e registro**
A compra só se consolida com o registro da escritura no Cartório de Registro de Imóveis. Sem o registro, o comprador não é considerado proprietário perante terceiros.

**Armadilhas comuns:**
- Contratos de gaveta (sem registro formal)
- Imóveis com irregularidades na prefeitura
- Promessas verbais não documentadas
- Cláusulas abusivas em contratos de adesão

**Nossa recomendação:** Sempre consulte um advogado antes de assinar qualquer contrato imobiliário. O investimento em assessoria jurídica preventiva é mínimo comparado aos riscos de uma negociação mal conduzida.`,
    },
  ];

  const activePost = selectedPost !== null ? posts[selectedPost] : null;

  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h3 key={i} className="font-display text-lg font-semibold text-primary mt-6 mb-2">
            {line.replace(/\*\*/g, '')}
          </h3>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={i} className="font-body text-foreground/80 ml-4 mb-1 list-disc">
            {line.substring(2)}
          </li>
        );
      }
      if (line.trim() === '') return <br key={i} />;
      // Handle inline bold
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="font-body text-foreground/80 leading-relaxed mb-1">
          {parts.map((part, j) =>
            part.startsWith('**') && part.endsWith('**') ? (
              <strong key={j} className="font-semibold text-foreground">
                {part.replace(/\*\*/g, '')}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <div className="line-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Notícias e <span className="text-accent-gold font-medium">Artigos</span>
          </h2>
          <p className="font-body text-foreground/70">
            Conteúdo jurídico relevante para manter você informado sobre seus direitos e o cenário legal.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <article
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col group cursor-pointer"
                onClick={() => setSelectedPost(index)}
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="font-body text-xs text-foreground/40">{post.readTime} de leitura</span>
                  </div>
                  <h3 className="font-display text-lg font-medium mb-3 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-foreground/60 leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-foreground/40">
                      <Calendar className="h-3.5 w-3.5" />
                      <span className="font-body text-xs">{post.date}</span>
                    </div>
                    <span className="font-body text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ler mais <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Dialog open={selectedPost !== null} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto p-0">
          {activePost && (
            <>
              <DialogHeader className="p-6 pb-0 sticky top-0 bg-card z-10 border-b border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-medium">
                    {activePost.category}
                  </span>
                  <div className="flex items-center gap-2 text-foreground/40">
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="font-body text-xs">{activePost.date}</span>
                  </div>
                  <span className="font-body text-xs text-foreground/40">{activePost.readTime} de leitura</span>
                </div>
                <DialogTitle className="font-display text-xl md:text-2xl font-medium text-primary leading-snug pb-4">
                  {activePost.title}
                </DialogTitle>
              </DialogHeader>
              <div className="p-6 pt-4">
                {renderContent(activePost.content)}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BlogNews;
