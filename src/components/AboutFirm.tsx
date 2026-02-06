import deboraImg from '@/assets/debora-about-new.jpg';

const AboutFirm = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="line-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-primary">
              Quem vai <span className="text-accent-gold font-medium">cuidar do seu caso</span>
            </h2>
            <p className="font-body text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
              Com experiência sólida em Direito do Trabalho, a Dra. Débora Albuquerque 
              construiu sua carreira ouvindo histórias reais de trabalhadores que tiveram 
              seus direitos violados. Cada caso é tratado com profundidade técnica e 
              sensibilidade humana, porque por trás de cada processo existe uma pessoa 
              que merece ser respeitada e ter sua dignidade restaurada.
            </p>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="group text-center">
              <div className="relative mb-4 overflow-hidden rounded-lg aspect-[3/4] shadow-sm">
                <img
                  src={deboraImg}
                  alt="Dra. Débora Albuquerque - Advogada Trabalhista"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-primary leading-tight">Dra. Débora Albuquerque</h3>
              <p className="font-body text-sm text-accent mt-1">Advogada Trabalhista</p>
              <p className="font-body text-xs text-foreground/60 mt-1">João Pessoa, PB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFirm;
