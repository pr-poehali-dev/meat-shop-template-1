
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <div className="text-gold font-playfair font-bold text-2xl tracking-wider">
            МЯСНАЯ ЛАВКА
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-cream hover:text-gold transition-colors">
            Главная
          </a>
          <a href="#catalog" className="text-cream hover:text-gold transition-colors">
            Каталог
          </a>
          <a href="#about" className="text-cream hover:text-gold transition-colors">
            О нас
          </a>
          <a href="#delivery" className="text-cream hover:text-gold transition-colors">
            Доставка
          </a>
          <a href="#stores" className="text-cream hover:text-gold transition-colors">
            Магазины
          </a>
          <a href="#blog" className="text-cream hover:text-gold transition-colors">
            Блог
          </a>
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-background">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Заказать
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-gold/30 animate-fadeIn">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
            <a href="#" className="text-cream hover:text-gold py-2 border-b border-gold/20 transition-colors">
              Главная
            </a>
            <a href="#catalog" className="text-cream hover:text-gold py-2 border-b border-gold/20 transition-colors">
              Каталог
            </a>
            <a href="#about" className="text-cream hover:text-gold py-2 border-b border-gold/20 transition-colors">
              О нас
            </a>
            <a href="#delivery" className="text-cream hover:text-gold py-2 border-b border-gold/20 transition-colors">
              Доставка
            </a>
            <a href="#stores" className="text-cream hover:text-gold py-2 border-b border-gold/20 transition-colors">
              Магазины
            </a>
            <a href="#blog" className="text-cream hover:text-gold py-2 border-b border-gold/20 transition-colors">
              Блог
            </a>
            <Button className="w-full mt-2">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Заказать
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
