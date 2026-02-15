import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageTitle } from '@/components/Typography';
import Button from '@/components/Button';

const categoryColors: { [key: string]: { color: string; bgColor: string } } = {
  'Дизайн': { color: '#2d9d8f', bgColor: 'linear-gradient(135deg, #2d9d8f 0%, #258576 100%)' },
  'Разработка': { color: '#d4a30a', bgColor: 'linear-gradient(135deg, #d4a30a 0%, #b88b08 100%)' },
  'Маркетинг': { color: '#d66b2a', bgColor: 'linear-gradient(135deg, #d66b2a 0%, #bf5f24 100%)' },
};

const allCases = [
  {
    title: 'Онлайн-магазин автомобилей',
    desc: 'Создали дизайн онлайн-магазина для крупнейшего автодилера Республики Беларусь',
    tech: ['Figma', 'UI/UX Design', 'Design System'],
    cost: '100 000 ₽',
    duration: '2 недели',
    image: 'https://cdn.poehali.dev/files/ba8e9984-9af0-4baa-bf11-6434ed3eb4fb.jpg',
    link: 'https://avmmotors.by/',
    category: 'Дизайн',
  },
  {
    title: 'Онлайн-магазин электротранспорта',
    desc: 'Создали дизайн онлайн-магазина электробайков и электросамокатов с премиальным UX',
    tech: ['Figma', 'UI/UX Design', 'Design System'],
    cost: '100 000 ₽',
    duration: '2 недели',
    image: 'https://cdn.poehali.dev/files/cdb86a51-0bf6-436e-b9cd-6847e63f1501.jpg',
    link: 'https://electroby.by/',
    category: 'Дизайн',
  },
  {
    title: 'Премиум сайт-приложение цифрового агентства',
    desc: 'Создали премиальный сайт-приложение с уникальным дизайном и навигацией под ключ',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    cost: '150 000 ₽',
    duration: '2 недели',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/10e9d78f-c6f8-449f-a9b4-1b173d22a6ee.png',
    link: 'https://albe.su/',
    category: 'Дизайн',
  },
  {
    title: 'Элитный женский клуб',
    desc: 'Создали премиальный сайт для женского клуба, объединяющего бизнес, науку, искусство и культуру',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    cost: '150 000 ₽',
    duration: '2 недели',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/4514b74c-e7d5-4b17-93f4-79db0781afd5.png',
    link: 'https://mu-se.ru/',
    category: 'Дизайн',
  },
  {
    title: 'Доска объявлений для UA рынка',
    desc: 'Создали дизайн доски объявлений с функционалом как у Авито для украинского рынка',
    tech: ['Figma', 'UI/UX Design', 'Design System'],
    cost: '150 000 ₽',
    duration: '3 недели',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/ea32fe55-bfa1-42da-80e0-bbe4629bc0b5.png',
    link: '#',
    category: 'Дизайн',
  },
  {
    title: 'Онлайн-магазин автомобилей',
    desc: 'Создали онлайн-магазин для крупнейшего автодилера Республики Беларусь с каталогом, фильтрами и личным кабинетом',
    tech: ['PHP Laravel', 'Laravel Nova', 'React.js'],
    cost: '430 000 ₽',
    duration: '2 месяца',
    image: 'https://cdn.poehali.dev/files/94295911-ca72-4f6d-bc90-bb19dd8156f1.jpg',
    link: 'https://avmmotors.by/',
    category: 'Разработка',
  },
  {
    title: 'Онлайн-магазин электротранспорта',
    desc: 'Создали онлайн-магазин электробайков и электросамокатов с системой онлайн-оплаты и доставки',
    tech: ['PHP Laravel', 'Laravel Nova', 'React.js'],
    cost: '150 000 ₽',
    duration: '1 месяц',
    image: 'https://cdn.poehali.dev/files/cdb86a51-0bf6-436e-b9cd-6847e63f1501.jpg',
    link: 'https://electroby.by/',
    category: 'Разработка',
  },
  {
    title: 'Премиум сайт-приложение цифрового агентства',
    desc: 'Разработали премиальный сайт-приложение с уникальной док-навигацией и анимациями под ключ',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    cost: '150 000 ₽',
    duration: '2 недели',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/10e9d78f-c6f8-449f-a9b4-1b173d22a6ee.png',
    link: 'https://albe.su/',
    category: 'Разработка',
  },
  {
    title: 'Элитный женский клуб',
    desc: 'Разработали премиальный сайт для женского клуба с элегантным дизайном и плавными анимациями',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    cost: '150 000 ₽',
    duration: '2 недели',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/4514b74c-e7d5-4b17-93f4-79db0781afd5.png',
    link: 'https://mu-se.ru/',
    category: 'Разработка',
  },
  {
    title: 'Доска объявлений для UA рынка',
    desc: 'Разработали полнофункциональную доску объявлений с поиском, категориями, чатом и личным кабинетом',
    tech: ['React', 'Python', 'PostgreSQL', 'Redis'],
    cost: '500 000 ₽',
    duration: '2 месяца',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/ea32fe55-bfa1-42da-80e0-bbe4629bc0b5.png',
    link: '#',
    category: 'Разработка',
  },
];

