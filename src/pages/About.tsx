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
        <div className="p-2 sm:p-5 pb-32">
          <div
            className="rounded-3xl"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(45,212,191,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4 text-center uppercase" style={{ color: '#2dd4bf' }}>
                О КОМПАНИИ
              </h2>
              <p className="font-montserrat text-zinc-400 text-base text-center max-w-2xl mx-auto mb-8 leading-relaxed">
                Мы — цифровое агентство полного цикла. Создаём технологические продукты, которые трансформируют бизнес: от идеи до запуска и масштабирования.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="rounded-2xl p-3 sm:p-5 text-center transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(45,212,191,0.1)',
                    }}
                  >
                    <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: 'rgba(45,212,191,0.1)' }}>
                      <Icon name={v.icon} size={24} style={{ color: '#2dd4bf' }} />
                    </div>
                    <h3 className="font-montserrat font-semibold text-base text-white mb-1">{v.title}</h3>
                    <p className="font-montserrat text-zinc-500 text-sm">{v.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-6" style={{ background: 'rgba(45,212,191,0.05)', border: '1px solid rgba(45,212,191,0.15)' }}>
                <h3 className="font-montserrat font-light text-lg md:text-xl lg:text-2xl tracking-wide mb-5 text-center uppercase" style={{ color: '#2dd4bf' }}>
                  НАША ИСТОРИЯ
                </h3>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
                  {milestones.map((m, i) => (
                    <div key={m.year} className="flex md:flex-col items-center gap-3 md:gap-1 text-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(45,212,191,0.2)', color: '#2dd4bf' }}>
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-montserrat font-bold text-base text-white">{m.year}</div>
                        <div className="font-montserrat text-zinc-500 text-sm">{m.text}</div>
                      </div>
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

export default About;