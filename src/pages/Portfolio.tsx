import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const categories = [
  { name: 'Дизайн', icon: 'Palette', color: '#eab308' },
  { name: 'Разработка', icon: 'Code', color: '#eab308' },
  { name: 'Маркетинг', icon: 'TrendingUp', color: '#eab308' },
];

const casesByCategory = {
  'Дизайн': [
    {
      title: 'Ребрендинг FinTech стартапа',
      desc: 'Создали полный брендбук, UI-kit и дизайн мобильного приложения для финансового стартапа',
      tech: ['Figma', 'Adobe Illustrator', 'Prototyping'],
      cost: 'от 500 000 ₽',
      duration: '3 недели',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/placeholder-design-1.jpg',
      link: '#',
    },
    {
      title: 'E-Commerce платформа',
      desc: 'Дизайн маркетплейса с фокусом на UX и конверсию: прототип, UI-дизайн, дизайн-система',
      tech: ['Figma', 'Sketch', 'Design System'],
      cost: 'от 800 000 ₽',
      duration: '1.5 месяца',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/placeholder-design-2.jpg',
      link: '#',
    },
    {
      title: 'Корпоративный сайт',
      desc: 'Премиальный дизайн корпоративного сайта с анимациями и интерактивными элементами',
      tech: ['Figma', 'After Effects', 'Lottie'],
      cost: 'от 300 000 ₽',
      duration: '2 недели',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/placeholder-design-3.jpg',
      link: '#',
    },
  ],
  'Разработка': [
    {
      title: 'FinTech Platform',
      desc: 'Платформа для управления инвестициями с AI-аналитикой и автоматическими стратегиями',
      tech: ['React', 'Python', 'ML', 'PostgreSQL'],
      cost: 'от 2 500 000 ₽',
      duration: '4 месяца',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/placeholder-dev-1.jpg',
      link: '#',
    },
    {
      title: 'Healthcare CRM',
      desc: 'CRM-система для клиник с интеграцией электронных медицинских карт и телемедициной',
      tech: ['TypeScript', 'PostgreSQL', 'FHIR', 'Docker'],
      cost: 'от 1 800 000 ₽',
      duration: '3 месяца',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/placeholder-dev-2.jpg',
      link: '#',
    },
    {
      title: 'Logistics ERP',
      desc: 'ERP-система для управления цепочками поставок и автоматизации складских процессов',
      tech: ['Python', 'Kubernetes', 'RabbitMQ', 'MongoDB'],
      cost: 'от 3 000 000 ₽',
      duration: '5 месяцев',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/placeholder-dev-3.jpg',
      link: '#',
    },
    {
      title: 'EdTech Platform',
      desc: 'Платформа онлайн-обучения с AI-тьютором и адаптивными курсами',
      tech: ['React', 'NLP', 'WebRTC', 'PostgreSQL'],
      cost: 'от 2 200 000 ₽',
      duration: '4 месяца',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/placeholder-dev-4.jpg',
      link: '#',
    },
  ],
  'Маркетинг': [
    {
      title: 'Запуск SaaS продукта',
      desc: 'Комплексная маркетинговая стратегия: SEO, контекст, email-маркетинг, SMM. Результат: 500+ лидов/мес',
      tech: ['Google Ads', 'Yandex Direct', 'SEO', 'Analytics'],
      cost: 'от 200 000 ₽/мес',
      duration: 'постоянно',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/placeholder-marketing-1.jpg',
      link: '#',
    },
    {
      title: 'Performance маркетинг E-commerce',
      desc: 'Увеличили продажи на 340% через таргетинг, ретаргетинг и email-автоматизацию',
      tech: ['Facebook Ads', 'Instagram', 'Google Shopping', 'CRM'],
      cost: 'от 150 000 ₽/мес',
      duration: 'постоянно',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/placeholder-marketing-2.jpg',
      link: '#',
    },
    {
      title: 'Контент-маркетинг B2B',
      desc: 'Стратегия контент-маркетинга для B2B: блог, вебинары, лид-магниты. 200+ квалифицированных лидов',
      tech: ['Content Strategy', 'LinkedIn', 'Webinars', 'Lead Gen'],
      cost: 'от 180 000 ₽/мес',
      duration: 'постоянно',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/placeholder-marketing-3.jpg',
      link: '#',
    },
  ],
};

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleOrderProject = () => {
    window.open('https://t.me/albe_web', '_blank');
  };

  const handleQuiz = () => {
    window.location.href = '/quiz';
  };

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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className="group relative rounded-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${cat.color}15, ${cat.color}05)`,
                      border: `2px solid ${cat.color}40`,
                      boxShadow: `0 8px 24px ${cat.color}10`,
                      aspectRatio: '16/9',
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                      <div className="p-4 rounded-2xl" style={{ background: `${cat.color}20` }}>
                        <Icon name={cat.icon} size={48} style={{ color: cat.color }} />
                      </div>
                      <span className="font-montserrat font-light text-2xl md:text-3xl tracking-wide uppercase" style={{ color: cat.color }}>
                        {cat.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageTransition>

      {selectedCategory && (
          <div
            className="fixed inset-0 z-[9999]"
            style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)' }}
            onClick={() => setSelectedCategory(null)}
          >
            <div 
              className="h-full overflow-y-auto modal-scroll" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="p-2 sm:p-5 pb-24 sm:pb-28 min-h-screen" onClick={(e) => e.stopPropagation()}>
                <div
                  className="rounded-3xl"
                  style={{
                    background: 'rgba(0,0,0,0.9)',
                    border: `2px solid ${categories.find(c => c.name === selectedCategory)?.color}40`,
                    backdropFilter: 'blur(40px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  }}
                >
                  <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide uppercase" style={{ color: categories.find(c => c.name === selectedCategory)?.color }}>
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

                    <div className="space-y-4">
                {casesByCategory[selectedCategory as keyof typeof casesByCategory]?.map((caseItem, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${categories.find(c => c.name === selectedCategory)?.color}20`,
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-5">
                      <div className="relative overflow-hidden group rounded-2xl md:rounded-none">
                        <img
                          src={caseItem.image}
                          alt={caseItem.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          style={{ minHeight: '200px', maxHeight: '300px' }}
                        />
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                          style={{ background: 'rgba(0,0,0,0.7)' }}
                        >
                          <a
                            href={caseItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl font-montserrat font-medium text-sm transition-all duration-300 hover:scale-105"
                            style={{
                              background: `${categories.find(c => c.name === selectedCategory)?.color}`,
                              color: '#000',
                            }}
                          >
                            Посмотреть проект
                          </a>
                        </div>
                      </div>
                      
                      <div className="p-5">
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

                        <div className="flex flex-col md:flex-row gap-3">
                          <button
                            onClick={handleOrderProject}
                            className="w-full md:w-auto md:flex-1 px-6 py-3 rounded-xl font-montserrat font-medium text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap"
                            style={{
                              background: `${categories.find(c => c.name === selectedCategory)?.color}`,
                              color: '#000',
                            }}
                          >
                            Заказать подобный проект
                          </button>
                          <button
                            onClick={handleQuiz}
                            className="px-6 py-3 rounded-xl font-montserrat font-medium text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap"
                            style={{
                              background: '#86efac',
                              color: '#000',
                            }}
                          >
                            Пройти квиз
                          </button>
                          <button
                            onClick={handleOrderProject}
                            className="px-6 py-3 rounded-xl font-montserrat font-medium text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap"
                            style={{
                              background: '#22d3ee',
                              color: '#000',
                            }}
                          >
                            Связаться
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </AppLayout>
  );
};

export default Portfolio;