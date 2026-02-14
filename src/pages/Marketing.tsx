import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import PageContainer from '@/components/PageContainer';
import { PageTitle } from '@/components/Typography';
import ServiceCard from '@/components/ServiceCard';

const marketingServices = [
  {
    icon: 'Search',
    title: 'SEO-ПРОДВИЖЕНИЕ',
    desc: 'Выводим сайт в топ поисковых систем Google и Яндекс',
    items: ['Техническая оптимизация', 'Контент-стратегия', 'Линкбилдинг', 'Локальное SEO'],
  },
  {
    icon: 'Target',
    title: 'КОНТЕКСТНАЯ РЕКЛАМА',
    desc: 'Настраиваем и оптимизируем рекламные кампании',
    items: ['Яндекс.Директ', 'Google Ads', 'Ретаргетинг', 'A/B тестирование'],
  },
  {
    icon: 'Share2',
    title: 'SMM',
    desc: 'Продвижение в социальных сетях и управление репутацией',
    items: ['Контент-план', 'Таргетированная реклама', 'Influencer-маркетинг', 'Community management'],
  },
  {
    icon: 'BarChart3',
    title: 'АНАЛИТИКА',
    desc: 'Глубокий анализ данных для принятия бизнес-решений',
    items: ['Яндекс.Метрика', 'Google Analytics', 'Сквозная аналитика', 'Дашборды и отчёты'],
  },
];

const Marketing = () => {
  return (
    <AppLayout>
      <SEO
        title="Digital маркетинг и продвижение"
        description="Комплексный digital-маркетинг: SEO продвижение сайтов, контекстная реклама Яндекс.Директ и Google Ads, SMM, email-маркетинг. Увеличим трафик и продажи. Работаем с Лукойл, Деловой Петербург."
        path="/marketing"
        keywords="digital маркетинг, seo продвижение, продвижение сайтов, контекстная реклама, яндекс директ, google ads, smm продвижение, email маркетинг, веб аналитика"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Digital маркетинг',
          provider: {
            '@type': 'Organization',
            name: 'ALBE Digital Agency',
          },
          serviceType: 'Marketing Services',
          areaServed: ['RU', 'US', 'EU'],
        }}
      />
      <PageTransition>
        <PageContainer>
          <PageTitle>МАРКЕТИНГ</PageTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {marketingServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.desc}
                items={service.items}
              />
            ))}
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Marketing;