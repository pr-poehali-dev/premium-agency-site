const Hero = () => {
  return (
    <div className="h-screen md:min-h-[calc(100vh-120px)] flex flex-col items-center justify-center relative gap-8 md:gap-12 overflow-hidden md:overflow-visible">
      <div className="flex flex-col items-center justify-center w-full px-4">
        <h1
          className="font-zen tracking-normal text-white leading-none"
          style={{
            fontSize: 'clamp(5rem, 22vw, 28rem)',
            textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.6), 0 16px 48px rgba(0,0,0,0.4), 0 0 120px rgba(255,255,255,0.1), 0 0 240px rgba(234,179,8,0.06)',
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
          }}
        >
          <span className="text-yellow-500" style={{
            textShadow: '0 4px 12px rgba(234,179,8,0.6), 0 8px 24px rgba(234,179,8,0.4), 0 16px 48px rgba(234,179,8,0.2), 0 0 80px rgba(234,179,8,0.3)',
          }}>a</span>lbe
        </h1>
        <div className="flex items-center gap-4 mt-4 mb-2">
          <div className="h-1 w-24 rounded-full" style={{ background: '#eab308' }} />
          <div className="h-1 w-12 rounded-full" style={{ background: 'rgba(234,179,8,0.6)' }} />
          <div className="h-1 w-6 rounded-full" style={{ background: 'rgba(234,179,8,0.3)' }} />
        </div>
        <p
          className="text-center font-light -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-6 w-full"
          style={{
            fontSize: 'clamp(1.4rem, 7vw, 8rem)',
            letterSpacing: 'clamp(0.15em, 0.5vw, 0.5em)',
            background: 'linear-gradient(90deg, #3f3f46 0%, #fafafa 30%, #fafafa 70%, #3f3f46 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.3)) drop-shadow(0 0 80px rgba(255,255,255,0.1))',
            wordSpacing: '-0.1em',
          }}
        >
          DIGITAL AGENCY
        </p>
      </div>
      
      <div className="px-4 sm:px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-xl md:text-3xl lg:text-4xl font-light tracking-wide text-zinc-500 leading-tight uppercase">
            МЫ СОЗДАЕМ НЕ ПРОСТО САЙТЫ
          </p>
          <p
            className="text-base sm:text-xl md:text-3xl lg:text-4xl font-light tracking-wide leading-tight uppercase mt-1"
            style={{
              background: 'linear-gradient(90deg, #71717a 0%, #ffffff 50%, #71717a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            МЫ СОЗДАЕМ БИЗНЕС
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;