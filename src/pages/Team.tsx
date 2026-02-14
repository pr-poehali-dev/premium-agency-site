import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';

const teamMembers = [
  { icon: 'UserCircle', name: 'CEO & Founder', role: 'Стратегия и управление', color: '#bef264' },
  { icon: 'Code2', name: 'Lead Developer', role: 'Архитектура и разработка', color: '#a3e635' },
  { icon: 'Palette', name: 'Head of Design', role: 'UI/UX и визуальный язык', color: '#84cc16' },
  { icon: 'Brain', name: 'AI Engineer', role: 'ML/DL модели и NLP', color: '#65a30d' },
  { icon: 'TrendingUp', name: 'Marketing Lead', role: 'Стратегия продвижения', color: '#bef264' },
  { icon: 'Shield', name: 'DevOps Engineer', role: 'Инфраструктура и CI/CD', color: '#a3e635' },
  { icon: 'TestTube', name: 'QA Lead', role: 'Тестирование и качество', color: '#84cc16' },
  { icon: 'FileText', name: 'Business Analyst', role: 'Аналитика и требования', color: '#65a30d' },
];

const stats = [
  { value: '50+', label: 'Специалистов' },
  { value: '200+', label: 'Проектов' },
  { value: '8+', label: 'Лет опыта' },
  { value: '15+', label: 'Стран' },
];

const Team = () => {
  return (
    <AppLayout>
      <SEO
        title="Команда"
        description="Команда ALBE Digital Agency: 50+ специалистов в разработке, дизайне, AI, маркетинге. 200+ реализованных проектов за 8 лет."
        path="/team"
      />
      <PageTransition>
        <div className="p-2 sm:p-5 pb-32">
          <div
            className="rounded-3xl"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(190,242,100,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6 text-center uppercase" style={{ color: '#bef264' }}>
                НАША КОМАНДА
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl" style={{ background: 'rgba(190,242,100,0.05)', border: '1px solid rgba(190,242,100,0.1)' }}>
                    <div className="font-montserrat font-bold text-2xl text-white">{stat.value}</div>
                    <div className="font-montserrat text-zinc-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="rounded-2xl p-3 sm:p-5 text-center transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${member.color}15`,
                    }}
                  >
                    <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-3" style={{ background: `${member.color}15` }}>
                      <Icon name={member.icon} size={28} style={{ color: member.color }} />
                    </div>
                    <h3 className="font-montserrat font-semibold text-base text-white mb-1">{member.name}</h3>
                    <p className="font-montserrat text-zinc-500 text-sm">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </AppLayout>
  );
};

export default Team;