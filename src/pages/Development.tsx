import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
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
      <PageTransition>
        <div className="absolute inset-0 p-5 pb-28 md:p-8 md:pb-32 flex items-stretch justify-center overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <div
              className="flex-1 rounded-3xl overflow-y-auto"
              style={{
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(253,186,116,0.2)',
                backdropFilter: 'blur(40px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <div className="h-full flex flex-col p-6 md:p-8 lg:p-10">
                <div className="mb-6 text-center flex-shrink-0">
                  <h1 className="font-montserrat font-bold text-2xl md:text-4xl lg:text-5xl text-white mb-2">
                    <span style={{ color: '#fdba74' }}>Разработка</span>
                  </h1>
                  <p className="font-montserrat text-zinc-400 text-xs md:text-sm lg:text-base">
                    Что мы создаем и наш стек технологий
                  </p>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="mb-8">
                    <h2 className="font-montserrat font-semibold text-base md:text-lg lg:text-xl mb-4" style={{ color: '#fdba74' }}>
                      ЧТО МЫ РАЗРАБАТЫВАЕМ
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      {services.map((service) => (
                        <div
                          key={service.title}
                          className="group relative rounded-xl p-4 md:p-5 transition-all duration-300 hover:scale-[1.02]"
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(253,186,116,0.1)',
                          }}
                        >
                          <div className="flex items-center gap-2.5 mb-3">
                            <div
                              className="p-1.5 md:p-2 rounded-lg"
                              style={{ background: 'rgba(253,186,116,0.1)' }}
                            >
                              <Icon name={service.icon} size={16} style={{ color: '#fdba74' }} className="md:w-5 md:h-5" />
                            </div>
                            <h3 className="font-montserrat font-semibold text-xs md:text-sm lg:text-base" style={{ color: '#fdba74' }}>
                              {service.title}
                            </h3>
                          </div>
                          <ul className="space-y-1">
                            {service.items.map((item) => (
                              <li key={item} className="font-montserrat text-zinc-400 text-[10px] md:text-xs lg:text-sm leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-montserrat font-semibold text-base md:text-lg lg:text-xl mb-4" style={{ color: '#fdba74' }}>
                      СТЕК ТЕХНОЛОГИЙ
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3">
                      {techStack.map((stack) => (
                        <div
                          key={stack.title}
                          className="group relative rounded-xl p-3 md:p-4 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: `1px solid ${stack.color}20`,
                          }}
                        >
                          <div
                            className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 rounded-full opacity-10 blur-2xl"
                            style={{ background: stack.color }}
                          />
                          <div className="relative z-10">
                            <h3
                              className="font-montserrat font-semibold text-[10px] md:text-xs lg:text-sm mb-2 md:mb-3"
                              style={{ color: stack.color }}
                            >
                              {stack.title}
                            </h3>
                            <ul className="space-y-1">
                              {stack.items.map((item) => (
                                <li key={item} className="font-montserrat text-zinc-400 text-[8px] md:text-[10px] lg:text-xs flex items-start gap-1">
                                  <span
                                    className="mt-0.5 md:mt-1 w-0.5 h-0.5 md:w-1 md:h-1 rounded-full flex-shrink-0"
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
          </div>
        </div>
      </PageTransition>
    </AppLayout>
  );
};

export default Development;