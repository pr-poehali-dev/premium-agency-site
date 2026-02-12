import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-8 py-8 flex items-center justify-between">
          <h1 className="text-4xl font-zen tracking-[0.3em] text-primary">albe</h1>
          <Button 
            variant="ghost" 
            size="sm" 
            className="border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 rounded-none px-8 py-5 text-xs tracking-widest uppercase"
          >
            Связаться
          </Button>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

        <div className="container mx-auto px-8 text-center relative z-10 max-w-6xl">
          <div className="mb-20 animate-fade-in-slow">
            <h1 className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-zen mb-0 text-primary tracking-[0.2em] leading-none">
              albe
            </h1>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="h-px w-32 bg-primary/50 mx-auto" />
            
            <p className="text-xl md:text-2xl font-light tracking-[0.15em] uppercase text-foreground/80 leading-relaxed">
              МЫ СОЗДАЕМ НЕ ПРОСТО САЙТЫ
            </p>
            
            <p className="text-3xl md:text-5xl font-light tracking-[0.1em] text-primary leading-tight">
              МЫ СОЗДАЕМ БИЗНЕС
            </p>
            
            <div className="h-px w-32 bg-primary/50 mx-auto" />
          </div>

          <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-500 text-sm px-16 py-7 rounded-none tracking-[0.2em] uppercase font-light"
            >
              Начать проект
            </Button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary/50" />
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Scroll</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
