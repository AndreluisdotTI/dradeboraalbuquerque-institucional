import { Instagram, Linkedin, Facebook } from 'lucide-react';
import logo from '@/assets/logo-debora.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { label: 'Direito Trabalhista', href: '#areas' },
      { label: 'Direito Cível', href: '#areas' },
      { label: 'Direito Empresarial', href: '#areas' },
      { label: 'Direito de Família', href: '#areas' },
    ],
    institutional: [
      { label: 'O Escritório', href: '#sobre' },
      { label: 'Diferenciais', href: '#diferenciais' },
      { label: 'Equipe', href: '#equipe' },
      { label: 'Contato', href: '#contato' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="section-navy pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <img src={logo} alt="Débora Albuquerque Advocacia" className="h-10 mb-6" />
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Advocacia multidisciplinar com excelência técnica e atendimento humanizado. 
              Soluções jurídicas completas para pessoas e empresas.
            </p>
            <p className="font-body text-sm text-white/50 mt-4">
              Rua Presidente Nilo Peçanha, nº 791<br />
              Sala 202, João Pessoa/PB
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium mb-4 text-white">Áreas de Atuação</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium mb-4 text-white">Institucional</h4>
            <ul className="space-y-3">
              {links.institutional.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium mb-4 text-white">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="font-body text-sm text-white/60">
                <a href="tel:5583993688733" className="hover:text-gold transition-colors">
                  +55 (83) 99368-8733
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-white/50">
              © {currentYear} Débora Albuquerque Advocacia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
