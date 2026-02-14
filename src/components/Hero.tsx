const Hero = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center justify-center mb-12 md:mb-20">
        <h1
          className="font-zen text-[8rem] sm:text-[10rem] md:text-[16rem] lg:text-[20rem] tracking-normal text-white leading-none"
          style={{
            textShadow: '0 0 80px rgba(255,255,255,0.08), 0 0 160px rgba(234,179,8,0.04)',
          }}
        >
          <span className="text-yellow-500" style={{ textShadow: '0 0 60px rgba(234,179,8,0.3), 0 0 120px rgba(234,179,8,0.1)' }}>a</span>lbe
        </h1>
        <p
          className="text-center font-light whitespace-nowrap tracking-[0.3em] text-zinc-400 text-[2rem] sm:text-[2.8rem] md:text-[4.4rem] lg:text-[5.6rem] -mt-2 sm:-mt-3 md:-mt-8 lg:-mt-12"
        >
          DIGITAL AGENCY
        </p>
      </div>
      
      <div className="px-4 sm:px-8 md:px-16 mb-20 md:mb-32">
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