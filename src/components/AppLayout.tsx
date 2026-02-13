import { ReactNode } from 'react';
import DockMenu from '@/components/DockMenu';
import PremiumBackground from '@/components/PremiumBackground';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="h-screen bg-black text-foreground overflow-hidden relative">
      <PremiumBackground />
      <div className="relative z-10 h-full flex flex-col">
        {children}
        <DockMenu />
      </div>
    </div>
  );
};

export default AppLayout;
