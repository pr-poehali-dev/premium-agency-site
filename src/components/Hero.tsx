const Hero = () => {
  return (
    <div className="h-screen md:min-h-[calc(100vh-120px)] flex flex-col items-center justify-center relative gap-8 md:gap-16 overflow-hidden">
      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <div 
          className="absolute left-[15%] top-0 bottom-0 w-px"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(234,179,8,0.15) 30%, rgba(234,179,8,0.25) 50%, rgba(234,179,8,0.15) 70%, transparent 100%)',
            boxShadow: '0 0 20px rgba(234,179,8,0.1)'
          }}
        />
        <div 
          className="absolute right-[15%] top-0 bottom-0 w-px"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(234,179,8,0.15) 30%, rgba(234,179,8,0.25) 50%, rgba(234,179,8,0.15) 70%, transparent 100%)',
            boxShadow: '0 0 20px rgba(234,179,8,0.1)'
          }}
        />
        <div 
          className="absolute left-0 right-0 top-[30%] h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 15%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 85%, transparent 100%)'
          }}
        />
        <div 
          className="absolute left-0 right-0 bottom-[25%] h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 15%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 85%, transparent 100%)'
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full px-4 relative z-10">
        <div className="hidden md:block absolute -top-16 left-1/2 -translate-x-1/2">
          <div 
            className="font-montserrat text-xs uppercase tracking-[0.3em] text-zinc-600"
            style={{
              textShadow: '0 0 20px rgba(255,255,255,0.1)'
            }}
          >
            Premium Digital Experience
          </div>
        </div>

        <h1
          className="font-zen tracking-normal text-white leading-none relative"
          style={{
            fontSize: 'clamp(5rem, 22vw, 28rem)',
            textShadow: '0 0 120px rgba(255,255,255,0.2), 0 0 240px rgba(234,179,8,0.15)',
          }}
        >
          <span 
            className="text-yellow-500 relative"
            style={{
              textShadow: '0 0 80px rgba(234,179,8,0.5), 0 0 40px rgba(234,179,8,0.3)'
            }}
          >
            a
          </span>lbe
        </h1>
        <p
          className="text-center font-light -mt-2 sm:-mt-3 md:-mt-8 lg:-mt-12 xl:-mt-16 w-full"
          style={{
            fontSize: 'clamp(1.4rem, 7vw, 8rem)',
            letterSpacing: 'clamp(0.15em, 0.5vw, 0.6em)',
            background: 'linear-gradient(90deg, #27272a 0%, #fafafa 25%, #fafafa 75%, #27272a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.15))',
            wordSpacing: '-0.05em',
          }}
        >
          DIGITAL AGENCY
        </p>
        
        <div className="hidden md:flex items-center gap-8 mt-8">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-zinc-700" />
          <div className="font-montserrat text-sm text-zinc-500 tracking-wider uppercase">
            Создаём цифровые продукты мирового уровня
          </div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-zinc-700" />
        </div>
      </div>
      
      <div className="px-4 sm:px-8 md:px-16 relative z-10 md:mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="hidden md:flex items-center justify-center gap-12 mb-10">
            <div className="text-center">
              <div className="font-zen text-4xl text-white mb-1">7+</div>
              <div className="font-montserrat text-xs text-zinc-500 uppercase tracking-wider">Лет опыта</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
            <div className="text-center">
              <div className="font-zen text-4xl text-white mb-1">30+</div>
              <div className="font-montserrat text-xs text-zinc-500 uppercase tracking-wider">Проектов в год</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
            <div className="text-center">
              <div className="font-zen text-4xl text-white mb-1">98%</div>
              <div className="font-montserrat text-xs text-zinc-500 uppercase tracking-wider">Довольных клиентов</div>
            </div>
          </div>

          <div className="text-center space-y-3 md:space-y-4">
            <p 
              className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide leading-tight uppercase"
              style={{
                background: 'linear-gradient(90deg, #52525b 0%, #a1a1aa 50%, #52525b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Мы создаём не просто сайты
            </p>
            <div className="hidden md:flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-500/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-500/30" />
            </div>
            <p
              className="text-base sm:text-xl md:text-3xl lg:text-5xl font-light tracking-wide leading-tight uppercase"
              style={{
                background: 'linear-gradient(90deg, #71717a 0%, #ffffff 30%, #ffffff 70%, #71717a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 80px rgba(255,255,255,0.2)',
              }}
            >
              Мы создаём бизнес
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;