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
    items: ['ML/DL/NLP, Graph analytics', 'Computer Vision', 'Voice technologies ASR/NLP/NLU/TTS', 'Python, Pandas, CatBoost, Sklearn, Airflow, sqlalchemy, Falcon, Django', 'OpenVINO, MediaPipe'],
  },
  {
    title: 'ДОПОЛНИТЕЛЬНЫЕ КОМПЕТЕНЦИИ',
    color: '#eab308',
    items: ['AI, Machine Learning, Deep Learning, Computer Vision', 'Анализ Big Data и адаптивные алгоритмы', 'Trading аналитика', 'Blockchain аналитика'],
  },
];

const Development = () => {
  return (
    <div className="flex-1 overflow-y-auto pb-40 pt-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1
            className="font-zen text-4xl md:text-6xl lg:text-7xl text-white mb-4"
            style={{ textShadow: '0 0 60px rgba(234,179,8,0.2)' }}
          >
            <span className="text-yellow-500">Р</span>азработка
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl tracking-wide uppercase">
            Что мы создаем и наш стек технологий
          </p>
        </div>

        <div className="mb-20">
          <h2 className="font-zen text-yellow-500 text-xl md:text-2xl mb-8 tracking-wider">
            ЧТО МЫ РАЗРАБАТЫВАЕМ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(234,179,8,0.1)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(234,179,8,0.05) 0%, transparent 60%)',
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-3 rounded-xl"
                      style={{ background: 'rgba(234,179,8,0.1)', border: '1px solid rgba(234,179,8,0.15)' }}
                    >
                      <Icon name={service.icon} size={28} className="text-yellow-500" />
                    </div>
                    <h3 className="font-zen text-yellow-500 text-base md:text-lg tracking-wider">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="text-zinc-400 text-sm md:text-base leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-zen text-yellow-500 text-xl md:text-2xl mb-8 tracking-wider">
            СТЕК ТЕХНОЛОГИЙ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((stack) => (
              <div
                key={stack.title}
                className="group relative rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${stack.color}20`,
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: stack.color }}
                />
                <div className="relative z-10">
                  <h3
                    className="font-zen text-sm md:text-base mb-5 tracking-wider"
                    style={{ color: stack.color }}
                  >
                    {stack.title}
                  </h3>
                  <ul className="space-y-2">
                    {stack.items.map((item) => (
                      <li key={item} className="text-zinc-400 text-xs md:text-sm flex items-start gap-2">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
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
  );
};

export default Development;
