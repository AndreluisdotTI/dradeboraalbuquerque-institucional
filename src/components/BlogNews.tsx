import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const BlogNews = () => {
  const posts = [
    {
      title: 'Nova Lei Trabalhista: o que muda para empresas e empregados em 2025',
      excerpt: 'Entenda as principais alterações na legislação trabalhista e como elas impactam contratos de trabalho, jornadas e benefícios.',
      date: '28 Jan 2025',
      category: 'Trabalhista',
      readTime: '5 min',
    },
    {
      title: 'Planejamento sucessório: proteja seu patrimônio e sua família',
      excerpt: 'Saiba como um planejamento sucessório bem estruturado pode evitar conflitos familiares e reduzir custos com inventário.',
      date: '15 Jan 2025',
      category: 'Família',
      readTime: '4 min',
    },
    {
      title: 'Compliance empresarial: por que sua empresa precisa investir agora',
      excerpt: 'Programas de conformidade são cada vez mais essenciais para evitar riscos jurídicos e fortalecer a governança corporativa.',
      date: '05 Jan 2025',
      category: 'Empresarial',
      readTime: '6 min',
    },
    {
      title: 'Seus direitos como consumidor em compras online',
      excerpt: 'Conheça as garantias legais para compras pela internet: direito de arrependimento, trocas, devoluções e muito mais.',
      date: '20 Dez 2024',
      category: 'Consumidor',
      readTime: '3 min',
    },
    {
      title: 'Reforma Tributária: impactos para pequenas e médias empresas',
      excerpt: 'A reforma tributária trará mudanças significativas na carga fiscal. Veja como se preparar e aproveitar as oportunidades.',
      date: '10 Dez 2024',
      category: 'Tributário',
      readTime: '7 min',
    },
    {
      title: 'Contratos imobiliários: cuidados essenciais antes de assinar',
      excerpt: 'Dicas práticas para analisar cláusulas, evitar armadilhas e garantir segurança jurídica em negociações imobiliárias.',
      date: '01 Dez 2024',
      category: 'Cível',
      readTime: '4 min',
    },
  ];

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
              <article className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col group">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="font-body text-xs text-foreground/40">{post.readTime} de leitura</span>
                  </div>
                  <h3 className="font-display text-lg font-medium mb-3 group-hover:text-primary transition-colors leading-snug">
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
    </section>
  );
};

export default BlogNews;
