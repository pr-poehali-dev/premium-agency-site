import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const allPages = [
  { label: 'Главная', path: '/' },
  { label: 'Портфолио', path: '/portfolio' },
  { label: 'Дизайн', path: '/design' },
  { label: 'Разработка', path: '/development' },
  { label: 'Маркетинг', path: '/marketing' },
  { label: 'AI', path: '/ai' },
  { label: 'Стоимость', path: '/pricing' },
  { label: 'Команда', path: '/team' },
  { label: 'Отзывы', path: '/reviews' },
  { label: 'Клиенты', path: '/partners' },
  { label: 'Контакты', path: '/contact' },
  { label: 'О нас', path: '/about' },
  { label: 'Квиз', path: '/quiz' },
  { label: 'FAQ', path: '/faqs' },
];

const Menu = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  useEffect(() => {
    iframeRefs.current.forEach((iframe) => {
      if (iframe) {
        iframe.style.pointerEvents = 'none';
      }
    });
  }, []);

  return (
    <AppLayout>
      <SEO
        title="Меню"
        description="Навигация по сайту ALBE Digital Agency. Все разделы: разработка, дизайн, маркетинг, AI, портфолио, стоимость, команда."
        path="/menu"
      />
      <PageTransition>
        <div className="fixed inset-0 p-4 sm:p-6 md:p-8 pb-24 overflow-auto" style={{ background: 'rgba(0,0,0,0.95)' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 max-w-[2000px] mx-auto">
            {allPages.map((page, index) => (
              <button
                key={page.path}
                onClick={() => navigate(page.path)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: hoveredIndex === index ? '2px solid rgba(234,179,8,0.5)' : '2px solid rgba(234,179,8,0.2)',
                  aspectRatio: '16/10',
                }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <iframe
                    ref={(el) => (iframeRefs.current[index] = el)}
                    src={page.path === '/' ? '/' : page.path}
                    className="w-full h-full border-0"
                    style={{
                      transform: 'scale(0.25)',
                      transformOrigin: 'top left',
                      width: '400%',
                      height: '400%',
                      pointerEvents: 'none',
                    }}
                    title={page.label}
                  />
                </div>
                <div 
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                    opacity: hoveredIndex === index ? 0.6 : 1,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                  <span className="font-montserrat text-xs md:text-sm font-light tracking-wide uppercase text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
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