import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';

const marketingServices = [
  {
    icon: 'Search',
    title: 'SEO-ПРОДВИЖЕНИЕ',
    desc: 'Выводим сайт в топ поисковых систем Google и Яндекс',
    items: ['Техническая оптимизация', 'Контент-стратегия', 'Линкбилдинг', 'Локальное SEO'],
  },
  {
    icon: 'Target',
    title: 'КОНТЕКСТНАЯ РЕКЛАМА',
    desc: 'Настраиваем и оптимизируем рекламные кампании',
    items: ['Яндекс.Директ', 'Google Ads', 'Ретаргетинг', 'A/B тестирование'],
  },
  {
    icon: 'Share2',
    title: 'SMM',
    desc: 'Продвижение в социальных сетях и управление репутацией',
    items: ['Контент-план', 'Таргетированная реклама', 'Influencer-маркетинг', 'Community management'],
  },
  {
    icon: 'BarChart3',
    title: 'АНАЛИТИКА',
    desc: 'Глубокий анализ данных для принятия бизнес-решений',
    items: ['Яндекс.Метрика', 'Google Analytics', 'Сквозная аналитика', 'Дашборды и отчёты'],
  },
];

const Marketing = () => {
  return (
    <AppLayout>
      <SEO
        title="Маркетинг"
        description="Digital-маркетинг от ALBE: SEO, контекстная реклама, SMM, аналитика. Увеличиваем трафик и конверсию вашего бизнеса."
        path="/marketing"
      />
      <PageTransition>
        <div className="p-5 pb-32">
          <div
            className="rounded-3xl"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(251,191,36,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="p-6 md:p-8 lg:p-10">
              <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center uppercase" style={{ color: '#fbbf24' }}>
                МАРКЕТИНГ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {marketingServices.map((service) => (
                  <div
                    key={service.title}
                    className="group rounded-2xl p-5 md:p-6 transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(251,191,36,0.1)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-xl" style={{ background: 'rgba(251,191,36,0.1)' }}>
                        <Icon name={service.icon} size={28} style={{ color: '#fbbf24' }} />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-lg" style={{ color: '#fbbf24' }}>
                          {service.title}
                        </h3>
                        <p className="font-montserrat text-zinc-500 text-sm">{service.desc}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 ml-1">
                      {service.items.map((item) => (
                        <li key={item} className="font-montserrat text-zinc-300 text-base flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#fbbf24' }} />
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
      </PageTransition>
    </AppLayout>
  );
};

export default Marketing;