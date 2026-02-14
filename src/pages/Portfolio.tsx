import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageTitle } from '@/components/Typography';
import Button from '@/components/Button';
import { useState } from 'react';

const categories = [
  { name: 'Дизайн', icon: 'Palette', color: '#eab308' },
  { name: 'Разработка', icon: 'Code', color: '#eab308' },
  { name: 'Маркетинг', icon: 'TrendingUp', color: '#eab308' },
];

const casesByCategory = {
  'Дизайн': [
    {
      title: 'Элитный женский клуб',
      desc: 'Создали премиальный сайт для женского клуба, объединяющего бизнес, науку, искусство и культуру',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      cost: '150 000 ₽',
      duration: '2 недели',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/4514b74c-e7d5-4b17-93f4-79db0781afd5.png',
      link: '#',
    },
    {
      title: 'Премиум сайт-приложение цифрового агентства',
      desc: 'Создали премиальный сайт-приложение с уникальным дизайном и навигацией под ключ',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      cost: '150 000 ₽',
      duration: '2 недели',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/10e9d78f-c6f8-449f-a9b4-1b173d22a6ee.png',
      link: 'https://albe.su/',
    },
    {
      title: 'Онлайн-магазин электротранспорта',
      desc: 'Создали дизайн онлайн-магазина электробайков и электросамокатов с премиальным UX',
      tech: ['Figma', 'UI/UX Design', 'Design System'],
      cost: '100 000 ₽',
      duration: '2 недели',
      image: 'https://cdn.poehali.dev/files/cdb86a51-0bf6-436e-b9cd-6847e63f1501.jpg',
      link: 'https://electroby.by/',
    },
    {
      title: 'Онлайн-магазин автомобилей',
      desc: 'Создали дизайн онлайн-магазина для крупнейшего автодилера Республики Беларусь',
      tech: ['Figma', 'UI/UX Design', 'Design System'],
      cost: '100 000 ₽',
      duration: '2 недели',
      image: 'https://cdn.poehali.dev/files/ba8e9984-9af0-4baa-bf11-6434ed3eb4fb.jpg',
      link: 'https://avmmotors.by/',
    },
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
      title: 'Элитный женский клуб',
      desc: 'Разработали премиальный сайт для женского клуба с элегантным дизайном и плавными анимациями',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      cost: '150 000 ₽',
      duration: '2 недели',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/4514b74c-e7d5-4b17-93f4-79db0781afd5.png',
      link: '#',
    },
    {
      title: 'Премиум сайт-приложение цифрового агентства',
      desc: 'Разработали премиальный сайт-приложение с уникальной док-навигацией и анимациями под ключ',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      cost: '150 000 ₽',
      duration: '2 недели',
      image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/10e9d78f-c6f8-449f-a9b4-1b173d22a6ee.png',
      link: 'https://albe.su/',
    },
    {
      title: 'Онлайн-магазин электротранспорта',
      desc: 'Создали онлайн-магазин электробайков и электросамокатов с системой онлайн-оплаты и доставки',
      tech: ['PHP Laravel', 'Laravel Nova', 'React.js'],
      cost: '150 000 ₽',
      duration: '1 месяц',
      image: 'https://cdn.poehali.dev/files/cdb86a51-0bf6-436e-b9cd-6847e63f1501.jpg',
      link: 'https://electroby.by/',
    },
    {
      title: 'Онлайн-магазин автомобилей',
      desc: 'Создали онлайн-магазин для крупнейшего автодилера Республики Беларусь с каталогом, фильтрами и личным кабинетом',
      tech: ['PHP Laravel', 'Laravel Nova', 'React.js'],
      cost: '430 000 ₽',
      duration: '2 месяца',
      image: 'https://cdn.poehali.dev/files/94295911-ca72-4f6d-bc90-bb19dd8156f1.jpg',
      link: 'https://avmmotors.by/',
    },
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
        <PageContainer>
          <PageTitle>ПОРТФОЛИО</PageTitle>
          
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
        </PageContainer>
      </PageTransition>

      {selectedCategory && (
          <div
            className="fixed inset-0 z-[9999]"
            style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)' }}
            onClick={() => setSelectedCategory(null)}
          >
            <div 
              className="h-full overflow-y-auto modal-scroll pb-24 md:pb-28 lg:pb-32" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="p-2 sm:p-5 min-h-screen" onClick={(e) => e.stopPropagation()}>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      <div className="relative overflow-hidden group h-[250px] md:h-auto">
                        <img
                          src={caseItem.image}
                          alt={caseItem.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="p-5">
                        <h4 className="font-montserrat font-semibold text-xl text-white mb-2">{caseItem.title}</h4>
                        <p className="font-montserrat text-zinc-400 text-base leading-relaxed mb-4">{caseItem.desc}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <div className="font-montserrat text-xs text-zinc-500 mb-1">СТОИМОСТЬ</div>
                        <div className="font-montserrat font-semibold text-base" style={{ color: categories.find(c => c.name === selectedCategory)?.color }}>{caseItem.cost}</div>
                      </div>
                      <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <div className="font-montserrat text-xs text-zinc-500 mb-1">СРОК</div>
                        <div className="font-montserrat font-semibold text-base" style={{ color: categories.find(c => c.name === selectedCategory)?.color }}>{caseItem.duration}</div>
                      </div>
                    </div>

                    <Button 
                      onClick={handleOrderProject} 
                      variant="primary" 
                      size="medium"
                      fullWidth
                      className="mb-3"
                    >
                      Посмотреть проект
                    </Button>

                    <Button 
                      onClick={handleOrderProject} 
                      variant="secondary" 
                      size="medium"
                      fullWidth
                      className="mb-4"
                    >
                      Заказать подобный проект
                    </Button>

                    <div className="rounded-xl p-3 mb-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
                      <div className="font-montserrat text-xs text-zinc-500 mb-2">ТЕХНОЛОГИИ</div>
                      <div className="flex flex-wrap gap-1.5">
                        {caseItem.tech.map((t) => (
                          <span key={t} className="font-montserrat text-xs px-2 py-0.5 rounded-full" style={{ background: `${categories.find(c => c.name === selectedCategory)?.color}20`, color: categories.find(c => c.name === selectedCategory)?.color }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        onClick={handleQuiz} 
                        variant="secondary" 
                        size="medium"
                        fullWidth
                      >
                        Пройти квиз
                      </Button>
                      <Button 
                        onClick={handleOrderProject} 
                        variant="secondary" 
                        size="medium"
                        fullWidth
                      >
                        Связаться
                      </Button>
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