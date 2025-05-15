
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://cdn.poehali.dev/files/274092b7-7aba-4597-b58c-e10d4c95b17f.png')" }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-gold leading-tight mb-6 animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
            СВЕЖЕЕ МЯСО<br />ПО СТАРЫМ<br />РЕЦЕПТАМ
          </h1>
          
          <p className="text-cream text-lg md:text-xl mb-10 max-w-2xl opacity-0 animate-slideUp" style={{ animationDelay: '0.6s' }}>
            Премиальное мясо отборного качества, выдержанное по старинным традициям и доступное для истинных ценителей вкуса
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-slideUp" style={{ animationDelay: '0.9s' }}>
            <Button className="gold-button" size="lg">
              ПЕРЕЙТИ В КАТАЛОГ
            </Button>
            <Button variant="outline" className="outlined-button" size="lg">
              УЗНАТЬ БОЛЬШЕ
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-0 animate-slideUp" style={{ animationDelay: '1.2s' }}>
            <div className="text-center">
              <div className="text-gold font-playfair text-5xl font-bold">25+</div>
              <div className="text-cream text-sm mt-2">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-gold font-playfair text-5xl font-bold">100%</div>
              <div className="text-cream text-sm mt-2">натуральный продукт</div>
            </div>
            <div className="text-center">
              <div className="text-gold font-playfair text-5xl font-bold">15</div>
              <div className="text-cream text-sm mt-2">точек продаж</div>
            </div>
            <div className="text-center">
              <div className="text-gold font-playfair text-5xl font-bold">5k+</div>
              <div className="text-cream text-sm mt-2">довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulseLight">
        <div className="flex flex-col items-center">
          <span className="text-cream text-sm mb-2">Прокрутите вниз</span>
          <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
            <div className="w-1 h-2 bg-cream rounded-full mt-1 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
