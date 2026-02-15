import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageTitle, SectionTitle } from '@/components/Typography';
import { useCardHover } from '@/hooks/useCardHover';

interface Service {
  title: string;
  icon: string;
  desc: string;
  number: string;
  image: string;
}

interface TechStack {
  title: string;
  color: string;
  items: string[];
}

const services: Service[] = [
  {
    title: 'МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ',
    icon: 'Smartphone',
    desc: 'Разрабатываем нативные и кроссплатформенные приложения для iOS и Android. От стартапов до корпоративных решений с миллионами пользователей.',
    number: '01',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/38e5b32c-9948-4145-8651-b4d011c06fec.jpg',
  },
  {
    title: 'ВЕБ-ПЛАТФОРМЫ',
    icon: 'Globe',
    desc: 'Создаем высоконагруженные веб-приложения и SaaS-платформы. Современный стек, микросервисная архитектура, масштабируемость.',
    number: '02',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/8d6e9c19-ce7c-4d13-87b4-f5a675ba34f1.jpg',
  },
  {
    title: 'CRM/ERP СИСТЕМЫ',
    icon: 'Database',
    desc: 'Проектируем и внедряем системы управления бизнес-процессами. Автоматизация продаж, складской учет, управление ресурсами.',
    number: '03',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/6dfd2bcb-310a-457f-80a1-5ae3aac4ee38.jpg',
  },
  {
    title: 'AI РЕШЕНИЯ',
    icon: 'Brain',
    desc: 'Внедряем искусственный интеллект в ваш бизнес: машинное обучение, компьютерное зрение, NLP, аналитика Big Data.',
    number: '04',
    image: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/ada904a0-b96d-4aa3-8c06-082226fe412e.jpg',
  },
];

const techStack: TechStack[] = [
  {
    title: 'BACKEND',
    color: '#a855f7',
    items: ['JavaScript/TypeScript', 'C++', 'Node.js', 'Python', 'PostgreSQL/MS SQL', 'MongoDB', 'Redis', 'Elasticsearch', 'RabbitMQ/ActiveMQ'],
  },
  {
    title: 'FRONTEND',
    color: '#3b82f6',
    items: ['JavaScript/React', 'HTML5', 'CSS3', 'SASS/Less', 'Typescript', 'Redux SSR'],
  },
  {
    title: 'DEVOPS',
    color: '#22c55e',
    items: ['GAP', 'Kubernetes', 'Yandex Cloud', 'Selectel', 'Gitlab', 'Terraform', 'Ansible', 'ArgoCD', 'Jenkins'],
  },
  {
    title: 'QA',
    color: '#ef4444',
    items: ['TestRail', 'Postman', 'Swagger', 'Fiddler', 'Charles', 'JMeter'],
  },
  {
    title: 'АНАЛИТИКА',
    color: '#8b5cf6',
    items: ['UML 2.x', 'BPMN 2.x', 'FIGMA', 'Sparx Enterprise Architect', 'ISO/IEC и ISO/IEC/IEEE', 'SCRUM'],
  },
  {
    title: 'ANDROID / IOS',
    color: '#06b6d4',
    items: ['React Native / Expo', 'JS / TS', 'Java/Kotlin', 'Objective C / Swift', 'Redux / RTK / RTKQ / Reanimated / Skia'],
  },
  {
    title: 'AI TECH',
    color: '#f97316',
    items: ['ML/DL/NLP, Graph analytics', 'Computer Vision', 'Voice technologies ASR/NLP/NLU/TTS', 'Python, Pandas, CatBoost, Sklearn, Airflow, sqlalchemy, Falcon, Django', 'data analytics, NLP, CatBoost, OpenVINO, MediaPipe'],
  },
  {
    title: 'ДОПОЛНИТЕЛЬНЫЕ КОМПЕТЕНЦИИ',
    color: '#eab308',
    items: ['Используем в работе современные технологии: AI, Machine Learning, Deep Learning, Computer Vision, технологии анализа Big Data и адаптивные алгоритмы', 'Trading аналитика', 'Blockchain аналитика'],
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  const { hoverProps, getHoverStyle } = useCardHover();

  return (
    <div
      {...hoverProps}
      className="hover-card group relative rounded-3xl overflow-hidden md:hover:scale-[1.02]"
      style={getHoverStyle({
        background: 'rgba(11,15,31,0.7)',
        border: '1px solid rgba(255,255,255,0.08)',
      })}
    >
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />
        
        <div className="absolute top-6 left-6 font-montserrat text-6xl font-bold opacity-20">
          {service.number}
        </div>
      </div>
      
      <div className="relative p-8">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:rotate-12"
          style={{ background: 'rgba(212,163,10,0.15)' }}
        >
          <Icon name={service.icon} size={28} style={{ color: '#d4a30a' }} />
        </div>

        <h3 className="font-montserrat font-semibold text-xl uppercase mb-3 tracking-tight" style={{ color: '#d4a30a' }}>
          {service.title}
        </h3>

        <p className="font-montserrat text-zinc-300 text-sm leading-relaxed">
          {service.desc}
        </p>
      </div>
    </div>
  );
};

const TechStackCard = ({ stack }: { stack: TechStack }) => {
  const { hoverProps, getHoverStyle } = useCardHover();

  return (
    <div
      {...hoverProps}
      className="hover-card rounded-xl p-4"
      style={getHoverStyle({
        background: 'rgba(11,15,31,0.7)',
        border: `1px solid #d4a30a20`,
      })}
    >
      <h4
        className="font-montserrat font-semibold text-base mb-3 pb-2 uppercase"
        style={{ color: '#d4a30a', borderBottom: `1px solid #d4a30a20` }}
      >
        {stack.title}
      </h4>
      <ul className="space-y-1.5">
        {stack.items.map((item) => (
          <li key={item} className="font-montserrat text-white text-sm leading-relaxed flex items-start gap-2">
            <span className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: '#d4a30a' }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Development = () => {
  return (
    <AppLayout>
      <SEO
        title="Разработка сайтов и мобильных приложений"
        description="Профессиональная разработка сайтов, мобильных приложений, CRM/ERP систем и AI-решений под ключ. Используем React, Node.js, Python, TypeScript. 7 лет опыта. Работаем с Аэрофлот, Сбер, МегаФон."
        path="/development"
        keywords="разработка сайтов, создание сайтов, веб разработка, разработка мобильных приложений, разработка crm, разработка erp, ai разработка, react разработка, node js разработка, python разработка"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Разработка сайтов и приложений',
          provider: {
            '@type': 'Organization',
            name: 'ALBE Digital Agency',
          },
          serviceType: 'Web Development',
          areaServed: ['RU', 'US', 'EU'],
        }}
      />
      <PageTransition>
        <PageContainer>
          <div className="mb-16">
            <PageTitle>РАЗРАБОТКА</PageTitle>
            <p className="text-zinc-400 font-montserrat text-xl max-w-3xl mt-6 leading-relaxed">
              Создаем технологические продукты, которые масштабируются. Современный стек, чистый код, надежная архитектура — проекты, которыми гордимся.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          <div className="mb-16">
            <SectionTitle>СТЕК ТЕХНОЛОГИЙ</SectionTitle>
            <p className="text-zinc-400 font-montserrat text-lg max-w-3xl leading-relaxed text-center mx-auto">
              Используем проверенные и современные технологии. Выбираем инструменты под задачу — не гонимся за хайпом, а создаем надежные решения.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((stack) => (
              <TechStackCard key={stack.title} stack={stack} />
            ))}
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Development;