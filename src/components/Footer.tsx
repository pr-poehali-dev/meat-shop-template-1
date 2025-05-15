
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-background-light border-t border-gold/20">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-gold font-playfair font-bold text-3xl mb-4">
              МЯСНАЯ ЛАВКА
            </div>
            <p className="text-cream/80 mb-6">
              Премиальное мясо с соблюдением вековых традиций качества для истинных ценителей вкуса
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Icon name="Facebook" className="h-5 w-5 text-gold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Icon name="Instagram" className="h-5 w-5 text-gold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Icon name="Youtube" className="h-5 w-5 text-gold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Icon name="MessageCircle" className="h-5 w-5 text-gold" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair text-gold text-xl mb-5">Меню</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-cream hover:text-gold transition-colors">Главная</a>
              </li>
              <li>
                <a href="#catalog" className="text-cream hover:text-gold transition-colors">Каталог</a>
              </li>
              <li>
                <a href="#about" className="text-cream hover:text-gold transition-colors">О нас</a>
              </li>
              <li>
                <a href="#delivery" className="text-cream hover:text-gold transition-colors">Доставка</a>
              </li>
              <li>
                <a href="#stores" className="text-cream hover:text-gold transition-colors">Магазины</a>
              </li>
              <li>
                <a href="#blog" className="text-cream hover:text-gold transition-colors">Блог</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-gold text-xl mb-5">Категории</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-cream hover:text-gold transition-colors">Стейки</a>
              </li>
              <li>
                <a href="#" className="text-cream hover:text-gold transition-colors">Свинина</a>
              </li>
              <li>
                <a href="#" className="text-cream hover:text-gold transition-colors">Баранина</a>
              </li>
              <li>
                <a href="#" className="text-cream hover:text-gold transition-colors">Фарш</a>
              </li>
              <li>
                <a href="#" className="text-cream hover:text-gold transition-colors">Птица</a>
              </li>
              <li>
                <a href="#" className="text-cream hover:text-gold transition-colors">Деликатесы</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-gold text-xl mb-5">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 text-gold mr-3 mt-0.5 shrink-0" />
                <span className="text-cream">
                  ул. Ленина, 15, ТЦ "Центральный"<br />
                  ул. Пушкина, 42
                </span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 text-gold mr-3 shrink-0" />
                <span className="text-cream">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 text-gold mr-3 shrink-0" />
                <span className="text-cream">info@myasnaya-lavka.ru</span>
              </li>
              <li className="flex items-center">
                <Icon name="Clock" className="h-5 w-5 text-gold mr-3 shrink-0" />
                <span className="text-cream">09:00 - 21:00 (ежедневно)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/60 text-sm">
            © 2025 Мясная лавка. Все права защищены.
          </p>
          
          <div className="mt-4 md:mt-0 space-x-6 text-sm">
            <a href="#" className="text-cream/60 hover:text-gold transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-cream/60 hover:text-gold transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
