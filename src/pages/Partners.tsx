import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';

const partners = [
  { name: 'Yandex Cloud', desc: 'Облачная инфраструктура', icon: 'Cloud' },
  { name: 'Selectel', desc: 'Хостинг и серверы', icon: 'Server' },
  { name: 'Тинькофф', desc: 'Платёжные решения', icon: 'CreditCard' },
  { name: 'Bitrix24', desc: 'CRM-интеграции', icon: 'Database' },
  { name: '1С', desc: 'Учётные системы', icon: 'Calculator' },
  { name: 'Figma', desc: 'Дизайн-инструменты', icon: 'Pen' },
];

const benefits = [
  { icon: 'Handshake', title: 'Партнёрская программа', desc: 'Взаимовыгодные условия сотрудничества и реферальные бонусы' },
  { icon: 'Users', title: 'Совместные проекты', desc: 'Объединяем экспертизу для реализации масштабных проектов' },
  { icon: 'Award', title: 'Сертификация', desc: 'Подтверждённая экспертиза в работе с технологическими партнёрами' },
];

const Partners = () => {
  return (
    <AppLayout>
      <SEO
        title="Партнеры"
        description="Технологические партнёры ALBE Digital Agency: Yandex Cloud, Selectel, Тинькофф, Bitrix24, 1С. Партнёрская программа."
        path="/partners"
      />
      <PageTransition>
        <div className="p-2 sm:p-5 pb-32">
          <div
            className="rounded-3xl"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(110,231,183,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center uppercase" style={{ color: '#6ee7b7' }}>
                ПАРТНЁРЫ
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="rounded-2xl p-3 sm:p-5 text-center transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(110,231,183,0.1)',
                    }}
                  >
                    <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-3" style={{ background: 'rgba(110,231,183,0.1)' }}>
                      <Icon name={partner.icon} size={28} style={{ color: '#6ee7b7' }} />
                    </div>
                    <h3 className="font-montserrat font-semibold text-base text-white">{partner.name}</h3>
                    <p className="font-montserrat text-zinc-500 text-sm">{partner.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl p-3 sm:p-5"
                    style={{
                      background: 'rgba(110,231,183,0.05)',
                      border: '1px solid rgba(110,231,183,0.15)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name={item.icon} size={22} style={{ color: '#6ee7b7' }} />
                      <h3 className="font-montserrat font-semibold text-base" style={{ color: '#6ee7b7' }}>{item.title}</h3>
                    </div>
                    <p className="font-montserrat text-zinc-400 text-base leading-relaxed">{item.desc}</p>
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

export default Partners;