import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageTitle } from '@/components/Typography';
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
        background: isOpen ? 'rgba(192,132,252,0.08)' : 'rgba(11,15,31,0.6)',
        border: `1px solid ${isOpen ? 'rgba(192,132,252,0.3)' : 'rgba(255,255,255,0.08)'}`,
      })}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-6"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <span className="font-montserrat font-medium text-base md:text-lg text-white text-left">
          {item.q}
        </span>
        <Icon
          name="ChevronDown"
          size={20}
          style={{ color: '#C084FC', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}
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
        <p className="font-montserrat text-white text-base md:text-lg px-6 pb-6 leading-relaxed">
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
        <PageContainer>
          <div className="mb-16">
            <PageTitle color="#C084FC">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</PageTitle>
            <p className="text-zinc-400 font-montserrat text-xl max-w-3xl mt-6 leading-relaxed">
              Ответы на популярные вопросы о разработке, ценах, сроках и технологиях.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
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
        </PageContainer>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </PageTransition>
    </AppLayout>
  );
};

export default Faqs;