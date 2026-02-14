import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';

const reviews = [
  {
    name: 'Александр К.',
    company: 'FinTech Startup',
    text: 'Команда ALBE превзошла все ожидания. Платформа работает безупречно, а AI-аналитика увеличила конверсию на 40%.',
    rating: 5,
  },
  {
    name: 'Мария В.',
    company: 'Ритейл сеть',
    text: 'Профессиональный подход к разработке маркетплейса. Сроки соблюдены, бюджет не превышен. Рекомендую!',
    rating: 5,
  },
  {
    name: 'Дмитрий С.',
    company: 'Медицинский центр',
    text: 'CRM-система полностью автоматизировала работу наших клиник. Интеграция с медкартами работает отлично.',
    rating: 5,
  },
  {
    name: 'Елена Р.',
    company: 'EdTech проект',
    text: 'Платформа онлайн-обучения с AI-тьютором стала нашим флагманским продуктом. Отличная команда!',
    rating: 5,
  },
  {
    name: 'Игорь Л.',
    company: 'Логистическая компания',
    text: 'ERP-система сократила операционные расходы на 25%. Техподдержка реагирует моментально.',
    rating: 4,
  },
  {
    name: 'Анна М.',
    company: 'Digital Agency',
    text: 'Заказывали дизайн и брендинг. Результат превзошёл макеты — всё выглядит премиально и современно.',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <AppLayout>
      <SEO
        title="Отзывы"
        description="Отзывы клиентов ALBE Digital Agency. Реальные кейсы и результаты: увеличение конверсии, автоматизация процессов, сокращение расходов."
        path="/reviews"
      />
      <PageTransition>
        <div className="p-2 sm:p-5 pb-32">
          <div
            className="rounded-3xl"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(134,239,172,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center uppercase" style={{ color: '#86efac' }}>
                ОТЗЫВЫ КЛИЕНТОВ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reviews.map((review) => (
                  <div
                    key={review.name}
                    className="rounded-2xl p-3 sm:p-5 transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(134,239,172,0.1)',
                    }}
                  >
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          style={{ color: i < review.rating ? '#86efac' : '#3f3f46' }}
                        />
                      ))}
                    </div>
                    <p className="font-montserrat text-zinc-300 text-base leading-relaxed mb-4 italic">
                      "{review.text}"
                    </p>
                    <div>
                      <div className="font-montserrat font-semibold text-base text-white">{review.name}</div>
                      <div className="font-montserrat text-zinc-500 text-sm">{review.company}</div>
                    </div>
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

export default Reviews;