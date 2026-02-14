import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageTitle, SectionTitle, BodyText } from '@/components/Typography';

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
        <PageContainer>
          <PageTitle>О КОМПАНИИ</PageTitle>
          <BodyText className="text-center max-w-2xl mx-auto mb-8">
            Мы — цифровое агентство полного цикла. Создаём технологические продукты, которые трансформируют бизнес: от идеи до запуска и масштабирования.
          </BodyText>

          <div className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden" style={{ background: 'rgba(234,179,8,0.05)', border: '1px solid rgba(234,179,8,0.15)' }}>
            <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-0">
              <div className="relative h-[400px] md:h-auto">
                <img 
                  src="https://cdn.poehali.dev/files/75f21e51-f47a-4b40-a93d-5b1b6a16033e.jpg" 
                  alt="Алексей Беляев"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="font-montserrat font-light text-2xl md:text-3xl uppercase text-white mb-2" style={{ color: '#eab308' }}>
                  Алексей Беляев
                </h3>
                <p className="font-montserrat text-sm text-zinc-400 mb-4">Основатель и CEO</p>
                <blockquote className="relative">
                  <div className="absolute -left-2 -top-2 text-6xl opacity-20" style={{ color: '#eab308' }}>"</div>
                  <p className="font-montserrat text-base md:text-lg text-white leading-relaxed relative z-10 italic">
                    Я создал ALBE, чтобы доказать: качественный digital не должен быть доступен только корпорациям. Каждый бизнес заслуживает технологии, которые работают.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="rounded-2xl p-3 sm:p-5 text-center transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(234,179,8,0.1)',
                    }}
                  >
                    <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: 'rgba(234,179,8,0.1)' }}>
                      <Icon name={v.icon} size={24} style={{ color: '#eab308' }} />
                    </div>
                    <h3 className="font-montserrat font-semibold text-sm md:text-base uppercase text-white mb-1">{v.title}</h3>
                    <p className="font-montserrat text-white text-xs md:text-sm">{v.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-6" style={{ background: 'rgba(234,179,8,0.05)', border: '1px solid rgba(234,179,8,0.15)' }}>
                <SectionTitle>НАША ИСТОРИЯ</SectionTitle>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
                  {milestones.map((m, i) => (
                    <div key={m.year} className="flex md:flex-col items-center gap-3 md:gap-1 text-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(234,179,8,0.2)', color: '#eab308' }}>
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-montserrat font-bold text-sm md:text-base text-white">{m.year}</div>
                        <div className="font-montserrat text-white text-xs md:text-sm">{m.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default About;