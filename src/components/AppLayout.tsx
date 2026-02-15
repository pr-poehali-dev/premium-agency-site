import { ReactNode } from 'react';
import DockMenu from '@/components/DockMenu';
import PremiumBackground from '@/components/PremiumBackground';
import Icon from '@/components/ui/icon';
import { useTheme } from '@/contexts/ThemeContext';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <PremiumBackground />
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
      <DockMenu />
      
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-[30000] p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        style={{
          background: theme === 'dark' 
            ? 'rgba(234,179,8,0.1)' 
            : 'rgba(255,255,255,0.8)',
          border: theme === 'dark'
            ? '1px solid rgba(234,179,8,0.3)'
            : '1px solid rgba(234,179,8,0.2)',
          boxShadow: theme === 'dark'
            ? '0 4px 20px rgba(234,179,8,0.15)'
            : '0 4px 20px rgba(0,0,0,0.1)',
        }}
        aria-label="Переключить тему"
      >
        <Icon
          name={theme === 'dark' ? 'Sun' : 'Moon'}
          size={20}
          style={{ 
            color: theme === 'dark' ? '#eab308' : '#0a0a0a',
            transition: 'all 0.3s ease'
          }}
        />
      </button>
    </div>
  );
};

export default AppLayout;