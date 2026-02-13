const Hero = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center justify-center">
        <h1
          className="font-zen text-[12rem] md:text-[16rem] lg:text-[20rem] tracking-normal text-white leading-none"
          style={{
            textShadow: '0 0 80px rgba(255,255,255,0.08), 0 0 160px rgba(234,179,8,0.04)',
          }}
        >
          <span className="text-yellow-500" style={{ textShadow: '0 0 60px rgba(234,179,8,0.3), 0 0 120px rgba(234,179,8,0.1)' }}>a</span>lbe
        </h1>
        <p
          className="w-full text-center font-light tracking-[0.5em] text-zinc-400 text-[1.6rem] md:text-[2.4rem] lg:text-[3rem] -mt-4 md:-mt-8 lg:-mt-12"
        >
          DIGITAL AGENCY
        </p>
      </div>

      <div className="w-[280px] md:w-[400px] lg:w-[500px] h-px bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent mt-10 mb-10" />
      
      <div className="px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-4xl lg:text-5xl font-extralight tracking-wider text-zinc-500 leading-relaxed uppercase">
            МЫ СОЗДАЕМ НЕ ПРОСТО САЙТЫ
          </p>
          <p
            className="text-2xl md:text-4xl lg:text-5xl font-extralight tracking-wider leading-relaxed uppercase mt-2"
            style={{
              background: 'linear-gradient(90deg, #a1a1aa 0%, #ffffff 50%, #a1a1aa 100%)',
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
