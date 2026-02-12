const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-8">
        <div className="flex items-center justify-between max-w-[1800px] mx-auto">
          <h1 className="text-2xl font-zen tracking-[0.4em] text-foreground">albe</h1>
          <button className="text-[11px] tracking-[0.25em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-700">
            Contact
          </button>
        </div>
      </nav>

      <main className="min-h-screen flex items-center justify-center px-12">
        <div className="max-w-[1400px] w-full">
          <div className="space-y-16">
            <h2 className="text-[11px] tracking-[0.3em] uppercase text-foreground/40 font-light">
              Digital Agency
            </h2>
            
            <h1 className="text-[6rem] md:text-[9rem] lg:text-[12rem] font-zen tracking-[0.15em] leading-[0.85] text-foreground">
              albe
            </h1>
            
            <div className="max-w-2xl space-y-6">
              <p className="text-lg md:text-xl font-light tracking-[0.05em] text-foreground/70 leading-relaxed">
                МЫ СОЗДАЕМ НЕ ПРОСТО САЙТЫ — МЫ СОЗДАЕМ БИЗНЕС
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
