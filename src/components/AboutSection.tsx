
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="section-title mb-6">О НАС</h2>
          
          <p className="text-cream mb-6 leading-relaxed">
            Мы следуем традициям, по проверенным веками рецептам и правилам создаем мясо трогательной нежности, 
            тающей текстуры, праведнейшей ароматности и готовности к приготовлению с высоким результатом.
          </p>
          
          <p className="text-cream mb-8 leading-relaxed">
            Принципиальная ставка на безусловность в контроле качества отодвигает на высокие стандарты все остальное, 
            позволяя нам предлагать продукцию, соответствующую самым строгим требованиям гурманов.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start">
              <div className="mr-4 mt-1 p-2 rounded-full bg-gold/10">
                <Icon name="CheckCircle" className="text-gold h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-cream mb-1">Собственное производство</h4>
                <p className="text-sm text-cream/80">Полный контроль качества на всех этапах</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-1 p-2 rounded-full bg-gold/10">
                <Icon name="CheckCircle" className="text-gold h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-cream mb-1">Натуральный продукт</h4>
                <p className="text-sm text-cream/80">Без добавок и консервантов</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-1 p-2 rounded-full bg-gold/10">
                <Icon name="CheckCircle" className="text-gold h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-cream mb-1">Ручной отбор</h4>
                <p className="text-sm text-cream/80">Каждый кусок проходит строгую инспекцию</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-1 p-2 rounded-full bg-gold/10">
                <Icon name="CheckCircle" className="text-gold h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-cream mb-1">Выдержка по традициям</h4>
                <p className="text-sm text-cream/80">Старинные рецепты с современными технологиями</p>
              </div>
            </div>
          </div>
          
          <Button className="gold-button">
            НАША ИСТОРИЯ
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="order-1 lg:order-2 relative">
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1608500218890-c4f9062f06ff?q=80&w=1200" 
              alt="Премиальное мясо" 
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-lg border-4 border-gold bg-meat/20 -z-10"></div>
          <div className="absolute -top-8 -right-8 w-64 h-64 rounded-lg border-4 border-gold bg-meat/20 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
