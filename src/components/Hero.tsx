const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center relative gap-8 md:gap-12">
      <div className="flex flex-col items-center justify-center">
        <h1
          className="font-zen text-[8rem] sm:text-[10rem] md:text-[16rem] lg:text-[20rem] tracking-normal text-white leading-none"
          style={{
            textShadow: '0 0 80px rgba(255,255,255,0.08), 0 0 160px rgba(234,179,8,0.04)',
          }}
        >
          <span className="text-yellow-500" style={{ textShadow: '0 0 60px rgba(234,179,8,0.3), 0 0 120px rgba(234,179,8,0.1)' }}>a</span>lbe
        </h1>
        <p
          className="text-center font-light tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] text-[1.2rem] sm:text-[2rem] md:text-[3.2rem] lg:text-[4.4rem] -mt-2 sm:-mt-3 md:-mt-6 lg:-mt-8 px-4"
          style={{
            background: 'linear-gradient(90deg, #3f3f46 0%, #fafafa 30%, #fafafa 70%, #3f3f46 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: 'none',
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