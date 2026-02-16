import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import PageContainer from '@/components/PageContainer';
import { PageHeader, StatCard } from '@/components/Typography';
import Card from '@/components/Card';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamLeaders: TeamMember[] = [
  { 
    name: 'Алексей Беляев', 
    role: 'CEO & Founder', 
    image: 'https://cdn.poehali.dev/files/4b75fe68-6c92-495c-b6b3-2cc430e85cf7.jpg',
  },
  { 
    name: 'Дмитрий', 
    role: 'Senior Java + PHP', 
    image: 'https://cdn.poehali.dev/files/0d701674-3a28-48fa-84ba-6a8dd5bd7188.jpg',
  },
  { 
    name: 'Алексей', 
    role: 'Senior Python + Web3', 
    image: 'https://cdn.poehali.dev/files/8f71d934-2ccd-4633-8b04-e9d279264e57.jpg',
  },
  { 
    name: 'Александр', 
    role: 'Senior JavaScript + PHP', 
    image: 'https://cdn.poehali.dev/files/414fe440-c637-47af-a036-d7090f7412d0.jpg',
  },
];

const stats = [
  { value: '20+', label: 'Специалистов', isNumber: true },
  { value: '30+', label: 'Проектов в год', isNumber: true },
  { value: '7', label: 'Лет опыта', isNumber: true },
  { value: 'СНГ, EU, USA', label: 'Рынки', isNumber: false },
];

const MemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <Card
      className="overflow-hidden"
      background="rgba(11,15,31,0.6)"
      border="1px solid rgba(255,255,255,0.08)"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover object-center grayscale"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="font-montserrat font-light text-base md:text-lg lg:text-xl uppercase mb-2" style={{ color: '#eab308' }}>
          {member.name}
        </h3>
        <p className="font-montserrat font-light text-xs md:text-sm lg:text-base text-white uppercase tracking-wide">
          {member.role}
        </p>
      </div>
    </Card>
  );
};

const Team = () => {
  return (
    <AppLayout>
      <SEO
        title="Команда"
        description="Команда ALBE Digital Agency: 20+ специалистов, 30+ проектов в год, 7 лет опыта. Работаем на рынках СНГ, Европы и США."
        path="/team"
      />
      <PageTransition>
        <PageContainer>
          <PageHeader 
            title="НАША КОМАНДА" 
            description="Профессиональная команда разработчиков, дизайнеров и маркетологов. Каждый — эксперт в своей области." 
            color="#60A5FA"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} isNumber={stat.isNumber} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamLeaders.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Team;