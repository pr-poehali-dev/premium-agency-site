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

  return (
    <nav className="fixed bottom-6 left-0 right-0 px-8 pointer-events-none">
      <div className="relative max-w-fit mx-auto pointer-events-auto">
        <div className="flex items-end justify-center gap-5">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col items-center transition-all duration-500 ease-out"
              style={{
                transform: hoveredIndex === index 
                  ? 'translateY(-16px) scale(1.35)' 
                  : hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1
                  ? 'translateY(-8px) scale(1.15)'
                  : hoveredIndex !== null && Math.abs(hoveredIndex - index) === 2
                  ? 'translateY(-3px) scale(1.05)'
                  : 'translateY(0) scale(1)',
              }}
            >
              <div className="relative p-2">
                <Icon 
                  name={item.icon} 
                  size={36} 
                  className="text-yellow-500 group-hover:text-yellow-400 transition-all duration-300 relative z-10 drop-shadow-[0_0_10px_rgba(234,179,8,0.6)] group-hover:drop-shadow-[0_0_20px_rgba(234,179,8,0.9)]" 
                />
              </div>

              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-zinc-900/95 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/10 shadow-2xl">
                  <span className="text-xs font-medium text-white whitespace-nowrap tracking-wide">
                    {item.label}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DockMenu;
