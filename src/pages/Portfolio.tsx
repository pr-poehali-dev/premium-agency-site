import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';

const projects = [
  {
    title: 'FinTech Platform',
    category: 'Финансы',
    desc: 'Платформа для управления инвестициями с AI-аналитикой и автоматическими стратегиями',
    tags: ['React', 'Python', 'ML', 'PostgreSQL'],
    icon: 'TrendingUp',
  },
  {
    title: 'E-Commerce Marketplace',
    category: 'Ритейл',
    desc: 'Маркетплейс с персональными рекомендациями и real-time аналитикой продаж',
    tags: ['React', 'Node.js', 'Redis', 'Elasticsearch'],
    icon: 'ShoppingCart',
  },
  {
    title: 'Healthcare CRM',
    category: 'Медицина',
    desc: 'CRM-система для клиник с интеграцией электронных медицинских карт',
    tags: ['TypeScript', 'PostgreSQL', 'FHIR', 'Docker'],
    icon: 'Heart',
  },
  {
    title: 'Logistics ERP',
    category: 'Логистика',
    desc: 'ERP-система для управления цепочками поставок и автоматизации склада',
    tags: ['Python', 'Kubernetes', 'RabbitMQ', 'MongoDB'],
    icon: 'Truck',
  },
  {
    title: 'EdTech Platform',
    category: 'Образование',
    desc: 'Платформа онлайн-обучения с AI-тьютором и адаптивными курсами',
    tags: ['React', 'NLP', 'WebRTC', 'PostgreSQL'],
    icon: 'GraduationCap',
  },
  {
    title: 'Smart City Dashboard',
    category: 'GovTech',
    desc: 'Панель мониторинга городской инфраструктуры с IoT-интеграцией',
    tags: ['React', 'Python', 'Grafana', 'TimescaleDB'],
    icon: 'Building',
  },
];

const Portfolio = () => {
  return (
    <AppLayout>
      <SEO
        title="Портфолио"
        description="Реализованные проекты ALBE Digital Agency: финтех, e-commerce, медицина, логистика, образование. Кейсы и результаты."
        path="/portfolio"
      />
      <PageTransition>
        <div className="p-2 sm:p-5 pb-32">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="group rounded-2xl p-3 sm:p-5 transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(251,146,60,0.1)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl" style={{ background: 'rgba(251,146,60,0.1)' }}>
                        <Icon name={project.icon} size={24} style={{ color: '#fb923c' }} />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-base text-white">{project.title}</h3>
                        <span className="font-montserrat text-sm" style={{ color: '#fb923c' }}>{project.category}</span>
                      </div>
                    </div>
                    <p className="font-montserrat text-zinc-400 text-base leading-relaxed mb-3">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-montserrat text-sm px-2.5 py-0.5 rounded-full"
                          style={{ background: 'rgba(251,146,60,0.1)', color: '#fb923c' }}
                        >
                          {tag}
                        </span>
                      ))}
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

export default Portfolio;