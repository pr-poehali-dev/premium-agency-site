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
    { icon: 'House', label: 'Главная', color: '#FF6B6B', bgColor: 'linear-gradient(135deg, #FF6B6B 0%, #EE5A52 100%)', path: '/' },
    { icon: 'Folder', label: 'Портфолио', color: '#4ECDC4', bgColor: 'linear-gradient(135deg, #4ECDC4 0%, #44B3AA 100%)', path: '/portfolio' },
    { icon: 'Palette', label: 'Дизайн', color: '#95E1D3', bgColor: 'linear-gradient(135deg, #95E1D3 0%, #7CC9B9 100%)', path: '/design' },
    { icon: 'Code', label: 'Разработка', color: '#eab308', bgColor: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)', path: '/development' },
    { icon: 'TrendingUp', label: 'Маркетинг', color: '#FF8C42', bgColor: 'linear-gradient(135deg, #FF8C42 0%, #E67E3C 100%)', path: '/marketing' },
    { icon: 'Brain', label: 'AI', color: '#A78BFA', bgColor: 'linear-gradient(135deg, #A78BFA 0%, #9676E8 100%)', path: '/ai' },
    { icon: 'DollarSign', label: 'Стоимость', color: '#34D399', bgColor: 'linear-gradient(135deg, #34D399 0%, #2AB87A 100%)', path: '/pricing' },
    { icon: 'UserCheck', label: 'Команда', color: '#60A5FA', bgColor: 'linear-gradient(135deg, #60A5FA 0%, #4F8FE8 100%)', path: '/team' },
    { icon: 'MessageSquareText', label: 'Отзывы', color: '#F472B6', bgColor: 'linear-gradient(135deg, #F472B6 0%, #E25FA0 100%)', path: '/reviews' },
    { icon: 'Building2', label: 'Клиенты', color: '#818CF8', bgColor: 'linear-gradient(135deg, #818CF8 0%, #6B76E6 100%)', path: '/partners' },
    { icon: 'Phone', label: 'Контакты', color: '#2DD4BF', bgColor: 'linear-gradient(135deg, #2DD4BF 0%, #26BAAA 100%)', path: '/contact' },
    { icon: 'Users', label: 'О нас', color: '#38BDF8', bgColor: 'linear-gradient(135deg, #38BDF8 0%, #2EA7E6 100%)', path: '/about' },
    { icon: 'ClipboardList', label: 'Квиз', color: '#FBBF24', bgColor: 'linear-gradient(135deg, #FBBF24 0%, #E9AE1E 100%)', path: '/quiz' },
    { icon: 'HelpCircle', label: 'FAQ', color: '#C084FC', bgColor: 'linear-gradient(135deg, #C084FC 0%, #A96FE8 100%)', path: '/faqs' },
  ];

  const menuIcon = { icon: 'LayoutGrid', label: 'Меню', color: '#00F0FF', bgColor: 'linear-gradient(135deg, #00F0FF 0%, #00D4E6 100%)', path: '/menu' };

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
              background: 'linear-gradient(180deg, rgba(82,82,91,0.15) 0%, rgba(82,82,91,0.08) 100%)',
              border: '1px solid rgba(161,161,170,0.25)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.08), inset 0 -2px 4px rgba(0,0,0,0.15)',
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
                    <div 
                      className="relative rounded-lg md:rounded-[14px] transition-all duration-300 flex items-center justify-center overflow-hidden"
                      style={{
                        width: isMobile ? '48px' : '64px',
                        height: isMobile ? '48px' : '64px',
                        background: item.bgColor,
                        boxShadow: isHovered || isActive 
                          ? `0 8px 24px ${item.color}60, 0 4px 12px ${item.color}40, inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)` 
                          : `0 4px 12px ${item.color}30, inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)`,
                        transform: isHovered || isActive ? 'translateY(-2px)' : 'none',
                        opacity: isActive ? 1 : 0.85,
                        border: isActive ? `2px solid ${item.color}` : 'none'
                      }}
                    >
                      <div 
                        className="absolute inset-0 opacity-50"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)'
                        }}
                      />
                      <Icon
                        name={item.icon}
                        size={isMobile ? 24 : 32}
                        strokeWidth={2}
                        className="relative z-10 transition-opacity duration-300"
                        style={{ 
                          color: '#ffffff',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 1px 2px rgba(0,0,0,0.5))'
                        }}
                      />
                    </div>

                    {isActive && (
                      <div 
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300"
                        style={{
                          background: item.color,
                          boxShadow: `0 0 8px ${item.color}80, 0 0 4px ${item.color}`
                        }}
                      />
                    )}

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
                <div 
                  className="relative rounded-lg md:rounded-[14px] transition-all duration-300 flex items-center justify-center overflow-hidden"
                  style={{
                    width: isMobile ? '48px' : '64px',
                    height: isMobile ? '48px' : '64px',
                    background: menuIcon.bgColor,
                    boxShadow: hoveredIndex === visibleItems.length || isMenuOpen
                      ? `0 8px 24px ${menuIcon.color}60, 0 4px 12px ${menuIcon.color}40, inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)` 
                      : `0 4px 12px ${menuIcon.color}30, inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)`,
                    transform: hoveredIndex === visibleItems.length || isMenuOpen ? 'translateY(-2px)' : 'none'
                  }}
                >
                  <div 
                    className="absolute inset-0 opacity-50"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)'
                    }}
                  />
                  <Icon
                    name={menuIcon.icon}
                    size={isMobile ? 24 : 32}
                    strokeWidth={2}
                    className="relative z-10 transition-opacity duration-300"
                    style={{ 
                      color: '#ffffff',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 1px 2px rgba(0,0,0,0.5))'
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
                  className="group relative flex flex-col items-center gap-2 md:gap-3 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95"
                >
                  <div 
                    className="relative rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden"
                    style={{
                      width: isMobile ? '64px' : '96px',
                      height: isMobile ? '64px' : '96px',
                      background: item.bgColor,
                      boxShadow: `0 8px 24px ${item.color}40, 0 4px 12px ${item.color}30, inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)`,
                    }}
                  >
                    <div 
                      className="absolute inset-0 opacity-50"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)'
                      }}
                    />
                    <Icon
                      name={item.icon}
                      size={isMobile ? 32 : 48}
                      strokeWidth={2}
                      className="relative z-10"
                      style={{ 
                        color: '#ffffff',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 1px 2px rgba(0,0,0,0.5))'
                      }}
                    />
                  </div>
                  <span 
                    className="text-[10px] md:text-xs font-montserrat font-light whitespace-nowrap tracking-wide uppercase"
                    style={{ color: item.color }}
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