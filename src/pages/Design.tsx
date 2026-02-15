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
  image: string;
}

const designServices: DesignService[] = [
  {
    icon: 'Layers',
    title: 'UI/UX ДИЗАЙН',
    desc: 'Проектируем интерфейсы, которые увеличивают конверсию и удерживают пользователей. Исследуем поведение, создаем прототипы, тестируем гипотезы.',
    number: '01',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/da2de26b-6ee8-4ae5-87e6-eece0f27f2b1.jpg',
  },
  {
    icon: 'Monitor',
    title: 'ВЕБ-ДИЗАЙН',
    desc: 'Создаем визуально привлекательные и функциональные веб-сайты. От лендингов до корпоративных порталов и интернет-магазинов.',
    number: '02',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/689ef99b-3d28-4fe3-b199-b09c5e3629e5.jpg',
  },
  {
    icon: 'Smartphone',
    title: 'МОБИЛЬНЫЙ ДИЗАЙН',
    desc: 'Нативный опыт для iOS и Android с фокусом на юзабилити. Human Interface Guidelines и Material Design в каждой детали.',
    number: '03',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/01d58f10-1386-4e0f-94f8-51aa96612428.jpg',
  },
  {
    icon: 'Sparkles',
    title: 'БРЕНДИНГ',
    desc: 'Формируем уникальный визуальный язык вашего бренда. От логотипа до полного гайдлайна — создаем узнаваемый образ.',
    number: '04',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/fb0889d4-ec0c-4162-bcee-cb9a8946dd4e.jpg',
  },
  {
    icon: 'Frame',
    title: 'ДИЗАЙН-СИСТЕМЫ',
    desc: 'Разрабатываем масштабируемые дизайн-системы для крупных продуктов. Компоненты, паттерны и гайдлайны для единого UX.',
    number: '05',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/da2de26b-6ee8-4ae5-87e6-eece0f27f2b1.jpg',
  },
  {
    icon: 'Zap',
    title: 'MOTION ДИЗАЙН',
    desc: 'Создаем анимации и микроинтеракции, которые оживляют интерфейсы. Плавные переходы, динамичные эффекты, премиальный опыт.',
    number: '06',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/689ef99b-3d28-4fe3-b199-b09c5e3629e5.jpg',
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
      className="hover-card group relative rounded-3xl overflow-hidden md:hover:scale-[1.02]"
      style={getHoverStyle({
        background: 'rgba(11,15,31,0.7)',
        border: '1px solid rgba(255,255,255,0.08)',
      })}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />
        
        <div className="absolute top-6 left-6 font-zen text-6xl font-bold" style={{ color: 'rgba(45,157,143,0.6)' }}>
          {service.number}
        </div>
      </div>
      
      <div className="relative p-8">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:rotate-12"
          style={{ background: 'rgba(45,157,143,0.15)' }}
        >
          <Icon name={service.icon} size={28} style={{ color: '#2d9d8f' }} />
        </div>

        <h3 className="font-montserrat font-semibold text-xl uppercase mb-3 tracking-tight" style={{ color: '#2d9d8f' }}>
          {service.title}
        </h3>

        <p className="font-montserrat text-zinc-300 text-sm leading-relaxed">
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