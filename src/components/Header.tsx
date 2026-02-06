import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-debora.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappLink = 'https://api.whatsapp.com/send?phone=5583993688733&text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.%20Aguardo%20retorno.';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'O Escritório', href: '#sobre' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img src={logo} alt="Débora Albuquerque Advocacia" className="h-8 md:h-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-body text-sm tracking-wider transition-colors duration-200 ${
                isScrolled ? 'text-white/80 hover:text-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Button variant="gold" size="sm" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Fale Conosco
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md mt-2 mx-4 p-6 rounded-lg animate-fade-in shadow-lg border border-border">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-body text-sm tracking-wider text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="gold" size="sm" className="mt-4" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
