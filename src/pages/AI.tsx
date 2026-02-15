import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageTitle, SectionTitle } from '@/components/Typography';

const ourProducts = [
  {
    title: 'Vision AI',
    desc: 'Система на архитектуре Faster R-CNN предоставляется как мощное решение для анализа видеопотока и классификации данных. Эта технология обеспечивает эффективное обнаружение объектов в реальном времени.',
    icon: 'Eye',
  },
  {
    title: 'AlbeAI',
    desc: 'Анализатор бизнеса в реальном времени — изучает конкурентов, отслеживает тренды рынка и предоставляет персонализированные рекомендации для роста вашего бизнеса. Автоматизирует аналитику и помогает принимать решения на основе данных.',
    icon: 'TrendingUp',
  },
  {
    title: 'Brand Chef AI',
    desc: 'Внедрение технологии Vision AI в кухонные процессы открывает новые возможности для улучшения работы поваров и управления кухней. Автоматизация контроля качества, стандартизация процессов и повышение эффективности.',
    icon: 'ChefHat',
  },
];

const brandChefFeatures = [
  {
    icon: 'Clock',
    title: 'Управление временем приготовления',
    desc: 'Отслеживание времени, затрачиваемого на приготовление блюд, помогает выявить узкие места и оптимизировать рабочий процесс.',
  },
  {
    icon: 'AlertCircle',
    title: 'Определение отклонений',
    desc: 'Автоматический анализ процесса приготовления позволяет быстро выявлять и исправлять ошибки.',
  },
  {
    icon: 'GraduationCap',
    title: 'Обучение и анализ KPI',
    desc: 'Отслеживание эффективности каждого повара помогает выявлять зоны для улучшения и нацеливать обучение.',
  },
  {
    icon: 'Package',
    title: 'Управление запасами',
    desc: 'Помощь в управлении запасами путем отслеживания использования ингредиентов в режиме реального времени.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Контроль санитарных норм',
    desc: 'Платформа помогает отслеживать соблюдение санитарных норм на кухне.',
  },
  {
    icon: 'Repeat',
    title: 'Стандартизация',
    desc: 'Использование стандартов подачи и автоматический анализ блюд в режиме реального времени помогает обеспечить одинаковую презентацию и качество блюд, вне зависимости от смены повара.',
  },
  {
    icon: 'Scale',
    title: 'Весовой контроль',
    desc: 'Использование умных весов для проверки соответствия массы порции заявленным стандартам. Анализ отклонений и уведомление персонала о необходимости корректировки.',
  },
  {
    icon: 'Thermometer',
    title: 'Тепловой мониторинг',
    desc: 'Датчики тепла обеспечивают контроль температуры готовых блюд. Гарантия того, что блюдо находится в нужных температурных пределах перед подачей.',
  },
  {
    icon: 'Camera',
    title: 'Сканирование готового блюда',
    desc: 'Использование камер для визуального анализа оформления и презентации блюда. Сравнение с эталонными изображениями для соблюдения стандартов подачи.',
  },
  {
    icon: 'BarChart',
    title: 'Анализ и отчетность',
    desc: 'Сбор данных по времени приготовления, температуре, массе и внешнему виду для усовершенствования процессов. Генерация отчетов о соответствии стандартам и производительности кухни.',
  },
];

const AI = () => {
  return (
    <AppLayout>
      <SEO
        title="AI решения и внедрение искусственного интеллекта"
        description="Разработка и внедрение AI-решений: машинное обучение, компьютерное зрение, NLP, чат-боты. Vision AI, AlbeAI, Brand Chef AI. Автоматизация бизнес-процессов через искусственный интеллект."
        path="/ai"
        keywords="ai решения, искусственный интеллект, машинное обучение, компьютерное зрение, nlp, чат боты, автоматизация процессов, ai разработка, внедрение ai"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI решения и машинное обучение',
          provider: {
            '@type': 'Organization',
            name: 'ALBE Digital Agency',
          },
          serviceType: 'AI Development',
          areaServed: ['RU', 'US', 'EU'],
        }}
      />
      <PageTransition>
        <PageContainer>
          <PageTitle>НАШИ РАЗРАБОТКИ В ИИ</PageTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {ourProducts.map((product) => (
              <div
                key={product.title}
                className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'rgba(11,15,31,0.7)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(234,179,8,0.1)' }}>
                  <Icon name={product.icon} size={28} style={{ color: '#eab308' }} />
                </div>
                <h3 className="font-montserrat font-light text-xl uppercase mb-3" style={{ color: '#eab308' }}>
                  {product.title}
                </h3>
                <p className="font-montserrat text-white text-sm leading-relaxed">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <SectionTitle>BRAND CHEF AI — ПРИМЕНЕНИЕ</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {brandChefFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'rgba(11,15,31,0.7)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="flex items-start gap-4 mb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(234,179,8,0.1)' }}>
                      <Icon name={feature.icon} size={20} style={{ color: '#eab308' }} />
                    </div>
                    <h4 className="font-montserrat font-light text-base uppercase" style={{ color: '#eab308' }}>
                      {feature.title}
                    </h4>
                  </div>
                  <p className="font-montserrat text-sm text-white leading-relaxed ml-14">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default AI;