import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppLayout>
      <PageTransition>
        <div className="absolute inset-0 p-5 pb-32 flex items-stretch justify-center overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <div
              className="flex-1 rounded-3xl overflow-hidden relative"
              style={{
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(253,186,116,0.2)',
                backdropFilter: 'blur(40px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-4 md:p-5 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 group animate-pulse-slow"
                style={{
                  background: 'rgba(253,186,116,0.2)',
                  border: '2px solid rgba(253,186,116,0.5)',
                  boxShadow: '0 0 30px rgba(253,186,116,0.3), 0 0 60px rgba(253,186,116,0.1)',
                }}
              >
                <Icon name="Code2" size={28} style={{ color: '#fdba74' }} className="md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-12" />
                
                <div
                  className="absolute -bottom-14 right-0 pointer-events-none transition-all duration-300 whitespace-nowrap"
                  style={{
                    opacity: 0,
                    transform: 'translateY(-6px)',
                  }}
                >
                  <div className="bg-zinc-900/95 backdrop-blur-xl px-4 py-2 rounded-xl border border-zinc-700/40 shadow-2xl group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-xs font-medium text-white tracking-wide">
                      Стек технологий
                    </span>
                  </div>
                </div>
              </button>

              <div className="h-full flex flex-col p-6 md:p-8 lg:p-10">
                <h2 className="font-montserrat font-semibold text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 text-center" style={{ color: '#fdba74' }}>
                  ЧТО МЫ РАЗРАБАТЫВАЕМ
                </h2>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {services.map((service) => (
                    <div
                      key={service.title}
                      className="group relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(253,186,116,0.1)',
                      }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="p-3 md:p-4 rounded-xl"
                          style={{ background: 'rgba(253,186,116,0.1)' }}
                        >
                          <Icon name={service.icon} size={32} style={{ color: '#fdba74' }} className="md:w-10 md:h-10" />
                        </div>
                        <h3 className="font-montserrat font-semibold text-base md:text-lg lg:text-xl" style={{ color: '#fdba74' }}>
                          {service.title}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {service.items.map((item) => (
                          <li key={item} className="font-montserrat text-zinc-300 text-sm md:text-base leading-relaxed">
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

        {isModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-5"
            onClick={() => setIsModalOpen(false)}
          >
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              style={{ animation: 'fadeIn 0.2s ease-out' }}
            />
            
            <div 
              className="relative z-50 w-full max-w-6xl max-h-[80vh] rounded-3xl p-6 md:p-8 overflow-y-auto"
              style={{
                background: 'rgba(0,0,0,0.9)',
                border: '1px solid rgba(253,186,116,0.3)',
                backdropFilter: 'blur(40px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
                animation: 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-montserrat font-semibold text-xl md:text-2xl" style={{ color: '#fdba74' }}>
                  СТЕК ТЕХНОЛОГИЙ
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
                  style={{
                    background: 'rgba(253,186,116,0.1)',
                    border: '1px solid rgba(253,186,116,0.2)',
                  }}
                >
                  <Icon name="X" size={24} style={{ color: '#fdba74' }} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                      className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 blur-2xl"
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
                          <li key={item} className="font-montserrat text-zinc-400 text-[10px] md:text-xs flex items-start gap-1.5 leading-relaxed">
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
        )}

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from { 
              opacity: 0;
              transform: scale(0.9);
            }
            to { 
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes pulse-slow {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          .group:hover > div {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}</style>
      </PageTransition>
    </AppLayout>
  );
};

export default Development;