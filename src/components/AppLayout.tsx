import { ReactNode } from 'react';
import DockMenu from '@/components/DockMenu';
import PremiumBackground from '@/components/PremiumBackground';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-black text-foreground relative">
      <PremiumBackground />
      <div className="relative z-10 min-h-screen">
        {children}
        <DockMenu />
      </div>
    </div>
  );
};

export default AppLayout;