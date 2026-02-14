import Icon from '@/components/ui/icon';
import { useState } from 'react';

const DockMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = [
    { icon: 'House', label: 'Главная', color: '#3b82f6' },
    { icon: 'Folder', label: 'Портфолио', color: '#2563eb' },
    { icon: 'Code', label: 'Разработка', color: '#1d4ed8' },
    { icon: 'TrendingUp', label: 'Маркетинг', color: '#6366f1' },
    { icon: 'Brain', label: 'AI', color: '#8b5cf6' },
    { icon: 'DollarSign', label: 'Стоимость', color: '#a855f7' },
    { icon: 'UserCheck', label: 'Команда', color: '#c026d3' },
    { icon: 'MessageSquareText', label: 'Отзывы', color: '#d946ef' },
    { icon: 'Handshake', label: 'Партнеры', color: '#ec4899' },
    { icon: 'Mail', label: 'Контакты', color: '#f472b6' },
    { icon: 'Users', label: 'О нас', color: '#fb7185' },
    { icon: 'ClipboardList', label: 'Квиз', color: '#f43f5e' },
    { icon: 'LayoutGrid', label: 'Меню', color: '#06b6d4' },
  ];

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

  return (
    <nav className="fixed bottom-6 left-0 right-0 px-8 pointer-events-none">
      <div className="relative max-w-fit mx-auto pointer-events-auto">
        <div
          className="rounded-2xl px-5 py-3"
          style={{
            background: 'rgba(82,82,91,0.08)',
            border: '1px solid rgba(161,161,170,0.2)',
            backdropFilter: 'blur(40px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
          }}
        >
          <div className="flex items-end justify-center gap-4">
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
                  <div className="relative p-3">
                    <div
                      className="absolute inset-0 rounded-[14px] transition-all duration-300"
                      style={{
                        background: isHovered ? `${item.color}15` : 'transparent',
                        border: isHovered ? `1px solid ${item.color}30` : '1px solid transparent',
                      }}
                    />
                    <Icon
                      name={item.icon}
                      size={44}
                      strokeWidth={1.2}
                      className="relative z-10 transition-colors duration-300"
                      style={{ color: item.color }}
                    />
                  </div>

                  <div
                    className="absolute -top-12 left-1/2 pointer-events-none transition-all duration-300"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: `translateX(-50%) translateY(${isHovered ? '0' : '6px'})`,
                    }}
                  >
                    <div className="bg-zinc-900/95 backdrop-blur-xl px-4 py-2 rounded-xl border border-zinc-700/40 shadow-2xl">
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
      </div>
    </nav>
  );
};

export default DockMenu;