import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import PageContainer from '@/components/PageContainer';
import { PageTitle } from '@/components/Typography';
import Icon from '@/components/ui/icon';
import { useCardHover } from '@/hooks/useCardHover';

interface DesignService {
  icon: string;
  title: string;
  desc: string;
  number: string;
}

const designServices: DesignService[] = [
  {
    icon: 'Layers',
    title: 'UI/UX ДИЗАЙН',
    desc: 'Проектируем интерфейсы, которые увеличивают конверсию и удерживают пользователей. Исследуем поведение, создаем прототипы, тестируем гипотезы.',
    number: '01',
  },
  {
    icon: 'Monitor',
    title: 'ВЕБ-ДИЗАЙН',
    desc: 'Создаем визуально привлекательные и функциональные веб-сайты. От лендингов до корпоративных порталов и интернет-магазинов.',
    number: '02',
  },
  {
    icon: 'Smartphone',
    title: 'МОБИЛЬНЫЙ ДИЗАЙН',
    desc: 'Нативный опыт для iOS и Android с фокусом на юзабилити. Human Interface Guidelines и Material Design в каждой детали.',
    number: '03',
  },
  {
    icon: 'Sparkles',
    title: 'БРЕНДИНГ',
    desc: 'Формируем уникальный визуальный язык вашего бренда. От логотипа до полного гайдлайна — создаем узнаваемый образ.',
    number: '04',
  },
  {
    icon: 'Frame',
    title: 'ДИЗАЙН-СИСТЕМЫ',
    desc: 'Разрабатываем масштабируемые дизайн-системы для крупных продуктов. Компоненты, паттерны и гайдлайны для единого UX.',
    number: '05',
  },
  {
    icon: 'Zap',
    title: 'MOTION ДИЗАЙН',
    desc: 'Создаем анимации и микроинтеракции, которые оживляют интерфейсы. Плавные переходы, динамичные эффекты, премиальный опыт.',
    number: '06',
  },
];

const stats = [
  { value: '120+', label: 'ПРОЕКТОВ' },
  { value: '98%', label: 'ДОВОЛЬНЫХ КЛИЕНТОВ' },
  { value: '5+', label: 'ЛЕТ НА РЫНКЕ' },
  { value: '24/7', label: 'ПОДДЕРЖКА' },
];

const ServiceCard = ({ service }: { service: DesignService }) => {
  const { hoverProps, getHoverStyle } = useCardHover();

  return (
    <div
      {...hoverProps}
      className="hover-card group relative rounded-3xl p-8 md:hover:scale-[1.02] overflow-hidden"
      style={getHoverStyle({
        background: 'rgba(11,15,31,0.7)',
        border: '1px solid rgba(255,255,255,0.08)',
      })}
    >
      <div className="absolute top-6 right-8 font-zen text-7xl font-bold opacity-5 select-none">
        {service.number}
      </div>
      
      <div className="relative z-10">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12"
          style={{ background: 'rgba(45,157,143,0.1)' }}
        >
          <Icon name={service.icon} size={32} style={{ color: '#2d9d8f' }} />
        </div>

        <h3 className="font-montserrat font-semibold text-2xl uppercase mb-4 tracking-tight" style={{ color: '#2d9d8f' }}>
          {service.title}
        </h3>

        <p className="font-montserrat text-zinc-300 text-base leading-relaxed">
          {service.desc}
        </p>
      </div>
    </div>
  );
};

const Design = () => {
  return (
    <AppLayout>
      <SEO
        title="Дизайн сайтов и UI/UX"
        description="Профессиональный дизайн сайтов, UI/UX проектирование, брендинг и фирменный стиль. Создаем интерфейсы, увеличивающие конверсию. Работаем в Figma. Опыт с Forbes, Mercedes-Benz, МегаФон."
        path="/design"
        keywords="дизайн сайтов, ui ux дизайн, веб дизайн, дизайн интерфейсов, брендинг, фирменный стиль, логотип, мобильный дизайн, прототипирование, figma"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Дизайн сайтов и UI/UX',
          provider: {
            '@type': 'Organization',
            name: 'ALBE Digital Agency',
          },
          serviceType: 'Design Services',
          areaServed: ['RU', 'US', 'EU'],
        }}
      />
      <PageTransition>
        <PageContainer>
          <div className="mb-16">
            <PageTitle>ДИЗАЙН</PageTitle>
            <p className="text-zinc-400 font-montserrat text-xl max-w-3xl mt-6 leading-relaxed">
              Создаем дизайн, который работает на бизнес. Каждый пиксель продуман, каждая анимация имеет цель — увеличить конверсию и сделать пользователей счастливыми.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {designServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl"
                style={{
                  background: 'rgba(11,15,31,0.5)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="font-zen text-4xl md:text-5xl font-bold mb-2" style={{ color: '#2d9d8f' }}>
                  {stat.value}
                </div>
                <div className="font-montserrat text-xs uppercase tracking-widest text-zinc-500">
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

export default Design;