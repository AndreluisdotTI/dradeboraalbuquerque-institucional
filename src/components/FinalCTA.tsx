import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=5583993688733&text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.%20Aguardo%20retorno.';

  return (
    <section className="py-24 relative overflow-hidden section-navy">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary/95" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="line-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-white">
            Sua demanda jurídica{' '}
            <span className="text-gold font-medium">merece atenção especializada</span>
          </h2>
          <p className="font-body text-xl text-white/70 mb-4">
            Agende uma consulta e conheça as melhores soluções para o seu caso.
          </p>
          <p className="font-body text-white/60 mb-10">
            Atendimento presencial e online · Todas as áreas do direito
            <br />
            Pessoas físicas e jurídicas.
          </p>

          <Button 
            variant="gold" 
            size="lg" 
            className="group text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-7 w-full sm:w-auto"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <MessageCircle className="h-5 sm:h-6 w-5 sm:w-6 flex-shrink-0" />
              <span className="truncate">Fale com Nossa Equipe</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 flex-shrink-0 hidden sm:block" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
