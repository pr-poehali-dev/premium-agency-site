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
        {/* Reserve space for hover effect */}
        <div className="h-28" />
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          {/* macOS Dock glass effect */}
          <div className="backdrop-blur-3xl bg-gradient-to-b from-white/[0.15] to-white/[0.05] border border-white/20 rounded-[24px] px-8 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] relative">
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-end justify-center gap-6 relative">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative flex flex-col items-center transition-all duration-500 ease-out"
                  style={{
                    transform: hoveredIndex === index 
                      ? 'translateY(-24px) scale(1.35)' 
                      : hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1
                      ? 'translateY(-12px) scale(1.15)'
                      : hoveredIndex !== null && Math.abs(hoveredIndex - index) === 2
                      ? 'translateY(-4px) scale(1.05)'
                      : 'translateY(0) scale(1)',
                  }}
                >
                  {/* Reflection effect */}
                  <div className="absolute -bottom-12 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <Icon 
                      name={item.icon} 
                      size={48} 
                      className="text-white/40 blur-sm transform scale-y-[-1]" 
                    />
                  </div>

                  {/* Icon container with glow */}
                  <div className="relative p-3 rounded-2xl transition-all duration-300 group-hover:bg-white/10">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 via-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                    <Icon 
                      name={item.icon} 
                      size={hoveredIndex === index ? 48 : 40} 
                      className="text-white/80 group-hover:text-white transition-all duration-300 relative z-10 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" 
                    />
                  </div>

                  {/* Label on hover */}
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

          {/* Bottom indicator line */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
        </div>
      </div>
    </nav>
  );
};

export default DockMenu;