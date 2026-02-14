import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import PageContainer from '@/components/PageContainer';
import { PageTitle } from '@/components/Typography';
import ServiceCard from '@/components/ServiceCard';

const designServices = [
  {
    icon: 'Palette',
    title: 'UI/UX ДИЗАЙН',
    desc: 'Проектируем интерфейсы, которые увеличивают конверсию и удерживают пользователей',
    items: ['Прототипирование', 'Wireframes', 'Пользовательские сценарии', 'A/B тестирование'],
  },
  {
    icon: 'Monitor',
    title: 'ВЕБ-ДИЗАЙН',
    desc: 'Создаем визуально привлекательные и функциональные веб-сайты',
    items: ['Лендинги', 'Корпоративные сайты', 'Интернет-магазины', 'Адаптивный дизайн'],
  },
  {
    icon: 'Smartphone',
    title: 'МОБИЛЬНЫЙ ДИЗАЙН',
    desc: 'Нативный опыт для iOS и Android с фокусом на юзабилити',
    items: ['iOS Human Interface', 'Material Design', 'Кроссплатформенный UX', 'App Store визуалы'],
  },
  {
    icon: 'PenTool',
    title: 'БРЕНДИНГ',
    desc: 'Формируем уникальный визуальный язык вашего бренда',
    items: ['Логотипы', 'Фирменный стиль', 'Брендбуки', 'Гайдлайны'],
  },
];

const Design = () => {
  return (
    <AppLayout>
      <SEO
        title="Дизайн"
        description="UI/UX дизайн, веб-дизайн, мобильный дизайн и брендинг от ALBE Digital Agency. Создаем интерфейсы, которые конвертируют."
        path="/design"
      />
      <PageTransition>
        <PageContainer>
          <PageTitle>ДИЗАЙН</PageTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {designServices.map((service) => (
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

export default Design;