import deboraImg from '@/assets/debora-about-new.jpg';

const AboutFirm = () => {
  return (
    <section id="equipe" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="line-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-primary">
              Nossa <span className="text-accent-gold font-medium">Equipe</span>
            </h2>
            <p className="font-body text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
              Profissionais dedicados e em constante atualização, unidos pelo compromisso 
              de oferecer soluções jurídicas eficientes e humanas. Cada membro da equipe 
              contribui com sua expertise para garantir um atendimento de excelência 
              em todas as áreas de atuação do escritório.
            </p>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="group text-center">
              <div className="relative mb-4 overflow-hidden rounded-lg aspect-[3/4] shadow-sm">
                <img
                  src={deboraImg}
                  alt="Dra. Débora Albuquerque - Advogada"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-primary leading-tight">Dra. Débora Albuquerque</h3>
              <p className="font-body text-sm text-accent mt-1">Sócia Fundadora</p>
              <p className="font-body text-xs text-foreground/60 mt-1">OAB/PB · João Pessoa, PB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFirm;
