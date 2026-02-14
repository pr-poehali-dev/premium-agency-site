import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';

const plans = [
  {
    title: 'СТАРТ',
    price: 'от 150 000 ₽',
    desc: 'Лендинг или сайт-визитка',
    icon: 'Rocket',
    color: '#facc15',
    items: ['До 5 страниц', 'Адаптивный дизайн', 'Базовое SEO', 'Форма обратной связи', 'Срок: 2-3 недели'],
  },
  {
    title: 'БИЗНЕС',
    price: 'от 500 000 ₽',
    desc: 'Корпоративный сайт или интернет-магазин',
    icon: 'Briefcase',
    color: '#f59e0b',
    popular: true,
    items: ['До 20 страниц', 'UI/UX дизайн', 'CMS-панель', 'Интеграции (CRM, платёжные системы)', 'Расширенное SEO', 'Срок: 1-2 месяца'],
  },
  {
    title: 'ENTERPRISE',
    price: 'от 1 500 000 ₽',
    desc: 'Платформа, CRM/ERP или AI-продукт',
    icon: 'Crown',
    color: '#d97706',
    items: ['Неограниченный функционал', 'Выделенная команда', 'AI / ML интеграции', 'Высоконагруженная архитектура', 'Техническая поддержка 24/7', 'Срок: от 3 месяцев'],
  },
];

const Pricing = () => {
  return (
    <AppLayout>
      <SEO
        title="Стоимость"
        description="Тарифы на разработку сайтов и приложений от ALBE Digital Agency. Лендинг от 150 000 ₽, бизнес-решение от 500 000 ₽, enterprise от 1 500 000 ₽."
        path="/pricing"
      />
      <PageTransition>
        <div className="p-5 pb-32">
          <div
            className="rounded-3xl"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(250,204,21,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="p-6 md:p-8 lg:p-10">
              <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center uppercase" style={{ color: '#facc15' }}>
                СТОИМОСТЬ УСЛУГ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {plans.map((plan) => (
                  <div
                    key={plan.title}
                    className="relative rounded-2xl p-5 md:p-6 transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: plan.popular ? 'rgba(250,204,21,0.06)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${plan.popular ? 'rgba(250,204,21,0.3)' : 'rgba(250,204,21,0.1)'}`,
                    }}
                  >
                    {plan.popular && (
                      <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-sm font-bold"
                        style={{ background: '#facc15', color: '#000' }}
                      >
                        ПОПУЛЯРНЫЙ
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl" style={{ background: `${plan.color}15` }}>
                        <Icon name={plan.icon} size={24} style={{ color: plan.color }} />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-base" style={{ color: plan.color }}>
                          {plan.title}
                        </h3>
                        <p className="font-montserrat text-zinc-500 text-sm">{plan.desc}</p>
                      </div>
                    </div>
                    <div className="font-montserrat font-bold text-2xl text-white mb-4">{plan.price}</div>
                    <ul className="space-y-2">
                      {plan.items.map((item) => (
                        <li key={item} className="font-montserrat text-zinc-300 text-base flex items-center gap-2">
                          <Icon name="Check" size={16} style={{ color: plan.color }} />
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

export default Pricing;