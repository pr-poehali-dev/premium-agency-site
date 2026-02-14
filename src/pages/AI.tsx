import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';

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
          <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center uppercase" style={{ color: '#eab308' }}>
            ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {aiServices.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl p-3 sm:p-5 md:p-6 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(234,179,8,0.1)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl" style={{ background: 'rgba(234,179,8,0.1)' }}>
                    <Icon name={service.icon} size={28} style={{ color: '#eab308' }} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg uppercase" style={{ color: '#eab308' }}>
                      {service.title}
                    </h3>
                    <p className="font-montserrat text-white text-sm">{service.desc}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 ml-1">
                  {service.items.map((item) => (
                    <li key={item} className="font-montserrat text-white text-base flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#eab308' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default AI;