import Hero from '@/components/Hero';
import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <AppLayout>
      <SEO
        title="Цифровое агентство полного цикла"
        description="ALBE Digital Agency — разработка сайтов, мобильных приложений, CRM/ERP систем, AI-решений, дизайн, брендинг и маркетинг. Работаем в России, Европе и США. 7 лет опыта, 30+ проектов в год."
        path="/"
        keywords="разработка сайтов, веб-разработка, создание сайтов, разработка мобильных приложений, AI решения, дизайн сайтов, брендинг, маркетинг, CRM разработка, ERP система, digital агентство, диджитал агентство, Сочи"
      />
      <PageTransition>
        <Hero />
      </PageTransition>
    </AppLayout>
  );
};

export default Index;