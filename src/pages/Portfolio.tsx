import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const categories = [
  { name: 'Дизайн', icon: 'Palette', color: '#fde68a' },
  { name: 'Разработка', icon: 'Code', color: '#fef08a' },
  { name: 'Маркетинг', icon: 'TrendingUp', color: '#fef9c3' },
];

const casesByCategory = {
  'Дизайн': [
    {
      title: 'Ребрендинг FinTech стартапа',
      desc: 'Создали полный брендбук, UI-kit и дизайн мобильного приложения для финансового стартапа',
      tech: ['Figma', 'Adobe Illustrator', 'Prototyping'],
      cost: 'от 500 000 ₽',
      duration: '3 недели',
    },
    {
      title: 'E-Commerce платформа',
      desc: 'Дизайн маркетплейса с фокусом на UX и конверсию: прототип, UI-дизайн, дизайн-система',
      tech: ['Figma', 'Sketch', 'Design System'],
      cost: 'от 800 000 ₽',
      duration: '1.5 месяца',
    },
    {
      title: 'Корпоративный сайт',
      desc: 'Премиальный дизайн корпоративного сайта с анимациями и интерактивными элементами',
      tech: ['Figma', 'After Effects', 'Lottie'],
      cost: 'от 300 000 ₽',
      duration: '2 недели',
    },
  ],
  'Разработка': [
    {
      title: 'FinTech Platform',
      desc: 'Платформа для управления инвестициями с AI-аналитикой и автоматическими стратегиями',
      tech: ['React', 'Python', 'ML', 'PostgreSQL'],
      cost: 'от 2 500 000 ₽',
      duration: '4 месяца',
    },
    {
      title: 'Healthcare CRM',
      desc: 'CRM-система для клиник с интеграцией электронных медицинских карт и телемедициной',
      tech: ['TypeScript', 'PostgreSQL', 'FHIR', 'Docker'],
      cost: 'от 1 800 000 ₽',
      duration: '3 месяца',
    },
    {
      title: 'Logistics ERP',
      desc: 'ERP-система для управления цепочками поставок и автоматизации складских процессов',
      tech: ['Python', 'Kubernetes', 'RabbitMQ', 'MongoDB'],
      cost: 'от 3 000 000 ₽',
      duration: '5 месяцев',
    },
    {
      title: 'EdTech Platform',
      desc: 'Платформа онлайн-обучения с AI-тьютором и адаптивными курсами',
      tech: ['React', 'NLP', 'WebRTC', 'PostgreSQL'],
      cost: 'от 2 200 000 ₽',
      duration: '4 месяца',
    },
  ],
  'Маркетинг': [
    {
      title: 'Запуск SaaS продукта',
      desc: 'Комплексная маркетинговая стратегия: SEO, контекст, email-маркетинг, SMM. Результат: 500+ лидов/мес',
      tech: ['Google Ads', 'Yandex Direct', 'SEO', 'Analytics'],
      cost: 'от 200 000 ₽/мес',
      duration: 'постоянно',
    },
    {
      title: 'Performance маркетинг E-commerce',
      desc: 'Увеличили продажи на 340% через таргетинг, ретаргетинг и email-автоматизацию',
      tech: ['Facebook Ads', 'Instagram', 'Google Shopping', 'CRM'],
      cost: 'от 150 000 ₽/мес',
      duration: 'постоянно',
    },
    {
      title: 'Контент-маркетинг B2B',
      desc: 'Стратегия контент-маркетинга для B2B: блог, вебинары, лид-магниты. 200+ квалифицированных лидов',
      tech: ['Content Strategy', 'LinkedIn', 'Webinars', 'Lead Gen'],
      cost: 'от 180 000 ₽/мес',
      duration: 'постоянно',
    },
  ],
};

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <AppLayout>
      <SEO
        title="Портфолио"
        description="Реализованные проекты ALBE Digital Agency: дизайн, разработка, маркетинг. Кейсы с результатами и стоимостью."
        path="/portfolio"
      />
      <PageTransition>
        <div className="p-2 sm:p-5 pb-24 sm:pb-28">
          <div
            className="rounded-3xl"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(251,146,60,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center uppercase" style={{ color: '#fb923c' }}>
                ПОРТФОЛИО
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className="group relative px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${cat.color}15, ${cat.color}05)`,
                      border: `2px solid ${cat.color}40`,
                      boxShadow: `0 8px 24px ${cat.color}10`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl" style={{ background: `${cat.color}20` }}>
                        <Icon name={cat.icon} size={24} style={{ color: cat.color }} />
                      </div>
                      <span className="font-montserrat font-semibold text-lg" style={{ color: cat.color }}>
                        {cat.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {selectedCategory && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}
            onClick={() => setSelectedCategory(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-3xl"
              style={{
                background: 'rgba(0,0,0,0.95)',
                border: `2px solid ${categories.find(c => c.name === selectedCategory)?.color}40`,
                boxShadow: '0 20px 80px rgba(0,0,0,0.8)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 p-6 flex items-center justify-between" style={{ background: 'rgba(0,0,0,0.95)', borderBottom: `1px solid ${categories.find(c => c.name === selectedCategory)?.color}20` }}>
                <h3 className="font-montserrat font-light text-2xl md:text-3xl uppercase" style={{ color: categories.find(c => c.name === selectedCategory)?.color }}>
                  {selectedCategory}
                </h3>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="p-2 rounded-xl transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <Icon name="X" size={24} style={{ color: '#fff' }} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {casesByCategory[selectedCategory as keyof typeof casesByCategory]?.map((caseItem, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5 transition-all duration-300 hover:scale-[1.01]"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${categories.find(c => c.name === selectedCategory)?.color}20`,
                    }}
                  >
                    <h4 className="font-montserrat font-semibold text-xl text-white mb-2">{caseItem.title}</h4>
                    <p className="font-montserrat text-zinc-400 text-base leading-relaxed mb-4">{caseItem.desc}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <div className="font-montserrat text-xs text-zinc-500 mb-1">СТОИМОСТЬ</div>
                        <div className="font-montserrat font-semibold text-base" style={{ color: categories.find(c => c.name === selectedCategory)?.color }}>{caseItem.cost}</div>
                      </div>
                      <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <div className="font-montserrat text-xs text-zinc-500 mb-1">СРОК</div>
                        <div className="font-montserrat font-semibold text-base" style={{ color: categories.find(c => c.name === selectedCategory)?.color }}>{caseItem.duration}</div>
                      </div>
                      <div className="rounded-xl p-3 sm:col-span-1 col-span-2" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <div className="font-montserrat text-xs text-zinc-500 mb-1">ТЕХНОЛОГИИ</div>
                        <div className="flex flex-wrap gap-1.5">
                          {caseItem.tech.map((t) => (
                            <span key={t} className="font-montserrat text-xs px-2 py-0.5 rounded-full" style={{ background: `${categories.find(c => c.name === selectedCategory)?.color}20`, color: categories.find(c => c.name === selectedCategory)?.color }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </PageTransition>
    </AppLayout>
  );
};

export default Portfolio;