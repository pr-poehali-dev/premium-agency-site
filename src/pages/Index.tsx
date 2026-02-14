import Hero from '@/components/Hero';
import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <AppLayout>
      <PageTransition>
        <Hero />
      </PageTransition>
    </AppLayout>
  );
};

export default Index;