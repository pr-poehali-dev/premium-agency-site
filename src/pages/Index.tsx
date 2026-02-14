import Hero from '@/components/Hero';
import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <AppLayout>
      <SEO
        title="Цифровое агентство полного цикла"
        description="ALBE Digital Agency — разработка сайтов, мобильных приложений, AI-решений, дизайн и маркетинг. Создаем не просто сайты — создаем бизнес."
        path="/"
      />
      <PageTransition>
        <Hero />
      </PageTransition>
    </AppLayout>
  );
};

export default Index;
