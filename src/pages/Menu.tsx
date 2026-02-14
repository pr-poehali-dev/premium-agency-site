import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const allPages = [
  { label: 'Главная', path: '/', size: 'large' },
  { label: 'Портфолио', path: '/portfolio', size: 'large' },
  { label: 'Дизайн', path: '/design', size: 'medium' },
  { label: 'Разработка', path: '/development', size: 'medium' },
  { label: 'Маркетинг', path: '/marketing', size: 'medium' },
  { label: 'AI', path: '/ai', size: 'medium' },
  { label: 'Стоимость', path: '/pricing', size: 'small' },
  { label: 'Команда', path: '/team', size: 'small' },
  { label: 'Отзывы', path: '/reviews', size: 'small' },
  { label: 'Клиенты', path: '/partners', size: 'small' },
  { label: 'Контакты', path: '/contact', size: 'small' },
  { label: 'О нас', path: '/about', size: 'small' },
  { label: 'Квиз', path: '/quiz', size: 'small' },
  { label: 'FAQ', path: '/faqs', size: 'small' },
];

const Menu = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-2 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <AppLayout>
      <SEO
        title="Меню"
        description="Навигация по сайту ALBE Digital Agency. Все разделы: разработка, дизайн, маркетинг, AI, портфолио, стоимость, команда."
        path="/menu"
      />
      <PageTransition>
        <div className="fixed inset-0 p-2 sm:p-3 md:p-4 pb-20 overflow-auto" style={{ background: 'rgba(0,0,0,0.95)' }}>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3 max-w-[1800px] mx-auto" style={{ gridAutoRows: '1fr', minHeight: 'calc(100vh - 6rem)' }}>
            {allPages.map((page, index) => (
              <button
                key={page.path}
                onClick={() => navigate(page.path)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 ${getSizeClass(page.size)}`}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: hoveredIndex === index ? '2px solid rgba(234,179,8,0.6)' : '2px solid rgba(234,179,8,0.15)',
                  boxShadow: hoveredIndex === index ? '0 8px 32px rgba(234,179,8,0.2)' : '0 4px 16px rgba(0,0,0,0.3)',
                  minHeight: '150px',
                }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <iframe
                    src={page.path === '/' ? '/' : page.path}
                    className="w-full h-full border-0"
                    style={{
                      transform: 'scale(0.2)',
                      transformOrigin: 'top left',
                      width: '500%',
                      height: '500%',
                      pointerEvents: 'none',
                    }}
                    title={page.label}
                  />
                </div>
                <div 
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)',
                    opacity: hoveredIndex === index ? 0.5 : 1,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                  <span className="font-montserrat text-[10px] md:text-xs font-light tracking-wide uppercase text-white block" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                    {page.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </PageTransition>
    </AppLayout>
  );
};

export default Menu;