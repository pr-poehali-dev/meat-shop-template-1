
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import AboutSection from '@/components/AboutSection';
import DeliverySection from '@/components/DeliverySection';
import StoresSection from '@/components/StoresSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-cream">
      <Header />
      <HeroSection />
      <CatalogSection />
      <AboutSection />
      <DeliverySection />
      <StoresSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
