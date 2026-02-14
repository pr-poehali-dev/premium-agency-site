import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';

const values = [
  { icon: 'Zap', title: 'Скорость', desc: 'Быстрый запуск проектов без потери качества' },
  { icon: 'Shield', title: 'Надёжность', desc: 'Стабильные решения с гарантией работоспособности' },
  { icon: 'Lightbulb', title: 'Инновации', desc: 'Применяем передовые технологии и AI' },
  { icon: 'Heart', title: 'Забота', desc: 'Индивидуальный подход к каждому клиенту' },
];

const milestones = [
  { year: '2017', text: 'Основание компании' },
  { year: '2019', text: 'Первые enterprise-проекты' },
  { year: '2021', text: 'Запуск AI-направления' },
  { year: '2023', text: '100+ реализованных проектов' },
  { year: '2025', text: 'Международная экспансия' },
];

const About = () => {
  return (
    <AppLayout>
      <SEO
        title="О нас"
        description="ALBE Digital Agency — цифровое агентство полного цикла с 2017 года. Разработка, дизайн, AI, маркетинг. 200+ проектов, 50+ специалистов."
        path="/about"
      />
      <PageTransition>
        <div className="absolute inset-0 p-5 pb-32 flex items-stretch justify-center overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <div
              className="flex-1 rounded-3xl overflow-y-auto"
              style={{
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(45,212,191,0.2)',
                backdropFilter: 'blur(40px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <div className="h-full flex flex-col p-6 md:p-8 lg:p-10">
                <h2 className="font-montserrat font-semibold text-xl md:text-2xl lg:text-3xl mb-4 text-center" style={{ color: '#2dd4bf' }}>
                  О КОМПАНИИ
                </h2>
                <p className="font-montserrat text-zinc-400 text-xs md:text-sm text-center max-w-2xl mx-auto mb-6 leading-relaxed">
                  Мы — цифровое агентство полного цикла. Создаём технологические продукты, которые трансформируют бизнес: от идеи до запуска и масштабирования.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {values.map((v) => (
                    <div
                      key={v.title}
                      className="rounded-2xl p-4 text-center transition-all duration-300 hover:scale-[1.03]"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(45,212,191,0.1)',
                      }}
                    >
                      <div className="mx-auto w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ background: 'rgba(45,212,191,0.1)' }}>
                        <Icon name={v.icon} size={20} style={{ color: '#2dd4bf' }} />
                      </div>
                      <h3 className="font-montserrat font-semibold text-xs md:text-sm text-white mb-1">{v.title}</h3>
                      <p className="font-montserrat text-zinc-500 text-[10px] md:text-xs">{v.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl p-5 md:p-6" style={{ background: 'rgba(45,212,191,0.05)', border: '1px solid rgba(45,212,191,0.15)' }}>
                  <h3 className="font-montserrat font-semibold text-sm md:text-base mb-4 text-center" style={{ color: '#2dd4bf' }}>
                    НАША ИСТОРИЯ
                  </h3>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
                    {milestones.map((m, i) => (
                      <div key={m.year} className="flex md:flex-col items-center gap-2 md:gap-1 text-center">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(45,212,191,0.2)', color: '#2dd4bf' }}>
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-montserrat font-bold text-xs md:text-sm text-white">{m.year}</div>
                          <div className="font-montserrat text-zinc-500 text-[10px] md:text-xs">{m.text}</div>
                        </div>
                      </div>
                    ))}
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

export default About;
