import Hero from '@/components/Hero';
import DockMenu from '@/components/DockMenu';
import PremiumBackground from '@/components/PremiumBackground';

const Index = () => {
  return (
    <div className="h-screen bg-black text-foreground overflow-hidden relative">
      <PremiumBackground />
      <div className="relative z-10 h-full flex flex-col">
        <Hero />
        <DockMenu />
      </div>
    </div>
  );
};

export default Index;
