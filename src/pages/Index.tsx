import { useEffect, useState } from "react";

const Index = () => {
  const [lines, setLines] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(prev => {
        if (prev.length >= 12) return prev;
        return [...prev, prev.length];
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

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
        <div className="max-w-[1800px] w-full grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-16">
            <h2 className="text-[11px] tracking-[0.3em] uppercase text-foreground/40 font-light">
              Digital Agency
            </h2>
            
            <h1 className="text-[6rem] md:text-[8rem] lg:text-[10rem] font-zen tracking-[0.15em] leading-[0.85] text-foreground">
              albe
            </h1>
            
            <div className="max-w-2xl space-y-6">
              <p className="text-lg md:text-xl font-light tracking-[0.05em] text-foreground/70 leading-relaxed">
                МЫ СОЗДАЕМ НЕ ПРОСТО САЙТЫ — МЫ СОЗДАЕМ БИЗНЕС
              </p>
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 border border-foreground/10 rounded-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-12 border-b border-foreground/10 flex items-center px-6 gap-2">
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
              </div>

              <div className="absolute top-12 left-0 right-0 bottom-0 p-8 space-y-4 font-mono text-xs">
                {lines.map((line, i) => (
                  <div 
                    key={line} 
                    className="flex gap-4 animate-fade-in"
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      opacity: 0,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <span className="text-foreground/30 w-8 text-right">{line + 1}</span>
                    <div className="flex-1 space-y-2">
                      {i === 0 && (
                        <div className="flex gap-2">
                          <span className="text-primary">const</span>
                          <span className="text-foreground/60">website</span>
                          <span className="text-foreground/40">=</span>
                          <span className="text-foreground/60">{'{'}</span>
                        </div>
                      )}
                      {i === 1 && (
                        <div className="pl-4 flex gap-2">
                          <span className="text-foreground/60">design:</span>
                          <span className="text-primary/80">'premium'</span>
                          <span className="text-foreground/40">,</span>
                        </div>
                      )}
                      {i === 2 && (
                        <div className="pl-4 flex gap-2">
                          <span className="text-foreground/60">performance:</span>
                          <span className="text-primary/80">'ultra-fast'</span>
                          <span className="text-foreground/40">,</span>
                        </div>
                      )}
                      {i === 3 && (
                        <div className="pl-4 flex gap-2">
                          <span className="text-foreground/60">conversion:</span>
                          <span className="text-primary/80">'optimized'</span>
                          <span className="text-foreground/40">,</span>
                        </div>
                      )}
                      {i === 4 && (
                        <div className="flex gap-2">
                          <span className="text-foreground/60">{'}'}</span>
                        </div>
                      )}
                      {i === 5 && <div className="h-4" />}
                      {i === 6 && (
                        <div className="flex gap-2">
                          <span className="text-primary">function</span>
                          <span className="text-foreground/60">createBusiness</span>
                          <span className="text-foreground/40">() {'{'}</span>
                        </div>
                      )}
                      {i === 7 && (
                        <div className="pl-4 flex gap-2">
                          <span className="text-primary">return</span>
                          <span className="text-foreground/60">deploy(website)</span>
                        </div>
                      )}
                      {i === 8 && (
                        <div className="flex gap-2">
                          <span className="text-foreground/40">{'}'}</span>
                        </div>
                      )}
                      {i === 9 && <div className="h-4" />}
                      {i === 10 && (
                        <div className="flex gap-2">
                          <span className="text-foreground/60">createBusiness()</span>
                        </div>
                      )}
                      {i === 11 && (
                        <div className="flex gap-2 items-center">
                          <span className="text-primary/80">✓</span>
                          <span className="text-foreground/40">Business is live</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1 h-12 bg-primary/20 animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
