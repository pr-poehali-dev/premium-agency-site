import { useEffect, useState } from "react";

const Index = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 800);
    return () => clearTimeout(timer);
  }, []);

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

            <div className="relative hidden lg:flex items-center justify-center h-[600px]">
              <div className="relative w-full h-full flex items-center justify-center">
                {!showLogo && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      animation: 'flashFade 1.2s ease-out forwards'
                    }}
                  >
                    <div className="w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
                  </div>
                )}
                
                {showLogo && (
                  <div 
                    className="text-[14rem] font-zen tracking-[0.2em] text-foreground leading-none"
                    style={{
                      animation: 'fadeInScale 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                      opacity: 0
                    }}
                  >
                    albe
                  </div>
                )}
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

      <style>{`
        @keyframes flashFade {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          40% {
            opacity: 1;
            transform: scale(1.8);
          }
          100% {
            opacity: 0;
            transform: scale(2.5);
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
