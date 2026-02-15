import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import PageContainer from '@/components/PageContainer';
import { PageHeader, SectionHeader } from '@/components/Typography';
import Icon from '@/components/ui/icon';
import { useCardHover } from '@/hooks/useCardHover';

interface MarketingService {
  icon: string;
  title: string;
  desc: string;
  number: string;
  image: string;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

const marketingServices: MarketingService[] = [
  {
    icon: 'Search',
    title: 'SEO-ПРОДВИЖЕНИЕ',
    desc: 'Выводим сайт в топ поисковых систем. Техническая оптимизация, контент-стратегия, линкбилдинг — комплексный подход к органическому трафику.',
    number: '01',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/105dd92c-b02b-43b0-8142-9212f627b131.jpg',
  },
  {
    icon: 'Target',
    title: 'КОНТЕКСТНАЯ РЕКЛАМА',
    desc: 'Настраиваем высокоэффективные рекламные кампании в Яндекс.Директ и Google Ads. Платите только за результат, получаете клиентов.',
    number: '02',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/dd9c1482-d51c-412a-87b2-159016f0e22f.jpg',
  },
  {
    icon: 'Share2',
    title: 'SMM И ТАРГЕТ',
    desc: 'Продвижение в социальных сетях и таргетированная реклама. Контент-план, реклама ВКонтакте, Instagram, Telegram — увеличиваем охваты.',
    number: '03',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/29967fa8-c120-4c51-892c-08acb90ec1cd.jpg',
  },
  {
    icon: 'BarChart3',
    title: 'ВЕБ-АНАЛИТИКА',
    desc: 'Глубокий анализ данных для принятия решений. Яндекс.Метрика, Google Analytics, сквозная аналитика, дашборды — контролируем каждый рубль.',
    number: '04',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/6dfd2bcb-310a-457f-80a1-5ae3aac4ee38.jpg',
  },
];

const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'АУДИТ',
    desc: 'Анализируем текущую ситуацию, изучаем целевую аудиторию, оцениваем конкурентов. Выявляем точки роста и формируем гипотезы.',
    icon: 'FileSearch',
  },
  {
    step: '02',
    title: 'СТРАТЕГИЯ',
    desc: 'Разрабатываем маркетинговую стратегию: выбираем каналы, планируем бюджет, создаём воронку продаж и контент-план.',
    icon: 'Target',
  },
  {
    step: '03',
    title: 'ЗАПУСК',
    desc: 'Настраиваем рекламные кампании, запускаем контент, настраиваем аналитику. Первые результаты через 2 недели.',
    icon: 'Zap',
  },
  {
    step: '04',
    title: 'ОПТИМИЗАЦИЯ',
    desc: 'Анализируем данные, тестируем гипотезы, улучшаем конверсию. Постоянно снижаем стоимость лида и увеличиваем ROI.',
    icon: 'TrendingUp',
  },
];

const stats = [
  { value: '300%', label: 'СРЕДНИЙ РОСТ ТРАФИКА', isNumber: true },
  { value: '85%', label: 'СНИЖЕНИЕ СТОИМОСТИ ЛИДА', isNumber: true },
  { value: '150+', label: 'УСПЕШНЫХ КАМПАНИЙ', isNumber: true },
  { value: '24/7', label: 'МОНИТОРИНГ РЕКЛАМЫ', isNumber: false },
];

const ProcessCard = ({ step }: { step: ProcessStep }) => {
  const { hoverProps, getHoverStyle } = useCardHover();

  return (
    <div
      {...hoverProps}
      className="hover-card group relative rounded-3xl p-6 md:hover:scale-[1.02]"
      style={getHoverStyle({
        background: 'rgba(11,15,31,0.6)',
        border: '1px solid rgba(255,255,255,0.08)',
      })}
    >
      <div className="flex items-start gap-6 mb-4">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
          style={{ background: 'rgba(214,107,42,0.15)' }}
        >
          <Icon name={step.icon} size={24} style={{ color: '#d66b2a' }} />
        </div>
        
        <div className="flex-1">
          <div className="font-zen text-3xl font-bold mb-2 opacity-30">
            {step.step}
          </div>
          <h3 className="font-montserrat font-light text-xl md:text-2xl uppercase tracking-tight" style={{ color: '#d66b2a' }}>
            {step.title}
          </h3>
        </div>
      </div>
      
      <p className="font-montserrat text-zinc-300 text-sm md:text-base lg:text-lg leading-relaxed">
        {step.desc}
      </p>
    </div>
  );
};

const ServiceCard = ({ service }: { service: MarketingService }) => {
  const { hoverProps, getHoverStyle } = useCardHover();

  return (
    <div
      {...hoverProps}
      className="hover-card group relative rounded-3xl overflow-hidden md:hover:scale-[1.02]"
      style={getHoverStyle({
        background: 'rgba(11,15,31,0.6)',
        border: '1px solid rgba(255,255,255,0.08)',
      })}
    >
      <div className="relative w-full aspect-[3/2] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />
      </div>
      
      <div className="relative p-5">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:rotate-12"
          style={{ background: 'rgba(214,107,42,0.15)' }}
        >
          <Icon name={service.icon} size={24} style={{ color: '#d66b2a' }} />
        </div>

        <h3 className="font-montserrat font-light text-xl md:text-2xl lg:text-3xl uppercase mb-3 tracking-tight" style={{ color: '#d66b2a' }}>
          {service.title}
        </h3>

        <p className="font-montserrat text-zinc-300 text-sm md:text-base lg:text-lg leading-relaxed">
          {service.desc}
        </p>
      </div>
    </div>
  );
};

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
          <PageHeader 
            title="МАРКЕТИНГ" 
            description="Привлекаем клиентов, которые покупают. Работаем на результат — каждый рубль рекламного бюджета приносит прибыль." 
            color="#d66b2a"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {marketingServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          <SectionHeader 
            title="ПРОЦЕСС РАБОТЫ" 
            description="От аудита до масштабирования — проверенная методология digital-маркетинга." 
            color="#d66b2a"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {processSteps.map((step) => (
              <ProcessCard key={step.step} step={step} />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl"
                style={{
                  background: 'rgba(11,15,31,0.6)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className={`${stat.isNumber ? 'font-zen' : 'font-montserrat'} font-bold text-3xl md:text-4xl lg:text-4xl mb-2`} style={{ color: '#d66b2a' }}>
                  {stat.value}
                </div>
                <div className="font-montserrat text-xs md:text-sm uppercase tracking-wide text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Marketing;