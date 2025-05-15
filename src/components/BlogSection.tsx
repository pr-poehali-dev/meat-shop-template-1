
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const articles = [
  {
    id: 1,
    title: 'Секреты правильной прожарки стейка в домашних условиях',
    excerpt: 'Узнайте профессиональные приемы шеф-поваров для идеального стейка.',
    date: '10 мая 2025',
    category: 'Рецепты',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Сухое и влажное вызревание мяса: в чем разница?',
    excerpt: 'Разбираемся в тонкостях обработки мяса для максимального вкуса.',
    date: '24 апреля 2025',
    category: 'Советы',
    image: 'https://images.unsplash.com/photo-1635321593217-40050ad13c74?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Выбираем лучшее мясо: на что обращать внимание',
    excerpt: 'Гид по выбору качественного мяса от профессиональных мясников.',
    date: '15 апреля 2025',
    category: 'Выбор мяса',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=500&auto=format&fit=crop'
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-container">
      <div className="flex flex-wrap justify-between items-center mb-10">
        <h2 className="section-title mb-0">НАШ БЛОГ</h2>
        <Button variant="ghost" className="text-gold border-b border-gold/50 rounded-none hover:bg-transparent hover:border-gold">
          ПРОСМОТРЕТЬ ВСЕ СТАТЬИ
          <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Card key={article.id} className="bg-background-light border border-gold/20 overflow-hidden group">
            <div className="h-52 overflow-hidden relative">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="quality-label">{article.category}</span>
              </div>
            </div>
            <CardContent className="p-5">
              <div className="text-cream/60 text-sm mb-2">{article.date}</div>
              <h3 className="text-xl text-gold font-medium mb-3 line-clamp-2">{article.title}</h3>
              <p className="text-cream/80 mb-5 line-clamp-3">{article.excerpt}</p>
              
              <Button variant="ghost" className="p-0 text-gold hover:text-gold-light hover:bg-transparent">
                ЧИТАТЬ ПОЛНОСТЬЮ
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 bg-background-light border border-gold/20 rounded-lg p-8 text-center">
        <h3 className="text-2xl text-gold font-playfair font-medium mb-4">Подпишитесь на наши новости и рецепты</h3>
        <p className="text-cream/80 max-w-xl mx-auto mb-6">
          Получайте свежие рецепты, советы по приготовлению и информацию о специальных предложениях
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Ваш email" 
            className="flex-1 bg-background border border-gold/30 rounded-sm px-4 py-2 text-cream focus:outline-none focus:border-gold"
          />
          <Button className="gold-button whitespace-nowrap">
            ПОДПИСАТЬСЯ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
