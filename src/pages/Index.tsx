const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/5">
        <div className="max-w-[1600px] mx-auto px-12 py-6 flex items-center justify-between">
          <div className="text-2xl font-zen tracking-[0.5em] text-foreground">albe</div>
          
          <div className="hidden md:flex items-center gap-16 text-[10px] tracking-[0.3em] uppercase font-light">
            <button className="text-foreground/50 hover:text-foreground transition-colors duration-300">Услуги</button>
            <button className="text-foreground/50 hover:text-foreground transition-colors duration-300">Проекты</button>
            <button className="text-foreground/50 hover:text-foreground transition-colors duration-300">Контакты</button>
          </div>
          
          <button className="text-[10px] tracking-[0.3em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-300">
            +7 495 123 45 67
          </button>
        </div>
      </nav>

      <main className="pt-24 min-h-screen flex items-center">
        <div className="max-w-[1600px] mx-auto px-12 w-full">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-24 items-center">
            <div className="space-y-16 py-20">
              <div className="space-y-8">
                <div className="inline-block px-1">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-foreground/40 font-light mb-2">
                    Premium Digital Agency
                  </div>
                  <div className="w-12 h-px bg-primary/60" />
                </div>
                
                <h1 className="text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.9] tracking-tight text-foreground">
                  МЫ СОЗДАЕМ<br />
                  <span className="text-foreground/40">НЕ ПРОСТО САЙТЫ</span>
                </h1>
              </div>

              <p className="text-xl font-light text-foreground/60 max-w-xl leading-relaxed tracking-wide">
                МЫ СОЗДАЕМ БИЗНЕС
              </p>

              <div className="flex items-center gap-8">
                <button className="bg-foreground text-background px-12 py-5 text-[10px] tracking-[0.3em] uppercase font-light hover:bg-foreground/90 transition-colors duration-300">
                  Обсудить проект
                </button>
                
                <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-foreground/40">
                  <div className="w-12 h-px bg-foreground/20" />
                  <span>с 2015 года</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[600px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 backdrop-blur-3xl" />
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img 
                      src="https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/3b92c666-db1a-4e8e-b907-4a23819bed50.jpg" 
                      alt="Premium Design" 
                      className="w-[450px] h-[450px] object-cover opacity-60"
                    />
                  </div>
                  
                  <div className="absolute inset-0 border border-foreground/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-12 left-12 text-[9px] tracking-[0.3em] uppercase text-foreground/30">
        Moscow
      </div>
      
      <div className="fixed bottom-12 right-12 flex items-center gap-3">
        <div className="w-8 h-px bg-foreground/20" />
        <div className="text-[9px] tracking-[0.3em] uppercase text-foreground/30">Scroll</div>
      </div>
    </div>
  );
};

export default Index;
