import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import { useCardHover } from '@/hooks/useCardHover';

interface FaqItem {
  q: string;
  a: string;
}

const faqItems: FaqItem[] = [
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

const FaqItemCard = ({ item, index, openIndex, setOpenIndex }: { item: FaqItem; index: number; openIndex: number | null; setOpenIndex: (index: number | null) => void }) => {
  const { hoverProps, getHoverStyle } = useCardHover();
  const isOpen = openIndex === index;

  return (
    <div
      {...hoverProps}
      className="hover-card rounded-2xl overflow-hidden"
      style={getHoverStyle({
        background: isOpen ? 'rgba(234,179,8,0.08)' : 'rgba(11,15,31,0.7)',
        border: `1px solid ${isOpen ? 'rgba(234,179,8,0.3)' : 'rgba(255,255,255,0.08)'}`,
      })}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <span className="font-montserrat font-medium text-base md:text-lg text-white text-left">
          {item.q}
        </span>
        <Icon
          name="ChevronDown"
          size={20}
          style={{ color: '#eab308', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}
        />
      </button>
      <div
        style={{
          maxHeight: isOpen ? '200px' : '0',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.3s ease, opacity 0.2s ease',
          overflow: 'hidden',
        }}
      >
        <p className="font-montserrat text-white text-base md:text-lg px-5 pb-5 leading-relaxed">
          {item.a}
        </p>
      </div>
    </div>
  );
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
        <div className="p-2 sm:p-5 pb-24 sm:pb-28">
          <div
            className="rounded-3xl"
            style={{
              background: 'rgba(11,15,31,0.85)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4 text-center uppercase" style={{ color: '#eab308' }}>
                ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
              </h2>
              <p className="text-zinc-400 font-montserrat text-lg max-w-2xl leading-relaxed text-center mx-auto mb-12">
                Ответы на популярные вопросы о разработке, ценах, сроках и технологиях.
              </p>
              <div className="space-y-3 max-w-4xl mx-auto">
                {faqItems.map((item, i) => (
                  <FaqItemCard 
                    key={i} 
                    item={item} 
                    index={i} 
                    openIndex={openIndex} 
                    setOpenIndex={setOpenIndex} 
                  />
                ))}
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