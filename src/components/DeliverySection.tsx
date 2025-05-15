
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const DeliverySection = () => {
  return (
    <section id="delivery" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1592686092916-672fa9e86866?q=80&w=1287&auto=format&fit=crop"
            alt="Доставка мяса" 
            className="w-full h-[500px] object-cover rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-4 -right-4 p-6 bg-background border border-gold rounded-lg shadow-lg max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gold/20">
                <Icon name="Truck" className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h4 className="text-xl text-gold font-playfair">Быстрая доставка</h4>
              </div>
            </div>
            <p className="text-cream/90 text-sm">
              Мы доставляем ваш заказ в течение 2 часов по городу, сохраняя все качества свежего мяса
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="section-title mb-6">
            ДОСТАВКА<br />МЯСНОЙ ПРОДУКЦИИ
          </h2>
          
          <p className="text-cream mb-8 leading-relaxed">
            Мы доставляем мясо ключом споченни ретивно в точки всего города, обеспечивая высочайшее качество 
            и сохранность продукта благодаря специальным термоконтейнерам и быстрой логистике.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-background-light p-5 rounded-lg border border-gold/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gold/20">
                  <Icon name="Clock3" className="h-5 w-5 text-gold" />
                </div>
                <h4 className="text-lg text-gold font-medium">Экспресс 2 часа</h4>
              </div>
              <p className="text-cream/80 text-sm">
                Доставка в течение 2 часов с момента заказа в пределах города
              </p>
            </div>
            
            <div className="bg-background-light p-5 rounded-lg border border-gold/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gold/20">
                  <Icon name="CalendarDays" className="h-5 w-5 text-gold" />
                </div>
                <h4 className="text-lg text-gold font-medium">Плановая доставка</h4>
              </div>
              <p className="text-cream/80 text-sm">
                Выберите удобное время для регулярных поставок свежих продуктов
              </p>
            </div>
            
            <div className="bg-background-light p-5 rounded-lg border border-gold/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gold/20">
                  <Icon name="Package" className="h-5 w-5 text-gold" />
                </div>
                <h4 className="text-lg text-gold font-medium">Особые условия</h4>
              </div>
              <p className="text-cream/80 text-sm">
                Индивидуальный подход к доставке больших заказов и для компаний
              </p>
            </div>
            
            <div className="bg-background-light p-5 rounded-lg border border-gold/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gold/20">
                  <Icon name="Thermometer" className="h-5 w-5 text-gold" />
                </div>
                <h4 className="text-lg text-gold font-medium">Термоконтроль</h4>
              </div>
              <p className="text-cream/80 text-sm">
                Специальная упаковка для поддержания оптимальной температуры
              </p>
            </div>
          </div>
          
          <Button className="gold-button">
            ЗАКАЗАТЬ ДОСТАВКУ
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
