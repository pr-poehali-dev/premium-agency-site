const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center relative gap-8 md:gap-12">
      <div className="flex flex-col items-center justify-center w-full px-4">
        <h1
          className="font-zen tracking-normal text-white leading-none"
          style={{
            fontSize: 'clamp(5rem, 22vw, 28rem)',
            textShadow: '0 0 120px rgba(0,240,255,0.2), 0 0 240px rgba(0,240,255,0.1)',
          }}
        >
          <span style={{ 
            color: '#00F0FF',
            textShadow: '0 0 80px rgba(0,240,255,0.6), 0 0 160px rgba(0,240,255,0.3)' 
          }}>a</span>lbe
        </h1>
        <p
          className="text-center font-light -mt-2 sm:-mt-3 md:-mt-8 lg:-mt-12 xl:-mt-16 w-full"
          style={{
            fontSize: 'clamp(1.4rem, 7vw, 8rem)',
            letterSpacing: 'clamp(0.15em, 0.5vw, 0.5em)',
            background: 'linear-gradient(90deg, #B0B8C5 0%, #FFFFFF 30%, #FFFFFF 70%, #B0B8C5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 40px rgba(0,240,255,0.15)) drop-shadow(0 0 80px rgba(138,109,233,0.1))',
            wordSpacing: '-0.1em',
          }}
        >
          DIGITAL AGENCY
        </p>
      </div>
      
      <div className="px-4 sm:px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-xl md:text-3xl lg:text-4xl font-light tracking-wide leading-tight uppercase" style={{ color: '#B0B8C5' }}>
            МЫ СОЗДАЕМ НЕ ПРОСТО САЙТЫ
          </p>
          <p
            className="text-base sm:text-xl md:text-3xl lg:text-4xl font-light tracking-wide leading-tight uppercase mt-1"
            style={{
              background: 'linear-gradient(90deg, #00F0FF 0%, #8A6DE9 50%, #00F0FF 100%)',
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