import Icon from '@/components/ui/icon';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const DockMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(13);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { icon: 'House', label: 'Главная', color: '#fbbf24', path: '/' },
    { icon: 'Folder', label: 'Портфолио', color: '#fcd34d', path: '/portfolio' },
    { icon: 'Palette', label: 'Дизайн', color: '#fde68a', path: '/design' },
    { icon: 'Code', label: 'Разработка', color: '#fef08a', path: '/development' },
    { icon: 'TrendingUp', label: 'Маркетинг', color: '#fef9c3', path: '/marketing' },
    { icon: 'Brain', label: 'AI', color: '#bef264', path: '/ai' },
    { icon: 'DollarSign', label: 'Стоимость', color: '#86efac', path: '/pricing' },
    { icon: 'UserCheck', label: 'Команда', color: '#6ee7b7', path: '/team' },
    { icon: 'MessageSquareText', label: 'Отзывы', color: '#5eead4', path: '/reviews' },
    { icon: 'Building2', label: 'Клиенты', color: '#2dd4bf', path: '/partners' },
    { icon: 'Phone', label: 'Контакты', color: '#22d3ee', path: '/contact' },
    { icon: 'Users', label: 'О нас', color: '#38bdf8', path: '/about' },
    { icon: 'ClipboardList', label: 'Квиз', color: '#818cf8', path: '/quiz' },
    { icon: 'HelpCircle', label: 'FAQ', color: '#a78bfa', path: '/faqs' },
  ];

  const menuIcon = { icon: 'LayoutGrid', label: 'Меню', color: '#06b6d4', path: '/menu' };

  useEffect(() => {
    const calculateVisible = () => {
      const width = window.innerWidth;
      const isMobile = width < 768;
      const iconWidth = isMobile ? 50 : 70;
      const gap = isMobile ? 8 : 16;
      const padding = isMobile ? 40 : 80;
      const menuIconSpace = iconWidth + gap;
      
      const availableWidth = width - padding - menuIconSpace;
      const maxIcons = Math.floor(availableWidth / (iconWidth + gap));
      
      setVisibleCount(Math.min(Math.max(maxIcons, 2), menuItems.length));
    };

    calculateVisible();
    window.addEventListener('resize', calculateVisible);
    return () => window.removeEventListener('resize', calculateVisible);
  }, []);

  const visibleItems = menuItems.slice(0, visibleCount);
  const hiddenItems = menuItems.slice(visibleCount);

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const diff = Math.abs(hoveredIndex - index);
    if (diff === 0) return 1.45;
    if (diff === 1) return 1.2;
    if (diff === 2) return 1.08;
    return 1;
  };

  const getTranslateY = (index: number) => {
    if (hoveredIndex === null) return 0;
    const diff = Math.abs(hoveredIndex - index);
    if (diff === 0) return -22;
    if (diff === 1) return -10;
    if (diff === 2) return -3;
    return 0;
  };

  const handleMenuClick = () => {
    if (hiddenItems.length > 0) {
      setIsMenuOpen(!isMenuOpen);
    } else {
      navigate('/menu');
    }
  };

  const handleItemClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="75%">
            <stop offset="0%" stopColor="#eab308" stopOpacity="1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
      <nav className="fixed bottom-3 md:bottom-5 left-0 right-0 px-2 md:px-5 pointer-events-none z-[10000]" style={{ willChange: 'auto' }}>
        <div className="relative w-full md:max-w-fit mx-auto pointer-events-auto" ref={containerRef}>
          <div
            className="rounded-xl md:rounded-2xl px-3 py-2 md:px-5 md:py-3"
            style={{
              background: 'rgba(82,82,91,0.08)',
              border: '1px solid rgba(161,161,170,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
            }}
          >
            <div className="flex items-end justify-center gap-2 md:gap-4">
              {visibleItems.map((item, index) => {
                const isHovered = hoveredIndex === index;
                const scale = getScale(index);
                const translateY = getTranslateY(index);
                const isActive = location.pathname === item.path;

                return (
                  <button
                    key={index}
                    onClick={() => handleItemClick(item.path)}
                    onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                    onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                    className="relative flex flex-col items-center"
                    style={{
                      transform: isMobile ? 'none' : `translateY(${translateY}px) scale(${scale})`,
                      transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    <div className="relative p-2 md:p-3">
                      <div
                        className="absolute inset-0 rounded-lg md:rounded-[14px] transition-all duration-300"
                        style={{
                          background: isHovered || isActive ? 'rgba(234,179,8,0.08)' : 'transparent',
                          border: isHovered || isActive ? '1px solid rgba(234,179,8,0.2)' : '1px solid transparent',
                        }}
                      />
                      <Icon
                        name={item.icon}
                        size={isMobile ? 28 : 44}
                        strokeWidth={1.2}
                        className="relative z-10 transition-opacity duration-300"
                        style={{ 
                          color: '#eab308',
                          filter: 'drop-shadow(0 0 8px rgba(234,179,8,0.3))'
                        }}
                      />
                    </div>

                    {!isMobile && (
                      <div
                        className="absolute -top-12 left-1/2 pointer-events-none transition-all duration-300"
                        style={{
                          opacity: isHovered ? 1 : 0,
                          transform: `translateX(-50%) translateY(${isHovered ? '0' : '6px'})`,
                        }}
                      >
                        <div className="bg-zinc-900/95 backdrop-blur-xl px-4 py-2 rounded-xl border border-zinc-700/40 shadow-2xl">
                          <span className="text-xs font-montserrat font-light text-white whitespace-nowrap tracking-wide uppercase">
                            {item.label}
                          </span>
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}

              <button
                onClick={handleMenuClick}
                onMouseEnter={() => !isMobile && setHoveredIndex(visibleItems.length)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                className="relative flex flex-col items-center"
                style={{
                  transform: isMobile ? 'none' : `translateY(${getTranslateY(visibleItems.length)}px) scale(${getScale(visibleItems.length)})`,
                  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <div className="relative p-2 md:p-3">
                  <div
                    className="absolute inset-0 rounded-lg md:rounded-[14px] transition-all duration-300"
                    style={{
                      background: hoveredIndex === visibleItems.length || isMenuOpen ? 'rgba(234,179,8,0.08)' : 'transparent',
                      border: hoveredIndex === visibleItems.length || isMenuOpen ? '1px solid rgba(234,179,8,0.2)' : '1px solid transparent',
                    }}
                  />
                  <Icon
                    name={menuIcon.icon}
                    size={isMobile ? 28 : 44}
                    strokeWidth={1.2}
                    className="relative z-10 transition-opacity duration-300"
                    style={{ 
                      color: '#eab308',
                      filter: 'drop-shadow(0 0 8px rgba(234,179,8,0.3))'
                    }}
                  />
                  {hiddenItems.length > 0 && (
                    <div 
                      className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-bold"
                      style={{
                        background: '#eab308',
                        color: '#000',
                      }}
                    >
                      {hiddenItems.length}
                    </div>
                  )}
                </div>

                {!isMobile && (
                  <div
                    className="absolute -top-12 left-1/2 pointer-events-none transition-all duration-300"
                    style={{
                      opacity: hoveredIndex === visibleItems.length ? 1 : 0,
                      transform: `translateX(-50%) translateY(${hoveredIndex === visibleItems.length ? '0' : '6px'})`,
                    }}
                  >
                    <div className="bg-zinc-900/95 backdrop-blur-xl px-4 py-2 rounded-xl border border-zinc-700/40 shadow-2xl">
                      <span className="text-xs font-montserrat font-light text-white whitespace-nowrap tracking-wide uppercase">
                        {menuIcon.label}
                      </span>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && hiddenItems.length > 0 && (
        <div 
          className="fixed inset-0 z-40 flex items-center justify-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            style={{ animation: 'fadeIn 0.2s ease-out' }}
          />
          
          <div 
            className="relative z-50 rounded-2xl md:rounded-3xl p-4 md:p-8 mx-4"
            style={{
              background: 'rgba(82,82,91,0.08)',
              border: '1px solid rgba(161,161,170,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
              animation: 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {hiddenItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(item.path)}
                  className="group relative flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95"
                  style={{
                    background: 'rgba(234,179,8,0.08)',
                    border: '1px solid rgba(234,179,8,0.2)',
                  }}
                >
                  <Icon
                    name={item.icon}
                    size={isMobile ? 28 : 44}
                    strokeWidth={1.2}
                    style={{ 
                      color: '#eab308',
                      filter: 'drop-shadow(0 0 8px rgba(234,179,8,0.3))'
                    }}
                  />
                  <span 
                    className="text-[10px] md:text-xs font-montserrat font-light whitespace-nowrap tracking-wide uppercase"
                    style={{ color: '#eab308' }}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.85);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default DockMenu;