import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';

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
        <div className="p-2 sm:p-5 pb-32">
          <div
            className="rounded-3xl"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(253,224,71,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center uppercase" style={{ color: '#fde047' }}>
                ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {aiServices.map((service) => (
                  <div
                    key={service.title}
                    className="group rounded-2xl p-3 sm:p-5 md:p-6 transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(253,224,71,0.1)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-xl" style={{ background: 'rgba(253,224,71,0.1)' }}>
                        <Icon name={service.icon} size={28} style={{ color: '#fde047' }} />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-lg" style={{ color: '#fde047' }}>
                          {service.title}
                        </h3>
                        <p className="font-montserrat text-zinc-500 text-sm">{service.desc}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 ml-1">
                      {service.items.map((item) => (
                        <li key={item} className="font-montserrat text-zinc-300 text-base flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#fde047' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </AppLayout>
  );
};

export default AI;