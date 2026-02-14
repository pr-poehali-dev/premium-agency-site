import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';

const services = [
  {
    title: 'МОБИЛЬНОЕ ПРИЛОЖЕНИЕ',
    icon: 'Smartphone',
    items: ['Нативное', 'Кроссплатформенное', 'ВЕБ-Приложение'],
  },
  {
    title: 'КОРПОРАТИВНЫЙ ПОРТАЛ',
    icon: 'Building2',
    items: ['Создаем полноценный инструмент для взаимодействия с клиентами и партнерами компании'],
  },
  {
    title: 'CRM/ERP - СИСТЕМУ',
    icon: 'Database',
    items: ['CRM - Для Управления Клиентами', 'ERP - Для Управления Ресурсами'],
  },
  {
    title: 'РЕШЕНИЕ НА БАЗЕ ИИ',
    icon: 'Brain',
    items: [
      'Машинное Обучение',
      'Обработка Естественного Языка (NLP)',
      'Компьютерное Зрение',
      'Роботизация Процессов (RPA)',
      'Генеративные Технологии',
    ],
  },
];

const techStack = [
  {
    title: 'BACKEND',
    color: '#a855f7',
    items: ['JavaScript/TypeScript', 'C++', 'Node.js', 'Python', 'PostgreSQL/MS SQL', 'MongoDB', 'Redis', 'Elasticsearch', 'RabbitMQ/ActiveMQ'],
  },
  {
    title: 'FRONTEND',
    color: '#3b82f6',
    items: ['JavaScript/React', 'HTML5', 'CSS3', 'SASS/Less', 'Typescript', 'Redux SSR'],
  },
  {
    title: 'DEVOPS',
    color: '#22c55e',
    items: ['GAP', 'Kubernetes', 'Yandex Cloud', 'Selectel', 'Gitlab', 'Terraform', 'Ansible', 'ArgoCD', 'Jenkins'],
  },
  {
    title: 'QA',
    color: '#ef4444',
    items: ['TestRail', 'Postman', 'Swagger', 'Fiddler', 'Charles', 'JMeter'],
  },
  {
    title: 'АНАЛИТИКА',
    color: '#8b5cf6',
    items: ['UML 2.x', 'BPMN 2.x', 'FIGMA', 'Sparx Enterprise Architect', 'ISO/IEC и ISO/IEC/IEEE', 'SCRUM'],
  },
  {
    title: 'ANDROID / IOS',
    color: '#06b6d4',
    items: ['React Native / Expo', 'JS / TS', 'Java/Kotlin', 'Objective C / Swift', 'Redux / RTK / RTKQ / Reanimated / Skia'],
  },
  {
    title: 'AI TECH',
    color: '#f97316',
    items: ['ML/DL/NLP, Graph analytics', 'Computer Vision', 'Voice technologies ASR/NLP/NLU/TTS', 'Python, Pandas, CatBoost, Sklearn, Airflow, sqlalchemy, Falcon, Django', 'data analytics, NLP, CatBoost, OpenVINO, MediaPipe'],
  },
  {
    title: 'ДОПОЛНИТЕЛЬНЫЕ КОМПЕТЕНЦИИ',
    color: '#eab308',
    items: ['Используем в работе современные технологии: AI, Machine Learning, Deep Learning, Computer Vision, технологии анализа Big Data и адаптивные алгоритмы', 'Trading аналитика', 'Blockchain аналитика'],
  },
];

const Development = () => {
  return (
    <AppLayout>
      <SEO
        title="Разработка"
        description="Разработка мобильных приложений, CRM/ERP систем, корпоративных порталов и AI-решений от ALBE Digital Agency."
        path="/development"
      />
      <PageTransition>
        <div className="p-2 sm:p-5 pb-44 md:pb-40">
          <div
            className="rounded-3xl mb-8"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(253,186,116,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center uppercase" style={{ color: '#fdba74' }}>
                ЧТО МЫ РАЗРАБАТЫВАЕМ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="group relative rounded-2xl p-3 sm:p-6 transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(253,186,116,0.1)',
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl" style={{ background: 'rgba(253,186,116,0.1)' }}>
                        <Icon name={service.icon} size={32} style={{ color: '#fdba74' }} />
                      </div>
                      <h3 className="font-montserrat font-semibold text-lg" style={{ color: '#fdba74' }}>
                        {service.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="font-montserrat text-zinc-300 text-base leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: 'rgba(253,186,116,0.03)',
                  border: '1px solid rgba(253,186,116,0.15)',
                }}
              >
                <h3 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6 text-center uppercase" style={{ color: '#fdba74' }}>
                  СТЕК ТЕХНОЛОГИЙ
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {techStack.map((stack) => (
                    <div
                      key={stack.title}
                      className="rounded-xl p-4"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: `1px solid ${stack.color}20`,
                      }}
                    >
                      <h4
                        className="font-montserrat font-semibold text-base mb-3 pb-2"
                        style={{ color: stack.color, borderBottom: `1px solid ${stack.color}20` }}
                      >
                        {stack.title}
                      </h4>
                      <ul className="space-y-1.5">
                        {stack.items.map((item) => (
                          <li key={item} className="font-montserrat text-zinc-400 text-sm leading-relaxed flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: stack.color }} />
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
        </div>
      </PageTransition>
    </AppLayout>
  );
};

export default Development;