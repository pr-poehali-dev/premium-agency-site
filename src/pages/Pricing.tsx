import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageHeader, SectionHeader } from '@/components/Typography';
import Card from '@/components/Card';

interface Plan {
  title: string;
  price: string;
  desc: string;
  icon: string;
  color: string;
  popular?: boolean;
  items: string[];
}

interface ServiceItem {
  title: string;
  price: string;
  icon: string;
}

const plans: Plan[] = [
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

const services: ServiceItem[] = [
  { title: 'Лендинг', price: 'от 10 000 за блок', icon: 'FileText' },
  { title: 'Чат-бот', price: 'от 100 000', icon: 'Bot' },
  { title: 'Корпоративный сайт', price: 'от 200 000', icon: 'Building2' },
  { title: 'Интернет-магазин', price: 'от 300 000', icon: 'ShoppingCart' },
  { title: 'Веб-приложение', price: 'от 400 000', icon: 'AppWindow' },
  { title: 'Мобильное приложение', price: 'от 500 000', icon: 'Smartphone' },
  { title: 'Корпоративный портал', price: 'от 600 000', icon: 'Network' },
  { title: 'CRM/ERP', price: 'от 800 000', icon: 'Database' },
  { title: 'Разработка ИИ решений', price: 'от 1 000 000', icon: 'Brain' },
];

const support: ServiceItem[] = [
  { title: 'Консультация', price: 'бесплатно', icon: 'MessageCircle' },
  { title: 'Составление технического задания', price: 'бесплатно', icon: 'ClipboardCheck' },
  { title: 'Дизайн UI/UX', price: 'от 20 000', icon: 'Palette' },
  { title: 'SEO оптимизация', price: 'от 30 000', icon: 'TrendingUp' },
  { title: 'Доработка проекта', price: 'по согласованию', icon: 'Wrench' },
  { title: 'Техническая поддержка', price: 'по согласованию', icon: 'Headphones' },
];

const PlanCard = ({ plan }: { plan: Plan }) => {
  return (
    <Card
      className="relative"
      background={plan.popular ? 'rgba(52,211,153,0.06)' : 'rgba(11,15,31,0.6)'}
      border={`1px solid ${plan.popular ? 'rgba(52,211,153,0.3)' : 'rgba(255,255,255,0.08)'}`}
    >
      {plan.popular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-sm font-bold"
          style={{ background: '#34D399', color: '#000' }}
        >
          ПОПУЛЯРНЫЙ
        </div>
      )}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl" style={{ background: 'rgba(52,211,153,0.15)' }}>
          <Icon name={plan.icon} size={24} style={{ color: '#34D399' }} />
        </div>
        <div>
          <h3 className="font-montserrat font-light text-base md:text-lg lg:text-xl uppercase" style={{ color: '#34D399' }}>
            {plan.title}
          </h3>
          <p className="font-montserrat text-white text-xs md:text-sm lg:text-base">{plan.desc}</p>
        </div>
      </div>
      <div className="font-montserrat font-bold text-xl md:text-2xl lg:text-3xl text-white mb-4">{plan.price}</div>
      <ul className="space-y-2">
        {plan.items.map((item) => (
          <li key={item} className="font-montserrat text-white text-sm md:text-base lg:text-lg flex items-center gap-2">
            <Icon name="Check" size={16} style={{ color: '#34D399' }} />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
};

const ServiceItemCard = ({ item }: { item: ServiceItem }) => {
  return (
    <Card
      background="rgba(11,15,31,0.6)"
      border="1px solid rgba(255,255,255,0.08)"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg" style={{ background: 'rgba(52,211,153,0.15)' }}>
          <Icon name={item.icon} size={20} style={{ color: '#34D399' }} />
        </div>
        <h4 className="font-montserrat font-light text-sm md:text-base lg:text-lg uppercase" style={{ color: '#34D399' }}>{item.title}</h4>
      </div>
      <p className="font-montserrat text-sm md:text-base lg:text-lg text-white ml-11">{item.price}</p>
    </Card>
  );
};

const Pricing = () => {
  return (
    <AppLayout>
      <SEO
        title="Стоимость разработки сайтов и приложений"
        description="Цены на разработку сайтов, мобильных приложений, дизайн и маркетинг. Лендинг от 10 000₽/блок, корпоративный сайт от 200 000₽, мобильное приложение от 500 000₽, CRM/ERP от 800 000₽. Калькулятор стоимости."
        path="/pricing"
        keywords="стоимость разработки сайта, цена создания сайта, разработка сайта цена, стоимость мобильного приложения, цены на дизайн, стоимость crm"
      />
      <PageTransition>
        <PageContainer>
          <PageHeader 
            title="СТОИМОСТЬ УСЛУГ" 
            description="Прозрачное ценообразование без скрытых платежей. Выбирайте пакет или закажите индивидуальное решение под ваш бюджет." 
            color="#34D399"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {plans.map((plan) => (
              <PlanCard key={plan.title} plan={plan} />
            ))}
          </div>

          <SectionHeader 
            title="РАЗРАБОТКА" 
            description="Разрабатываем под ключ — от простого лендинга до сложных AI-платформ." 
            color="#34D399"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-24">
            {services.map((service) => (
              <ServiceItemCard key={service.title} item={service} />
            ))}
          </div>

          <SectionHeader 
            title="ПОДДЕРЖКА И АНАЛИТИКА" 
            description="Консультации, техническая поддержка, доработки — мы всегда на связи." 
            color="#34D399"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {support.map((item) => (
              <ServiceItemCard key={item.title} item={item} />
            ))}
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Pricing;