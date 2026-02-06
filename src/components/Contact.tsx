import { MapPin, Phone, Mail, Clock, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100),
  phone: z.string().trim().max(20).optional().default(""),
  email: z.string().trim().email("E-mail inválido").max(255),
  area: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', area: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Erro", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: parsed.data,
      });
      if (error) throw error;
      toast({ title: "Enviado!", description: "Sua solicitação foi enviada com sucesso." });
      setForm({ name: '', phone: '', email: '', area: '', message: '' });
    } catch (err: any) {
      toast({ title: "Erro", description: "Não foi possível enviar. Tente novamente.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Presidente Nilo Peçanha, nº 791\nSala 202, João Pessoa/PB',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (83) 99368-8733',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@deboraalbuquerque.adv.br',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Sexta: 9h às 18h\nAtendimento agendado',
    },
  ];

  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="line-gold mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Entre em <span className="text-accent-gold font-medium">Contato</span>
            </h2>
            <p className="font-body text-foreground/70 leading-relaxed mb-12">
              Agende uma consulta ou tire suas dúvidas. Estamos prontos para 
              orientar você com clareza e responsabilidade.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-foreground/60 whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-lg shadow-sm">
            <h3 className="font-display text-2xl font-medium mb-6">
              Agende uma Consulta
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm text-foreground/70 mb-2 block">
                    Nome Completo
                  </label>
                  <Input
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-foreground/70 mb-2 block">
                    Telefone
                  </label>
                  <Input
                    placeholder="(00) 00000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-sm text-foreground/70 mb-2 block">
                  E-mail
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="font-body text-sm text-foreground/70 mb-2 block">
                  Área de Interesse
                </label>
                <Input
                  placeholder="Trabalhista, Cível, Empresarial, Família..."
                  value={form.area}
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label className="font-body text-sm text-foreground/70 mb-2 block">
                  Descreva sua Demanda
                </label>
                <Textarea
                  placeholder="Conte-nos brevemente sobre sua necessidade jurídica..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  required
                />
              </div>
              <Button variant="gold" className="w-full group" disabled={loading}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : (
                  <>
                    <span>Enviar Solicitação</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
