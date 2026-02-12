import Hero from '@/components/Hero';
import DockMenu from '@/components/DockMenu';

const Index = () => {
  return (
    <div className="h-screen bg-black text-foreground overflow-hidden">
      <Hero />
      <DockMenu />
    </div>
  );
};

export default Index;
