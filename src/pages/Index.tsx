const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <nav className="border-b border-foreground/5">
        <div className="max-w-[1800px] mx-auto px-16 py-8 flex items-center justify-between">
          <div className="text-xl font-zen tracking-[0.5em] text-foreground">albe</div>
          
          <div className="hidden md:flex items-center gap-20 text-[9px] tracking-[0.35em] uppercase">
            <button className="text-foreground/40 hover:text-foreground transition-colors duration-500">Услуги</button>
            <button className="text-foreground/40 hover:text-foreground transition-colors duration-500">Проекты</button>
            <button className="text-foreground/40 hover:text-foreground transition-colors duration-500">Контакты</button>
          </div>
          
          <button className="text-[9px] tracking-[0.35em] uppercase text-foreground/40 hover:text-foreground transition-colors duration-500">
            +7 495 123 45 67
          </button>
        </div>
      </nav>

      <main className="flex-1 flex items-center">
        <div className="max-w-[1800px] mx-auto px-16 w-full py-32">
          <div className="max-w-5xl">
            <div className="space-y-4 mb-20">
              <div className="text-[9px] tracking-[0.4em] uppercase text-foreground/30 font-light">
                Premium Digital Agency
              </div>
              <div className="w-16 h-px bg-primary" />
            </div>
            
            <h1 className="text-[8rem] lg:text-[11rem] xl:text-[13rem] font-light leading-[0.85] tracking-[-0.02em] mb-16">
              МЫ СОЗДАЕМ<br />
              <span className="text-foreground/25">НЕ ПРОСТО</span><br />
              <span className="text-foreground/25">САЙТЫ</span>
            </h1>

            <div className="w-px h-32 bg-gradient-to-b from-primary to-transparent mb-16 ml-2" />

            <p className="text-3xl font-light tracking-wide text-foreground/60 mb-24 max-w-2xl">
              МЫ СОЗДАЕМ БИЗНЕС
            </p>

            <button className="bg-foreground text-background px-16 py-6 text-[9px] tracking-[0.35em] uppercase hover:bg-foreground/95 transition-all duration-500">
              Обсудить проект
            </button>
          </div>
        </div>
      </main>

      <footer className="border-t border-foreground/5">
        <div className="max-w-[1800px] mx-auto px-16 py-8 flex items-center justify-between">
          <div className="text-[9px] tracking-[0.35em] uppercase text-foreground/20">
            Moscow, 2026
          </div>
          <div className="text-[9px] tracking-[0.35em] uppercase text-foreground/20">
            Since 2015
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
