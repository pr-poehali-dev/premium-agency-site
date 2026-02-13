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
    <div className="flex-1 flex items-center justify-center px-6 md:px-12 pb-32">
      <div className="w-full max-w-6xl">
        <div
          className="rounded-3xl p-8 md:p-12"
          style={{
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(234,179,8,0.2)',
            backdropFilter: 'blur(40px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}
        >
          <div className="mb-10 text-center">
            <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-white mb-3">
              <span className="text-yellow-500">Разработка</span>
            </h1>
            <p className="font-montserrat text-zinc-400 text-sm md:text-base">
              Что мы создаем и наш стек технологий
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat font-semibold text-yellow-500 text-lg md:text-xl mb-6">
              ЧТО МЫ РАЗРАБАТЫВАЕМ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(234,179,8,0.1)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2 rounded-lg"
                      style={{ background: 'rgba(234,179,8,0.1)' }}
                    >
                      <Icon name={service.icon} size={20} className="text-yellow-500" />
                    </div>
                    <h3 className="font-montserrat font-semibold text-yellow-500 text-sm md:text-base">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="space-y-1.5">
                    {service.items.map((item) => (
                      <li key={item} className="font-montserrat text-zinc-400 text-xs md:text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-montserrat font-semibold text-yellow-500 text-lg md:text-xl mb-6">
              СТЕК ТЕХНОЛОГИЙ
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {techStack.map((stack) => (
                <div
                  key={stack.title}
                  className="group relative rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${stack.color}20`,
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 blur-2xl"
                    style={{ background: stack.color }}
                  />
                  <div className="relative z-10">
                    <h3
                      className="font-montserrat font-semibold text-xs md:text-sm mb-3"
                      style={{ color: stack.color }}
                    >
                      {stack.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {stack.items.map((item) => (
                        <li key={item} className="font-montserrat text-zinc-400 text-[10px] md:text-xs flex items-start gap-1.5">
                          <span
                            className="mt-1 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: stack.color }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;