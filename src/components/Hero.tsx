const Hero = () => {
  return (
    <div className="h-screen md:min-h-[calc(100vh-120px)] flex flex-col md:flex-row items-center justify-center md:justify-between relative gap-8 md:gap-12 overflow-hidden md:overflow-visible px-4 md:px-8 lg:px-16">
      {/* Левая часть - текст (на мобильных - центр) */}
      <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2">
        <div className="relative">
          <h1
            className="font-zen tracking-normal text-white leading-none"
            style={{
              fontSize: 'clamp(5rem, 15vw, 20rem)',
              textShadow: '0 0 120px rgba(255,255,255,0.15), 0 0 240px rgba(234,179,8,0.08)',
            }}
          >
            <span className="text-yellow-500">a</span>lbe
          </h1>
          {/* Три полоски под заголовком - только на десктопе */}
          <div className="hidden md:flex items-center gap-4 mt-4">
            <div className="h-1 w-24 rounded-full" style={{ background: '#eab308' }} />
            <div className="h-1 w-12 rounded-full" style={{ background: '#eab30860' }} />
            <div className="h-1 w-6 rounded-full" style={{ background: '#eab30830' }} />
          </div>
        </div>
        
        <p
          className="text-center md:text-left font-light -mt-2 sm:-mt-3 md:mt-8 w-full"
          style={{
            fontSize: 'clamp(1.4rem, 5vw, 6rem)',
            letterSpacing: 'clamp(0.15em, 0.3vw, 0.4em)',
            background: 'linear-gradient(90deg, #3f3f46 0%, #fafafa 30%, #fafafa 70%, #3f3f46 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.3)) drop-shadow(0 0 80px rgba(255,255,255,0.1))',
            wordSpacing: '-0.1em',
          }}
        >
          DIGITAL AGENCY
        </p>

        <div className="mt-6 md:mt-12 text-center md:text-left">
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-zinc-500 leading-tight uppercase">
            МЫ СОЗДАЕМ НЕ ПРОСТО САЙТЫ
          </p>
          <p
            className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide leading-tight uppercase mt-1"
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

      {/* Правая часть - iMac (только на десктопе) */}
      <div className="hidden md:flex w-1/2 justify-center items-center">
        <img 
          src="https://cdn.poehali.dev/files/c51e6326-95f9-4990-b006-2c6315d43134.png" 
          alt="iMac" 
          className="w-full max-w-4xl object-contain"
          style={{
            filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5))',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;