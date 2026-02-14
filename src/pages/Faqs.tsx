import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const faqItems = [
  {
    q: 'Сколько времени занимает разработка проекта?',
    a: 'Сроки зависят от сложности: лендинг — от 2 недель, корпоративный сайт — от 1 месяца, сложные платформы — от 3 месяцев. Точные сроки обсуждаем после анализа ТЗ.',
  },
  {
    q: 'Какие технологии вы используете?',
    a: 'React, TypeScript, Python, Node.js, PostgreSQL, MongoDB и другие. Выбираем стек под задачу — важны производительность, масштабируемость и поддерживаемость.',
  },
  {
    q: 'Можно ли заказать только дизайн без разработки?',
    a: 'Да, мы предоставляем дизайн как отдельную услугу: UI/UX, брендинг, прототипирование. Передаём все исходники в Figma.',
  },
  {
    q: 'Как происходит оплата?',
    a: 'Работаем по договору с поэтапной оплатой: предоплата 30-50%, остаток после сдачи этапов. Для крупных проектов — помесячная оплата.',
  },
  {
    q: 'Вы оказываете поддержку после запуска?',
    a: 'Да, предлагаем пакеты поддержки: обновление контента, мониторинг, техническое сопровождение, доработки и развитие продукта.',
  },
  {
    q: 'Работаете ли вы с зарубежными клиентами?',
    a: 'Да, работаем удалённо с клиентами из любой точки мира. Коммуникация на русском и английском языках.',
  },
  {
    q: 'Что входит в стоимость разработки?',
    a: 'Аналитика, проектирование, дизайн, разработка, тестирование, деплой и обучение работе с системой. Всё «под ключ».',
  },
  {
    q: 'Можете ли вы интегрировать AI в наш продукт?',
    a: 'Да, внедряем ML-модели, NLP, компьютерное зрение, чат-ботов, рекомендательные системы и другие AI-решения в существующие продукты.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AppLayout>
      <SEO
        title="FAQ"
        description="Часто задаваемые вопросы о разработке, дизайне и услугах ALBE Digital Agency. Ответы на вопросы о сроках, ценах и технологиях."
        path="/faqs"
      />
      <PageTransition>
        <div className="absolute inset-0 p-5 pb-32 flex items-stretch justify-center overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <div
              className="flex-1 rounded-3xl overflow-y-auto"
              style={{
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(168,85,247,0.2)',
                backdropFilter: 'blur(40px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <div className="h-full flex flex-col p-6 md:p-8 lg:p-10">
                <h2 className="font-montserrat font-semibold text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 text-center" style={{ color: '#a855f7' }}>
                  ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
                </h2>
                <div className="flex-1 space-y-3 max-w-4xl mx-auto w-full">
                  {faqItems.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl overflow-hidden transition-all duration-300"
                      style={{
                        background: openIndex === i ? 'rgba(168,85,247,0.08)' : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${openIndex === i ? 'rgba(168,85,247,0.3)' : 'rgba(168,85,247,0.1)'}`,
                      }}
                    >
                      <button
                        className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left"
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      >
                        <span className="font-montserrat font-medium text-sm md:text-base text-white">
                          {item.q}
                        </span>
                        <Icon
                          name="ChevronDown"
                          size={20}
                          style={{ color: '#a855f7', transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}
                        />
                      </button>
                      <div
                        style={{
                          maxHeight: openIndex === i ? '200px' : '0',
                          opacity: openIndex === i ? 1 : 0,
                          transition: 'max-height 0.3s ease, opacity 0.2s ease',
                          overflow: 'hidden',
                        }}
                      >
                        <p className="font-montserrat text-zinc-400 text-xs md:text-sm px-4 md:px-5 pb-4 md:pb-5 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </PageTransition>
    </AppLayout>
  );
};

export default Faqs;
