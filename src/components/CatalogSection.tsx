
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MeatItem {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
}

const meatItems: MeatItem[] = [
  {
    id: 'steak-1',
    title: 'Рибай стейк',
    category: 'СТЕЙКИ',
    price: 1590,
    image: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?q=80&w=800&auto=format&fit=crop',
    badge: 'Премиум'
  },
  {
    id: 'pork-1',
    title: 'Свиная вырезка',
    category: 'СВИНИНА',
    price: 790,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'lamb-1',
    title: 'Каре ягненка',
    category: 'БАРАНИНА',
    price: 1290,
    image: 'https://images.unsplash.com/photo-1608500218890-c4f9062f06ff?q=80&w=800&auto=format&fit=crop',
    badge: 'Новинка'
  },
  {
    id: 'minced-1',
    title: 'Фарш говяжий',
    category: 'ФАРШ',
    price: 590,
    image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?q=80&w=800&auto=format&fit=crop',
  },
];

const categories = [
  { id: 'all', name: 'Все категории' },
  { id: 'steaks', name: 'СТЕЙКИ' },
  { id: 'pork', name: 'СВИНИНА' },
  { id: 'lamb', name: 'БАРАНИНА' },
  { id: 'minced', name: 'ФАРШ' },
  { id: 'poultry', name: 'ПТИЦА' },
  { id: 'specialty', name: 'ДЕЛИКАТЕСЫ' },
];

const CatalogSection = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');

  return (
    <section id="catalog" className="section-container">
      <h2 className="section-title">КАТАЛОГ</h2>
      
      <div className="mb-10 overflow-x-auto pb-2 whitespace-nowrap">
        <div className="flex gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 text-sm rounded-sm font-medium transition-all ${
                activeCategory === category.id 
                  ? 'bg-gold text-background' 
                  : 'bg-background-light text-cream hover:bg-gold/20'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {meatItems.map((item) => (
          <MeatCard key={item.id} item={item} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button variant="outline" className="outlined-button">
          ПОКАЗАТЬ ВСЕ ТОВАРЫ
          <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

const MeatCard = ({ item }: { item: MeatItem }) => {
  return (
    <Card className="meat-card group">
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        <button className="w-8 h-8 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Icon name="Heart" className="h-4 w-4 text-gold" />
        </button>
        {item.badge && (
          <span className="quality-label">
            {item.badge}
          </span>
        )}
      </div>
      
      <div className="h-48 mb-4 overflow-hidden rounded">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <CardContent className="p-0">
        <div className="text-sm text-gold/80 mb-1">{item.category}</div>
        <h3 className="text-cream text-lg font-medium mb-2">{item.title}</h3>
        <div className="flex items-center justify-between mt-4">
          <div className="text-gold font-playfair text-lg">{item.price} ₽</div>
          <Button size="sm">
            В КОРЗИНУ
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CatalogSection;
