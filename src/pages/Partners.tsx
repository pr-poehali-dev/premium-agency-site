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
        <div className="absolute inset-0 p-5 pb-32 flex items-stretch justify-center overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <div
              className="flex-1 rounded-3xl overflow-y-auto"
              style={{
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(110,231,183,0.2)',
                backdropFilter: 'blur(40px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <div className="h-full flex flex-col p-6 md:p-8 lg:p-10">
                <h2 className="font-montserrat font-semibold text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 text-center" style={{ color: '#6ee7b7' }}>
                  ПАРТНЁРЫ
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {partners.map((partner) => (
                    <div
                      key={partner.name}
                      className="rounded-2xl p-4 md:p-5 text-center transition-all duration-300 hover:scale-[1.03]"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(110,231,183,0.1)',
                      }}
                    >
                      <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: 'rgba(110,231,183,0.1)' }}>
                        <Icon name={partner.icon} size={24} style={{ color: '#6ee7b7' }} />
                      </div>
                      <h3 className="font-montserrat font-semibold text-xs md:text-sm text-white">{partner.name}</h3>
                      <p className="font-montserrat text-zinc-500 text-[10px] md:text-xs">{partner.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {benefits.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl p-4 md:p-5"
                      style={{
                        background: 'rgba(110,231,183,0.05)',
                        border: '1px solid rgba(110,231,183,0.15)',
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name={item.icon} size={20} style={{ color: '#6ee7b7' }} />
                        <h3 className="font-montserrat font-semibold text-xs md:text-sm" style={{ color: '#6ee7b7' }}>{item.title}</h3>
                      </div>
                      <p className="font-montserrat text-zinc-400 text-[10px] md:text-xs leading-relaxed">{item.desc}</p>
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

export default Partners;
