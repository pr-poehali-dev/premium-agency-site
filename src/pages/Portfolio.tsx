import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageHeader } from '@/components/Typography';
import Button from '@/components/Button';
import { useCardHover } from '@/hooks/useCardHover';

const categoryColors: { [key: string]: { color: string; bgColor: string } } = {
  'Дизайн': { color: '#2d9d8f', bgColor: 'linear-gradient(135deg, #2d9d8f 0%, #258576 100%)' },
  'Разработка': { color: '#d4a30a', bgColor: 'linear-gradient(135deg, #d4a30a 0%, #b88b08 100%)' },
  'Маркетинг': { color: '#d66b2a', bgColor: 'linear-gradient(135deg, #d66b2a 0%, #bf5f24 100%)' },
};

interface Project {
  title: string;
  desc: string;
  tech: string[];
  cost: string;
  duration: string;
  image: string;
  link: string;
  category: string;
}

const allCases: Project[] = [
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

const ProjectCard = ({ project }: { project: Project }) => {
  const { hoverProps, getHoverStyle } = useCardHover();
  const categoryStyle = categoryColors[project.category];

  return (
    <div
      {...hoverProps}
      className="group hover-card relative rounded-2xl overflow-hidden md:hover:scale-[1.03] md:hover:-translate-y-2 flex flex-col h-full"
      style={getHoverStyle({
        background: 'rgba(11,15,31,0.6)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        backdropFilter: 'blur(10px)',
        willChange: 'transform',
      })}
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

      <div className="relative aspect-[3/2] overflow-hidden bg-black/30">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="p-5 space-y-4 flex flex-col flex-1">
        <h3 className="font-montserrat font-medium text-xl md:text-2xl text-white leading-tight">
          {project.title}
        </h3>
        
        <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-lg text-xs font-montserrat"
              style={{
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2 mt-auto">
          <div>
            <div className="text-sm text-zinc-500 font-montserrat mb-1">Стоимость</div>
            <div className="font-montserrat font-semibold text-base md:text-lg text-white">{project.cost}</div>
          </div>
          <div>
            <div className="text-sm text-zinc-500 font-montserrat mb-1">Срок</div>
            <div className="font-montserrat font-semibold text-base md:text-lg text-white">{project.duration}</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          {project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-montserrat text-base font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: categoryStyle.bgColor,
                color: '#ffffff',
              }}
            >
              Открыть проект
              <Icon name="ExternalLink" size={18} />
            </a>
          )}
          <a
            href="https://t.me/albe_web"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-montserrat text-base font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(78,205,196,0.15)',
              color: '#4ECDC4',
              border: '1px solid rgba(78,205,196,0.3)',
            }}
          >
            Заказать проект
          </a>
          <a
            href="/pricing"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-montserrat text-base font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(78,205,196,0.08)',
              color: '#4ECDC4',
              border: '1px solid rgba(78,205,196,0.2)',
            }}
          >
            Посмотреть все цены
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  
  const categories = ['Все', ...Object.keys(categoryColors)];
  const filteredCases = selectedCategory === 'Все' 
    ? allCases 
    : allCases.filter(c => c.category === selectedCategory);

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
          <PageHeader 
            title="ПОРТФОЛИО" 
            description="Реальные проекты — от лендингов до сложных платформ. Каждый кейс — история успеха клиента." 
            color="#4ECDC4"
          />
          
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-7 py-3 rounded-2xl font-montserrat text-sm md:text-base font-normal uppercase tracking-wider transition-all duration-500 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98]"
                style={{
                  background: selectedCategory === cat 
                    ? 'rgba(11,15,31,0.85)' 
                    : 'rgba(11,15,31,0.5)',
                  border: selectedCategory === cat 
                    ? '1px solid rgba(78,205,196,0.5)' 
                    : '1px solid rgba(255,255,255,0.12)',
                  color: selectedCategory === cat ? '#4ECDC4' : 'rgba(255,255,255,0.7)',
                  boxShadow: selectedCategory === cat 
                    ? '0 4px 20px rgba(78,205,196,0.25), inset 0 1px 0 rgba(78,205,196,0.15)' 
                    : '0 2px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCases.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Portfolio;