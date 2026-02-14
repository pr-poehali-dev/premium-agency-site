import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const allPages = [
  { icon: 'House', label: 'Главная', path: '/', color: '#fbbf24' },
  { icon: 'Folder', label: 'Портфолио', path: '/portfolio', color: '#fcd34d' },
  { icon: 'Palette', label: 'Дизайн', path: '/design', color: '#fde68a' },
  { icon: 'Code', label: 'Разработка', path: '/development', color: '#fef08a' },
  { icon: 'TrendingUp', label: 'Маркетинг', path: '/marketing', color: '#fef9c3' },
  { icon: 'Brain', label: 'AI', path: '/ai', color: '#bef264' },
  { icon: 'DollarSign', label: 'Стоимость', path: '/pricing', color: '#86efac' },
  { icon: 'UserCheck', label: 'Команда', path: '/team', color: '#6ee7b7' },
  { icon: 'MessageSquareText', label: 'Отзывы', path: '/reviews', color: '#5eead4' },
  { icon: 'Building2', label: 'Клиенты', path: '/partners', color: '#2dd4bf' },
  { icon: 'Phone', label: 'Контакты', path: '/contact', color: '#22d3ee' },
  { icon: 'Users', label: 'О нас', path: '/about', color: '#38bdf8' },
  { icon: 'ClipboardList', label: 'Квиз', path: '/quiz', color: '#818cf8' },
  { icon: 'HelpCircle', label: 'FAQ', path: '/faqs', color: '#a78bfa' },
];

const Menu = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <SEO
        title="Меню"
        description="Навигация по сайту ALBE Digital Agency. Все разделы: разработка, дизайн, маркетинг, AI, портфолио, стоимость, команда."
        path="/menu"
      />
      <PageTransition>
        <div className="p-2 sm:p-5 pb-32 min-h-[80vh] flex items-center justify-center">
          <div
            className="rounded-3xl w-full max-w-4xl"
            style={{
              background: 'rgba(82,82,91,0.08)',
              border: '1px solid rgba(161,161,170,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
            }}
          >
            <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10">
              <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center uppercase" style={{ color: '#eab308' }}>
                ВСЕ РАЗДЕЛЫ
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 w-full">
                {allPages.map((page) => (
                  <button
                    key={page.path}
                    onClick={() => navigate(page.path)}
                    className="group rounded-2xl p-4 md:p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-[1.03] active:scale-95"
                    style={{
                      background: 'rgba(234,179,8,0.08)',
                      border: '1px solid rgba(234,179,8,0.2)',
                    }}
                  >
                    <Icon 
                      name={page.icon} 
                      size={44} 
                      strokeWidth={1.2} 
                      style={{ 
                        color: '#eab308',
                        filter: 'drop-shadow(0 0 8px rgba(234,179,8,0.3))'
                      }} 
                    />
                    <span className="font-montserrat text-xs font-light tracking-wide uppercase" style={{ color: '#eab308' }}>
                      {page.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </AppLayout>
  );
};

export default Menu;