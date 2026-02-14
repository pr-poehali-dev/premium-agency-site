import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import PageContainer from '@/components/PageContainer';
import { PageTitle } from '@/components/Typography';
import ServiceCard from '@/components/ServiceCard';

const aiServices = [
  {
    icon: 'Brain',
    title: 'MACHINE LEARNING',
    desc: 'Обучаем модели на ваших данных для прогнозирования и автоматизации',
    items: ['Предиктивная аналитика', 'Рекомендательные системы', 'Детекция аномалий', 'Кластеризация данных'],
  },
  {
    icon: 'MessageCircle',
    title: 'NLP / ЧАТБОТЫ',
    desc: 'Обработка естественного языка и умные диалоговые системы',
    items: ['Чат-боты и ассистенты', 'Анализ тональности', 'Извлечение сущностей', 'Автоматический перевод'],
  },
  {
    icon: 'Eye',
    title: 'КОМПЬЮТЕРНОЕ ЗРЕНИЕ',
    desc: 'Распознавание изображений, видео и реальных объектов',
    items: ['Распознавание лиц', 'OCR документов', 'Контроль качества', 'Видеоаналитика'],
  },
  {
    icon: 'Sparkles',
    title: 'ГЕНЕРАТИВНЫЙ AI',
    desc: 'Создание контента, изображений и кода с помощью ИИ',
    items: ['Генерация текстов', 'Создание изображений', 'Кодогенерация', 'Персонализация контента'],
  },
];

const AI = () => {
  return (
    <AppLayout>
      <SEO
        title="AI-решения"
        description="Разработка AI-решений: машинное обучение, NLP, компьютерное зрение, генеративный AI. Внедряем искусственный интеллект в ваш бизнес."
        path="/ai"
      />
      <PageTransition>
        <PageContainer>
          <PageTitle>ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ</PageTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {aiServices.map((service) => (
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

export default AI;