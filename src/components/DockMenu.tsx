import Icon from '@/components/ui/icon';
import { useState } from 'react';

const DockMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = [
    { icon: 'House', label: 'Главная' },
    { icon: 'Folder', label: 'Портфолио' },
    { icon: 'Globe', label: 'Веб' },
    { icon: 'Megaphone', label: 'Маркетинг' },
    { icon: 'Zap', label: 'AI' },
    { icon: 'Handshake', label: 'Партнеры' },
    { icon: 'Mail', label: 'Контакты' },
    { icon: 'Users', label: 'О нас' },
    { icon: 'ClipboardList', label: 'Квиз' },
    { icon: 'Grid3x3', label: 'Меню' },
  ];

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const diff = Math.abs(hoveredIndex - index);
    if (diff === 0) return 1.5;
    if (diff === 1) return 1.25;
    if (diff === 2) return 1.1;
    return 1;
  };

  const getTranslateY = (index: number) => {
    if (hoveredIndex === null) return 0;
    const diff = Math.abs(hoveredIndex - index);
    if (diff === 0) return -20;
    if (diff === 1) return -10;
    if (diff === 2) return -4;
    return 0;
  };

  return (
    <nav className="fixed bottom-6 left-0 right-0 px-8 pointer-events-none">
      <div className="relative max-w-fit mx-auto pointer-events-auto">
        <div className="flex items-end justify-center gap-5">
          {menuItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const scale = getScale(index);
            const translateY = getTranslateY(index);

            return (
              <button
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative flex flex-col items-center"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <div className="relative p-2">
                  {isHovered && (
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(234,179,8,0.4) 0%, rgba(234,179,8,0.15) 50%, transparent 70%)',
                        transform: 'scale(2.2)',
                        animation: 'pulseGlow 1.5s ease-in-out infinite',
                      }}
                    />
                  )}
                  <Icon 
                    name={item.icon} 
                    size={36} 
                    className="relative z-10 transition-all duration-300"
                    style={{
                      color: isHovered ? '#fbbf24' : '#eab308',
                      filter: isHovered
                        ? 'drop-shadow(0 0 16px rgba(251,191,36,1)) drop-shadow(0 0 40px rgba(234,179,8,0.7)) drop-shadow(0 0 60px rgba(234,179,8,0.4))'
                        : 'drop-shadow(0 0 8px rgba(234,179,8,0.5))',
                    }}
                  />
                </div>

                <div 
                  className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-300"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: `translateX(-50%) translateY(${isHovered ? '0' : '6px'})`,
                  }}
                >
                  <div className="bg-zinc-900/95 backdrop-blur-xl px-4 py-2 rounded-xl border border-yellow-500/20 shadow-[0_4px_24px_rgba(234,179,8,0.15)]">
                    <span className="text-xs font-medium text-white whitespace-nowrap tracking-wide">
                      {item.label}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(2.2); }
          50% { opacity: 1; transform: scale(2.5); }
        }
      `}</style>
    </nav>
  );
};

export default DockMenu;