const Portfolio = () => {
  const handleOrderProject = () => {
    window.open('https://t.me/albe_web', '_blank');
  };

  const handleQuiz = () => {
    window.location.href = '/quiz';
  };

  return (
    <AppLayout>
      <SEO
        title="Портфолио — Наши проекты и кейсы"
        description="Портфолио ALBE Digital Agency: готовые сайты, мобильные приложения, CRM/ERP системы. Работали с Аэрофлот, Лукойл, Forbes, Mercedes-Benz, S7 Airlines, Сбер, МегаФон. 30+ успешных кейсов."
        path="/portfolio"
        keywords="портфолио веб студии, примеры работ, кейсы разработки, готовые сайты, примеры сайтов"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Портфолио проектов',
          description: 'Реализованные проекты ALBE Digital Agency',
        }}
      />
      <PageTransition>
        <PageContainer>
          <PageTitle>ПОРТФОЛИО</PageTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {allCases.map((project, index) => {
              const categoryStyle = categoryColors[project.category];
              
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'rgba(11,15,31,0.85)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="absolute top-4 right-4 z-10">
                    <div
                      className="px-3 py-1.5 rounded-lg font-montserrat text-xs font-medium uppercase tracking-wide flex items-center gap-2"
                      style={{
                        background: categoryStyle.bgColor,
                        color: '#ffffff',
                        boxShadow: `0 4px 12px ${categoryStyle.color}40`,
                      }}
                    >
                      {project.category}
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="font-montserrat font-medium text-xl text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg text-xs font-montserrat"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            color: categoryStyle.color,
                            border: `1px solid ${categoryStyle.color}30`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="space-y-1">
                        <div className="text-xs text-zinc-500 uppercase tracking-wide">Стоимость</div>
                        <div className="font-montserrat font-medium text-white">{project.cost}</div>
                      </div>
                      <div className="space-y-1 text-right">
                        <div className="text-xs text-zinc-500 uppercase tracking-wide">Срок</div>
                        <div className="font-montserrat font-medium text-white">{project.duration}</div>
                      </div>
                    </div>

                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 rounded-xl text-center font-montserrat text-sm font-medium uppercase tracking-wide transition-all duration-300 hover:scale-[1.02]"
                        style={{
                          background: categoryStyle.bgColor,
                          color: '#ffffff',
                          boxShadow: `0 4px 12px ${categoryStyle.color}30`,
                        }}
                      >
                        Посмотреть проект
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={handleQuiz} variant="primary">
              Пройти квиз
            </Button>
            <Button onClick={handleOrderProject} variant="secondary">
              Заказать проект
            </Button>
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Portfolio;