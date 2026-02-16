import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageHeader, SectionHeader } from '@/components/Typography';
import Card from '@/components/Card';

interface Product {
  title: string;
  desc: string;
  icon: string;
  number: string;
  image: string;
}

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

const ourProducts: Product[] = [
  {
    title: 'Vision AI',
    desc: 'Система компьютерного зрения на архитектуре Faster R-CNN для анализа видеопотока в реальном времени. Распознавание объектов, детекция аномалий, контроль качества.',
    icon: 'Eye',
    number: '01',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/2012d07d-4a69-4714-9a3e-df33dd2b882e.jpg',
  },
  {
    title: 'AlbeAI',
    desc: 'Аналитическая платформа с искусственным интеллектом для бизнеса. Анализ конкурентов, прогнозирование трендов, персонализированные рекомендации на основе Big Data.',
    icon: 'TrendingUp',
    number: '02',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/6042c9f2-ce10-4fcb-927f-ad0ad958a491.jpg',
  },
  {
    title: 'Brand Chef AI',
    desc: 'AI-система для ресторанного бизнеса. Контроль качества блюд через компьютерное зрение, автоматизация процессов, стандартизация подачи, аналитика эффективности.',
    icon: 'ChefHat',
    number: '03',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/4439d740-d5e9-41cd-a2dd-e26bb6e848e7.jpg',
  },
];

const brandChefFeatures: Feature[] = [
  {
    icon: 'Clock',
    title: 'Управление временем приготовления',
    desc: 'Отслеживание времени, затрачиваемого на приготовление блюд, помогает выявить узкие места и оптимизировать рабочий процесс.',
  },
  {
    icon: 'AlertCircle',
    title: 'Определение отклонений',
    desc: 'Автоматический анализ процесса приготовления позволяет быстро выявлять и исправлять ошибки.',
  },
  {
    icon: 'GraduationCap',
    title: 'Обучение и анализ KPI',
    desc: 'Отслеживание эффективности каждого повара помогает выявлять зоны для улучшения и нацеливать обучение.',
  },
  {
    icon: 'Package',
    title: 'Управление запасами',
    desc: 'Помощь в управлении запасами путем отслеживания использования ингредиентов в режиме реального времени.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Контроль санитарных норм',
    desc: 'Платформа помогает отслеживать соблюдение санитарных норм на кухне.',
  },
  {
    icon: 'Repeat',
    title: 'Стандартизация',
    desc: 'Использование стандартов подачи и автоматический анализ блюд в режиме реального времени помогает обеспечить одинаковую презентацию и качество блюд, вне зависимости от смены повара.',
  },
  {
    icon: 'Scale',
    title: 'Весовой контроль',
    desc: 'Использование умных весов для проверки соответствия массы порции заявленным стандартам. Анализ отклонений и уведомление персонала о необходимости корректировки.',
  },
  {
    icon: 'Thermometer',
    title: 'Тепловой мониторинг',
    desc: 'Датчики тепла обеспечивают контроль температуры готовых блюд. Гарантия того, что блюдо находится в нужных температурных пределах перед подачей.',
  },
  {
    icon: 'Camera',
    title: 'Сканирование готового блюда',
    desc: 'Использование камер для визуального анализа оформления и презентации блюда. Сравнение с эталонными изображениями для соблюдения стандартов подачи.',
  },
  {
    icon: 'BarChart',
    title: 'Анализ и отчетность',
    desc: 'Сбор данных по времени приготовления, температуре, массе и внешнему виду для усовершенствования процессов. Генерация отчетов о соответствии стандартам и производительности кухни.',
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card
      className="group relative overflow-hidden"
      background="rgba(11,15,31,0.6)"
      border="1px solid rgba(255,255,255,0.08)"
    >
      <div className="relative w-full aspect-[3/2] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />
      </div>
      
      <div className="relative p-5">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:rotate-12"
          style={{ background: 'rgba(167,139,250,0.15)' }}
        >
          <Icon name={product.icon} size={24} style={{ color: '#A78BFA' }} />
        </div>

        <h3 className="font-montserrat font-light text-xl md:text-2xl lg:text-3xl uppercase mb-3 tracking-tight" style={{ color: '#A78BFA' }}>
          {product.title}
        </h3>

        <p className="font-montserrat text-zinc-300 text-sm md:text-base lg:text-lg leading-relaxed">
          {product.desc}
        </p>
      </div>
    </Card>
  );
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <Card
      className="h-full flex flex-col"
      background="rgba(11,15,31,0.6)"
      border="1px solid rgba(255,255,255,0.08)"
    >
      <div className="flex flex-col items-start gap-4 mb-3">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(167,139,250,0.15)' }}>
          <Icon name={feature.icon} size={24} style={{ color: '#A78BFA' }} />
        </div>
        <h4 className="font-montserrat font-light text-base md:text-lg uppercase" style={{ color: '#A78BFA' }}>
          {feature.title}
        </h4>
      </div>
      <p className="font-montserrat text-base md:text-lg text-white leading-relaxed">
        {feature.desc}
      </p>
    </Card>
  );
};

const AI = () => {
  return (
    <AppLayout>
      <SEO
        title="AI решения и внедрение искусственного интеллекта"
        description="Разработка и внедрение AI-решений: машинное обучение, компьютерное зрение, NLP, чат-боты. Vision AI, AlbeAI, Brand Chef AI. Автоматизация бизнес-процессов через искусственный интеллект."
        path="/ai"
        keywords="ai решения, искусственный интеллект, машинное обучение, компьютерное зрение, nlp, чат боты, автоматизация процессов, ai разработка, внедрение ai"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI решения и машинное обучение',
          provider: {
            '@type': 'Organization',
            name: 'ALBE Digital Agency',
          },
          serviceType: 'AI Development',
          areaServed: ['RU', 'US', 'EU'],
        }}
      />
      <PageTransition>
        <PageContainer>
          <PageHeader 
            title="ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ" 
            description="Внедряем AI-технологии в реальный бизнес. Машинное обучение, компьютерное зрение, NLP — автоматизируем то, что раньше казалось невозможным." 
            color="#A78BFA"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {ourProducts.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>

          <SectionHeader 
            title="ВОЗМОЖНОСТИ AI В БИЗНЕСЕ" 
            description="Примеры применения искусственного интеллекта — от контроля качества до предиктивной аналитики." 
            color="#A78BFA"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            {brandChefFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default AI;