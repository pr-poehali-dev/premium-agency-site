import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageTitle, BodyText } from '@/components/Typography';
import { useCardHover } from '@/hooks/useCardHover';

interface Advantage {
  icon: string;
  title: string;
  desc: string;
}

const advantages: Advantage[] = [
  { 
    icon: 'Award', 
    title: 'Опыт и компетентность', 
    desc: 'Много лет успешного опыта разработки сложных продуктов и веб-сервисов с использованием искусственного интеллекта. Наши разработчики имеют высокий уровень профессионализма – от Middle до Team Lead.' 
  },
  { 
    icon: 'Star', 
    title: 'Доверие крупных брендов', 
    desc: 'Реализовали успешные проекты для таких компаний, как Сбер, Яндекс, ВКонтакте, Телеграм, а также ресторанных сетей.' 
  },
  { 
    icon: 'Zap', 
    title: 'Качество и скорость', 
    desc: 'Мы гарантируем безупречное качество выполнения проектов и быструю реализацию благодаря опытной команде, эффективным процессам и современным технологиям.' 
  },
  { 
    icon: 'DollarSign', 
    title: 'Стоимость разработки', 
    desc: 'Сочетание доступных цен с высоким уровнем качества позволяет нашим клиентам эффективно использовать свой бюджет для достижения превосходных результатов.' 
  },
];

const AdvantageCard = ({ advantage }: { advantage: Advantage }) => {
  const { hoverProps, getHoverStyle } = useCardHover();

  return (
    <div
      {...hoverProps}
      className="hover-card rounded-2xl p-6 md:hover:scale-[1.02]"
      style={getHoverStyle({
        background: 'rgba(11,15,31,0.7)',
        border: '1px solid rgba(255,255,255,0.08)',
      })}
    >
      <div className="flex items-start gap-4 mb-3">
        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(234,179,8,0.1)' }}>
          <Icon name={advantage.icon} size={24} style={{ color: '#eab308' }} />
        </div>
        <h3 className="font-montserrat font-light text-xl md:text-2xl uppercase text-white" style={{ color: '#eab308' }}>{advantage.title}</h3>
      </div>
      <p className="font-montserrat text-white text-sm md:text-base leading-relaxed">{advantage.desc}</p>
    </div>
  );
};

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

          <div className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden" style={{ background: 'rgba(11,15,31,0.7)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-0">
              <div className="relative h-[400px] md:h-auto">
                <img 
                  src="https://cdn.poehali.dev/files/4b75fe68-6c92-495c-b6b3-2cc430e85cf7.jpg" 
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((item) => (
              <AdvantageCard key={item.title} advantage={item} />
            ))}
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default About;
