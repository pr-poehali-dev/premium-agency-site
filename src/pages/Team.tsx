import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageTitle } from '@/components/Typography';

const teamLeaders = [
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
  { value: '20+', label: 'Специалистов' },
  { value: '30+', label: 'Проектов в год' },
  { value: '7', label: 'Лет опыта' },
  { value: 'СНГ, EU, USA', label: 'Рынки' },
];

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
          <PageTitle>НАША КОМАНДА</PageTitle>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl" style={{ background: 'rgba(11,15,31,0.7)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="font-montserrat font-light text-xl md:text-2xl text-white">{stat.value}</div>
                <div className="font-montserrat font-light text-white text-xs md:text-sm uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamLeaders.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: 'rgba(11,15,31,0.7)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center grayscale"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-montserrat font-light text-base md:text-lg uppercase mb-2" style={{ color: '#eab308' }}>
                    {member.name}
                  </h3>
                  <p className="font-montserrat font-light text-xs md:text-sm text-white uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Team;