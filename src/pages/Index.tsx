const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.15),transparent)]" />
      
      <nav className="relative z-50 px-8 lg:px-16 py-6 flex items-center justify-between border-b border-foreground/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
            <span className="text-xs font-zen tracking-wider text-primary">AL</span>
          </div>
          <h1 className="text-xl font-zen tracking-[0.4em] text-foreground">ALBE</h1>
        </div>
        
        <div className="hidden md:flex gap-12 text-[11px] tracking-[0.2em] uppercase">
          <button className="text-foreground/40 hover:text-foreground transition-colors duration-500">Услуги</button>
          <button className="text-foreground/40 hover:text-foreground transition-colors duration-500">Портфолио</button>
          <button className="text-foreground/40 hover:text-foreground transition-colors duration-500">О нас</button>
        </div>
        
        <button className="border border-foreground/20 px-6 py-2 text-[11px] tracking-[0.2em] uppercase text-foreground/60 hover:border-primary hover:text-primary transition-all duration-500">
          Связаться
        </button>
      </nav>

      <main className="relative z-10 min-h-[calc(100vh-80px)] flex items-center px-8 lg:px-16">
        <div className="max-w-[1800px] w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="inline-block border border-foreground/20 px-6 py-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/50">
                Digital Excellence
              </span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-light leading-[1.1] tracking-tight">
                <span className="text-foreground">МЫ СОЗДАЕМ</span>
                <br />
                <span className="text-foreground/30 italic">не просто сайты</span>
              </h1>
              
              <div className="w-px h-24 bg-gradient-to-b from-primary via-primary/50 to-transparent ml-1" />
              
              <p className="text-lg text-foreground/60 max-w-lg leading-relaxed tracking-wide">
                Современно. Технологично. Эффективно. Прибыльно.
              </p>
            </div>

            <div className="flex gap-6">
              <button className="bg-foreground text-background px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-foreground/90 transition-all duration-300">
                Начать проект
              </button>
              <button className="border border-foreground/20 px-10 py-4 text-[11px] tracking-[0.25em] uppercase text-foreground/60 hover:border-foreground hover:text-foreground transition-all duration-300">
                Консультация
              </button>
            </div>

            <div className="grid grid-cols-4 gap-8 pt-12 border-t border-foreground/10">
              <div>
                <div className="text-4xl font-light text-foreground mb-2">100<span className="text-primary">%</span></div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-foreground/40">Конверсия</div>
              </div>
              <div>
                <div className="text-4xl font-light text-foreground mb-2">24<span className="text-primary">/</span>7</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-foreground/40">Поддержка</div>
              </div>
              <div>
                <div className="text-4xl font-light text-foreground mb-2">∞</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-foreground/40">Возможности</div>
              </div>
              <div>
                <div className="text-4xl font-light text-foreground mb-2">A<span className="text-primary">+</span></div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-foreground/40">Качество</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block h-[700px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-sm" />
            <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-tl from-primary/10 to-transparent rounded-sm" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
              <div className="absolute inset-0 bg-gradient-conic from-primary/30 via-transparent to-primary/30 blur-3xl animate-[spin_20s_linear_infinite]" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="text-[20rem] font-zen text-primary/10 leading-none tracking-wider">
                    albe
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-64 h-64 border border-primary/30 rounded-sm flex items-center justify-center backdrop-blur-sm bg-background/50">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 border-2 border-primary mx-auto rounded-sm flex items-center justify-center">
                          <div className="w-8 h-8 bg-primary animate-pulse" />
                        </div>
                        <div className="text-xs tracking-[0.3em] uppercase text-foreground/60">
                          Creating<br />Business
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-10 right-10 w-40 h-40 border border-primary/20 rounded-sm backdrop-blur-sm bg-background/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-zen text-primary mb-2">98%</div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-foreground/40">Success Rate</div>
              </div>
            </div>

            <div className="absolute bottom-10 left-10 w-40 h-40 border border-primary/20 rounded-sm backdrop-blur-sm bg-background/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-zen text-primary mb-2">500+</div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-foreground/40">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
