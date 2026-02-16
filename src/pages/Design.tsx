import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import PageContainer from '@/components/PageContainer';
import { PageHeader, SectionHeader, StatCard } from '@/components/Typography';
import Icon from '@/components/ui/icon';
import Card from '@/components/Card';

interface DesignService {
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

const designServices: DesignService[] = [
  {
    icon: 'Layers',
    title: 'UI/UX ДИЗАЙН',
    desc: 'Проектируем интерфейсы, которые увеличивают конверсию и удерживают пользователей. Исследуем поведение, создаем прототипы, тестируем гипотезы.',
    number: '01',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/ed45e4e0-cd78-4702-82fc-711574b7f595.jpg',
  },
  {
    icon: 'Monitor',
    title: 'ВЕБ-ДИЗАЙН',
    desc: 'Создаем визуально привлекательные и функциональные веб-сайты. От лендингов до корпоративных порталов и интернет-магазинов.',
    number: '02',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/5f7a7afe-8394-4b6d-82ce-350df4a71a88.jpg',
  },
  {
    icon: 'Smartphone',
    title: 'МОБИЛЬНЫЙ ДИЗАЙН',
    desc: 'Нативный опыт для iOS и Android с фокусом на юзабилити. Human Interface Guidelines и Material Design в каждой детали.',
    number: '03',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/786ee893-db76-4fdb-b127-43e91c7adf20.jpg',
  },
  {
    icon: 'Sparkles',
    title: 'БРЕНДИНГ',
    desc: 'Формируем уникальный визуальный язык вашего бренда. От логотипа до полного гайдлайна — создаем узнаваемый образ.',
    number: '04',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/e0ecbeb3-fedc-4a2e-be11-28ec54ab2779.jpg',
  },
  {
    icon: 'Frame',
    title: 'ДИЗАЙН-СИСТЕМЫ',
    desc: 'Разрабатываем масштабируемые дизайн-системы для крупных продуктов. Компоненты, паттерны и гайдлайны для единого UX.',
    number: '05',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/cdbc722d-1748-462a-8369-a8e4e5364458.jpg',
  },
  {
    icon: 'Zap',
    title: 'MOTION ДИЗАЙН',
    desc: 'Создаем анимации и микроинтеракции, которые оживляют интерфейсы. Плавные переходы, динамичные эффекты, премиальный опыт.',
    number: '06',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/166f46ec-595f-4745-a10d-24f16e3f3ab1.jpg',
  },
];

const stats = [
  { value: '120+', label: 'ПРОЕКТОВ', isNumber: true },
  { value: '98%', label: 'ДОВОЛЬНЫХ КЛИЕНТОВ', isNumber: true },
  { value: '5+', label: 'ЛЕТ НА РЫНКЕ', isNumber: true },
  { value: '24/7', label: 'ПОДДЕРЖКА', isNumber: false },
];

const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'ИССЛЕДОВАНИЕ',
    desc: 'Изучаем ваш бизнес, целевую аудиторию и конкурентов. Проводим интервью, анализируем данные, формируем гипотезы.',
    icon: 'Search',
  },
  {
    step: '02',
    title: 'ПРОТОТИПИРОВАНИЕ',
    desc: 'Создаем интерактивные прототипы и тестируем пользовательские сценарии. Находим оптимальные решения до старта дизайна.',
    icon: 'Layout',
  },
  {
    step: '03',
    title: 'ВИЗУАЛЬНЫЙ ДИЗАЙН',
    desc: 'Разрабатываем уникальный стиль, подбираем цвета, шрифты и создаем все экраны. Каждая деталь работает на ваши цели.',
    icon: 'Palette',
  },
  {
    step: '04',
    title: 'ТЕСТИРОВАНИЕ',
    desc: 'Проверяем дизайн на реальных пользователях, собираем обратную связь и вносим правки. Результат — интерфейс, который работает.',
    icon: 'CheckCircle',
  },
];

const ServiceCard = ({ service }: { service: DesignService }) => {
  return (
    <Card
      className="group relative overflow-hidden"
      background="rgba(11,15,31,0.6)"
      border="1px solid rgba(255,255,255,0.08)"
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
          style={{ background: 'rgba(45,157,143,0.15)' }}
        >
          <Icon name={service.icon} size={24} style={{ color: '#2d9d8f' }} />
        </div>

        <h3 className="font-montserrat font-light text-xl md:text-2xl lg:text-3xl uppercase mb-3 tracking-tight" style={{ color: '#2d9d8f' }}>
          {service.title}
        </h3>

        <p className="font-montserrat text-zinc-300 text-sm md:text-base lg:text-lg leading-relaxed">
          {service.desc}
        </p>
      </div>
    </Card>
  );
};

const ProcessCard = ({ step }: { step: ProcessStep }) => {
  return (
    <Card
      className="group relative"
      background="rgba(11,15,31,0.6)"
      border="1px solid rgba(255,255,255,0.08)"
    >
      <div className="flex items-start gap-6 mb-4">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
          style={{ background: 'rgba(45,157,143,0.15)' }}
        >
          <Icon name={step.icon} size={24} style={{ color: '#2d9d8f' }} />
        </div>
        
        <div className="flex-1">
          <div className="font-zen text-3xl font-bold mb-2 opacity-30">
            {step.step}
          </div>
          <h3 className="font-montserrat font-light text-xl md:text-2xl uppercase tracking-tight" style={{ color: '#2d9d8f' }}>
            {step.title}
          </h3>
        </div>
      </div>
      
      <p className="font-montserrat text-zinc-300 text-sm md:text-base lg:text-lg leading-relaxed">
        {step.desc}
      </p>
    </Card>
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
          <PageHeader 
            title="ДИЗАЙН" 
            description="Создаем дизайн, который работает на бизнес. Каждый пиксель продуман, каждая анимация имеет цель — увеличить конверсию и сделать пользователей счастливыми." 
            color="#2d9d8f"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {designServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          <SectionHeader 
            title="ПРОЦЕСС РАБОТЫ" 
            description="Следуем проверенной методологии — от исследования до финального продукта. Каждый этап нацелен на результат." 
            color="#2d9d8f"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {processSteps.map((step) => (
              <ProcessCard key={step.step} step={step} />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} isNumber={stat.isNumber} />
            ))}
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Design;