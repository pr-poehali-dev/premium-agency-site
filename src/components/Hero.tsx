const Hero = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center justify-center mb-20">
        <h1
          className="font-zen text-[12rem] md:text-[16rem] lg:text-[20rem] tracking-tight text-white leading-none font-bold"
          style={{
            textShadow: '0 0 80px rgba(255,255,255,0.08), 0 0 160px rgba(234,179,8,0.04)',
          }}
        >
          <span className="text-yellow-500" style={{ textShadow: '0 0 60px rgba(234,179,8,0.3), 0 0 120px rgba(234,179,8,0.1)' }}>a</span>lbe
        </h1>
        <p
          className="text-center font-light whitespace-nowrap tracking-[0.35em] text-transparent text-[2.6rem] md:text-[3.6rem] lg:text-[4.6rem] -mt-6 md:-mt-10 lg:-mt-14 uppercase"
          style={{
            WebkitTextStroke: '1.5px rgba(255,255,255,0.9)',
            textStroke: '1.5px rgba(255,255,255,0.9)',
          }}
        >
          DIGITAL AGENCY
        </p>
      </div>
      
      <div className="px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-zinc-500 leading-tight uppercase">
            МЫ СОЗДАЕМ НЕ ПРОСТО САЙТЫ
          </p>
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide leading-tight uppercase mt-1"
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
