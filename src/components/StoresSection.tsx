
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const stores = [
  {
    id: 1,
    name: 'ТЦ "Центральный"',
    address: 'ул. Ленина, 15',
    hours: '09:00 - 21:00',
    phone: '+7 (999) 123-45-67',
    image: 'https://images.unsplash.com/photo-1522684462852-bfd83073d320?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Мясная лавка на Пушкина',
    address: 'ул. Пушкина, 42',
    hours: '08:00 - 20:00',
    phone: '+7 (999) 765-43-21',
    image: 'https://images.unsplash.com/photo-1568695247322-4e4066d1f3f7?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Фермерский рынок',
    address: 'ул. Садовая, 122',
    hours: '08:00 - 18:00',
    phone: '+7 (999) 999-88-77',
    image: 'https://images.unsplash.com/photo-1568123166765-d46fb5f208b5?q=80&w=500&auto=format&fit=crop'
  }
];

const StoresSection = () => {
  return (
    <section id="stores" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title mb-4">НАШИ МАГАЗИНЫ</h2>
        <p className="text-cream max-w-2xl mx-auto">
          Посетите наши магазины, чтобы лично выбрать лучшие куски мяса 
          и получить рекомендации от опытных мясников
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stores.map((store) => (
          <Card key={store.id} className="bg-background-light border border-gold/20 overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={store.image} 
                alt={store.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <CardContent className="p-5">
              <h3 className="text-xl text-gold font-medium mb-3">{store.name}</h3>
              
              <div className="space-y-3 text-cream/90">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span>{store.address}</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span>{store.hours}</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span>{store.phone}</span>
                </div>
              </div>
              
              <div className="mt-5 flex justify-between">
                <Button variant="outline" size="sm" className="border-gold/50 text-gold hover:bg-gold/10">
                  ПРОЛОЖИТЬ МАРШРУТ
                </Button>
                <Button variant="ghost" size="sm" className="text-cream hover:text-gold">
                  ПОДРОБНЕЕ
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button className="outlined-button">
          ПОКАЗАТЬ ВСЕ МАГАЗИНЫ
          <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default StoresSection;
